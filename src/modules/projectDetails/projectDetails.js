import React, { useEffect, useState } from "react";
import Banner from "./banner";
import Status from "./taskStatus";
import Task from "./task";
import ClaimReward from "./claimReward";
import { connect } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

function ProjectDetails(props) {
  const [currentTask, setCurrentTask] = useState(0);
  const [isActivated, setIsActivated] = useState(false);
  const [isClaim, setIsClaim] = useState(false);
  const [activatedProjectId, setActivatedProjectId] = useState(null);
  const [activatedProjectDetails, setActivatedProjectDetails] = useState({});

  useEffect(() => {
    const checkIsCurrentProjectActive = async () => {
      const status = props?.activatedProjects?.map((project) => {
        if (project.projectId === props?.currentProjectId) {
          setIsActivated(true);
          setCurrentTask(project.completedTasks);
          setActivatedProjectId(project._id);
          setActivatedProjectDetails(project);
          return true;
        } else {
          setCurrentTask(0);
        }
        return false;
      });
    };

    checkIsCurrentProjectActive();
  }, [props]);

  const handleClaim = () => {
    setIsClaim(true);
  };

  const handleTask = () => {
    // if (currentTask < props?.projectDetails?.tasks.length) {
    //   setCurrentTask(currentTask + 1);
    // }
    const result = props?.getActivatedProjectsByAddress();
  };

  const handleWallet = () => {
    const result = props?.connectWallet();
  };

  return (
    <div className="px-5 md:px-11 lg:px-24.5 xl:px-45 2xl:px-65 3xl:px-90 bg-white-50 pt-27px md:pt-8 lg:pt-23px relative">
      {props?.isLoading ? (
        <div className="absolute top-3per left-50per">
          <CircularProgress />
        </div>
      ) : (
        ""
      )}
      <Banner projectDetails={props?.projectDetails} />
      <Status
        currentTask={currentTask}
        isActivated={isActivated}
        isClaim={isClaim}
        totalTasks={props?.projectDetails?.tasks}
      />
      {currentTask < props?.projectDetails?.tasks?.length ? (
        <Task
          taskId={
            props?.projectDetails?.tasks &&
            props?.projectDetails?.tasks[currentTask]
          }
          handleTask={handleTask}
          handleWallet={handleWallet}
          isActivated={isActivated}
          getTaskById={props?.getTaskById}
          activateProject={props?.activateProject}
          isActivating={props?.isActivating}
          validateTask={props?.validateTask}
          activatedProjectId={activatedProjectId}
          currentTask={currentTask}
          loader={props?.loader}
          currentProjectId={props?.currentProjectId}
        />
      ) : props?.projectDetails?.tasks ? (
        <ClaimReward
          handleTask={handleTask}
          handleClaim={handleClaim}
          isClaim={isClaim}
          activatedProjectId={activatedProjectId}
          activatedProjectDetails={activatedProjectDetails}
          claimReward={props?.claimReward}
          currentProjectId={props.currentProjectId}
        />
      ) : (
        <div className="min-h-320px block lg:flex lg:flex-row pb-10 md:pb-16">
          <div className="bg-slate-150 animate-pulse min-h-320px w-full h-320px lg:mr-30px rounded-lg mb-5 lg:mb-0"></div>
          <div className="bg-slate-150 animate-pulse min-h-320px w-full lg:w-4/5 h-320px rounded-lg"></div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProjectDetails);
