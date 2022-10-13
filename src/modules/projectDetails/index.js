import React, { useEffect, useState } from "react";
import ProjectDetailsComponent from "./projectDetails";
import Utility from "../../utility";
import toast, { Toaster } from "react-hot-toast";
import courseService from "../../services/courseService";
import { validationMessages } from "../../constants";
import { connect } from "react-redux";
import { handleLogin, handleLogout } from "../../action";

const ProjectDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectDetails, setProjectDetails] = useState({});
  const [activatedProjects, setActivatedProjects] = useState([]);
  const [isActivating, setIsActivating] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setIsLoading(true);
    setTimeout(() => {
      checkExtension();
      getProjectById(props?.location?.pathname?.split("/")[2]);
      getActivatedProjectsByAddress();
    }, 1000);
  }, []);

  const checkExtension = async () => {
    if (!window.phantom) {
      props.logout({ address: null });
      props.user.walletDetails.address = null;
    }
  };

  // connect wallet logic
  const connectWallet = async () => {
    if (window.phantom) {
      const connection = await window.phantom.solana.connect();
      if (connection) {
        const address = connection.publicKey.toString();
        props.login({
          address: address,
        });
      } else {
        toast.error(validationMessages.WALLET_CONNECTION_FAILED, {
          duration: 4000,
          position: validationMessages.TOAST_POSITION,
        });
      }
    } else {
      toast.error(validationMessages.WALLET_NOT_FOUND, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
    }
  };

  // Get Project Details By Project Id
  const getProjectById = async (id) => {
    const requestData = {
      projectId: id?.toString(),
    };

    let [error, response] = await Utility.parseResponse(
      courseService.getProjectById(requestData)
    );

    if (error || !response) {
      toast.error(validationMessages.PROJECT_DETAILS_FETCH_FAILED, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
      setIsLoading(false);
      return;
    }

    setProjectDetails(response[0]);
    setIsLoading(false);
  };

  // Get Task By Task Id
  const getTaskById = async (taskId) => {
    const requestData = {
      taskId: taskId,
    };

    let [error, response] = await Utility.parseResponse(
      courseService.getTaskById(requestData)
    );

    if (error || !response) {
      toast.error(validationMessages.TASK_DETAILS_FETCH_FAILED, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
      return;
    }

    return response[0];
  };

  // Get Activated Projects By a User
  const getActivatedProjectsByAddress = async () => {
    let requestData = {
      address: props.user?.walletDetails?.address,
    };

    let [error, response] = await Utility.parseResponse(
      courseService.getActivatedProjectsByAddress(requestData)
    );

    if (error && error?.responseCode !== 200) {
      toast.error(validationMessages.ACTIVATED_PROJECTS_FETCH_FAILED, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
      setLoader(false);
      return;
    }

    setActivatedProjects(response);
    setLoader(false);
  };

  // Activate Project for Current User
  const activateProject = async () => {
    setIsActivating(true);
    let requestData = {
      walletAddress: props.user?.walletDetails?.address,
      projectId: props?.location?.pathname?.split("/")[2],
      tasks: projectDetails?.tasks,
    };

    let [error, response] = await Utility.parseResponse(
      courseService.activateProject(requestData)
    );

    if (error || !response) {
      toast.error(validationMessages.ACTIVATE_PROJECT_FAILED, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
      setIsActivating(false);
      return;
    }

    const result = await getActivatedProjectsByAddress();
    if (result) setIsActivating(false);
  };

  // Activate Project for Current User
  const validateTask = async (
    taskId,
    transactionHash,
    videoDuration,
    activatedProjectId
  ) => {
    let requestData = {
      walletAddress: props.user?.walletDetails?.address,
      activatedProjectId: activatedProjectId,
      taskId: taskId,
      validationTransactionHash: transactionHash,
      videoDurationWatched: videoDuration,
    };

    let [error, response] = await Utility.parseResponse(
      courseService.validateTask(requestData)
    );

    if (error || !response) {
      toast.error(validationMessages.VALIDATE_TASK_FAILED, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
      return;
    }

    return response;
  };

  // Claim Reward API
  const claimReward = async (activatedProjectId, crypto, amount, txHash) => {
    let requestData = {
      walletAddress: props.user?.walletDetails?.address,
      activatedProjectId: activatedProjectId,
      crypto: crypto,
      amount: amount,
      senderWalletAddress: "4MeBP8K2ZY8La8eUUcwrXSyx6rmtwb6FosdPFoYvDFom",
      transactionId: txHash,
    };

    let [error, response] = await Utility.parseResponse(
      courseService.claimReward(requestData)
    );

    if (error || !response) {
      toast.error(validationMessages.CLAIM_REWARD_ERROR, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
      return;
    }

    return response;
  };

  return (
    <div className="overflow-x-hidden lg:overflow-y-hidden">
      <Toaster />
      <ProjectDetailsComponent
        connectWallet={connectWallet}
        projectDetails={projectDetails}
        isLoading={isLoading}
        getTaskById={getTaskById}
        activatedProjects={activatedProjects}
        currentProjectId={props?.location?.pathname?.split("/")[2]}
        activateProject={activateProject}
        isActivating={isActivating}
        validateTask={validateTask}
        getActivatedProjectsByAddress={getActivatedProjectsByAddress}
        loader={loader}
        claimReward={claimReward}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (walletDetails) => {
    dispatch(handleLogin(walletDetails));
  },
  logout: (walletDetails) => {
    dispatch(handleLogout(walletDetails));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
