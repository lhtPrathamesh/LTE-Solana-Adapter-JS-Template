import React, { useEffect, useState } from "react";
import Banner from "../banner/banner";
import DashboardComponent from "./dashboard";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import { validationMessages } from "../../constants/index";
import { handleLogin, handleLogout } from "../../action";
import { connect } from "react-redux";
import Utility from "../../utility";
import { CourseService } from "../../services/index";

function Dashboard(props) {
  const [projects, setprojects] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 1;
  const [filterMobile, setFilterMobile] = useState(false);

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
  }, [toasts]);

  useEffect(() => {
    // Get Projects API Call
    getProjects();
    checkExtension();
  }, []);

  const checkExtension = async () => {
    setTimeout(() => {
      if (!window.phantom) {
        props.logout({ address: null });
      }
    }, 1000)
  };

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

  const getProjects = async (projects = [], types = []) => {
    setIsLoading(true);
    let requestData = {
      skip: 0,
      limit: 10,
      project: projects,
      type: types,
    };

    let [error, response] = await Utility.parseResponse(
      CourseService.getProjects(requestData)
    );

    if (error || !response) {
      toast.error(validationMessages.PROJECTS_FETCH_FAILED, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
      setIsLoading(false);
      return;
    }

    setprojects(response.data);
    setIsLoading(false);
  };

  return (
    <div>
      <Toaster />
      {!filterMobile && (
        <Banner
          connectWallet={connectWallet}
          walletAddress={props.user?.walletDetails?.address}
        />
      )}
      <DashboardComponent
        projectList={projects}
        isloading={isloading}
        getProjects={getProjects}
        filterMobile={filterMobile}
        setFilterMobile={setFilterMobile}
        checkExtension={checkExtension}
      />
    </div>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
