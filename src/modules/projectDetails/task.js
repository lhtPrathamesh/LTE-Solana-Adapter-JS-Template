import React, { useEffect, useState } from "react";
import { history } from "../../managers/history";
import ValidateDialog from "../popup/validateTask";
import VideoPlayer from "react-video-js-player";
import { connect } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { validationMessages, VIDEO_DOM_ID } from "../../constants";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

function Task({
  taskId,
  handleTask,
  handleWallet,
  isActivated,
  getTaskById,
  user,
  activateProject,
  isActivating,
  validateTask,
  activatedProjectId,
  currentTask,
  loader,
  currentProjectId,
}) {
  const [validateDialoag, setValidateDialoag] = useState(false);
  const [taskDetails, setTaskDetails] = useState({});
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoLink, setVideoLink] = useState("");
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
  }, [toasts]);

  useEffect(() => {
    const getTaskDetails = async () => {
      if (taskId !== undefined) {
        const details = await getTaskById(taskId);
        setTaskDetails(details);
        setVideoLink(details?.videoS3Link);
      }
    };
    getTaskDetails();
  }, [taskId, taskDetails?.videoS3Link, user?.walletDetails?.address]);

  const handleVideoDuration = (event) => {
    const video = document.getElementById(VIDEO_DOM_ID);
    setVideoDuration(Number(video.duration.toFixed(2)));
  };

  const handleValidateTask = () => {
    // if (videoDuration > 0) {
    window.innerWidth < 768
      ? history.push({
          pathname: "/validate-task",
          state: {
            currentProjectId: currentProjectId,
          },
          handleTask: handleTask,
          taskId: taskId,
          videoDuration: videoDuration,
          validateCurrentTask: validateTask,
          activatedProjectId: activatedProjectId,
          currentTask: currentTask,
        })
      : setValidateDialoag(true);
    // } else {
    //   toast.error(validationMessages.VIDEO_DURATION_ERROR, {
    //     duration: 4000,
    //     position: validationMessages.TOAST_POSITION,
    //   });
    // }
  };

  return (
    <div className="">
      <Toaster />
      {/* Video Player */}
      <div className="flex flex-col lg:flex-row  md:mb-16 lg:mb-115px">
        <div className="w-full h-183px md:h-371px lg:w-733px lg:h-98 mb-6 lg:mb-0 lg:mr-30px 4xl:w-60per">
          {isActivated ? (
            <div className="w-full h-full">
              {taskDetails &&
              videoLink &&
              Object.keys(taskDetails).length > 0 ? (
                <div className="w-full h-full relative">
                  <VideoPlayer
                    controls={true}
                    src={videoLink}
                    poster=""
                    className="w-full h-full"
                    onEnd={(e) => handleVideoDuration(e)}
                  />
                  {loader ? (
                    <div className="absolute left-45per top-30per">
                      <CircularProgress className="text-white-100" />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/images/pancakeThumbnail.png"
                alt=""
                className="blur-2px w-full h-full"
              />
              {!isActivated ? (
                <div className="flex flex-col items-center justify-center absolute ">
                  {user?.walletDetails?.address ? (
                    <>
                      <span className="font-PoppinsMedium text-ft16 md:text-ft15 leading-50px text-white-100 w-307px min-w-307px md:w-99 md:min-w-99">
                        Interested in this project? Activate it
                      </span>
                      <div
                        className="w-50 h-10 md:h-13 rounded-xl bg-blue-250 flex items-center justify-center cursor-pointer"
                        onClick={() => activateProject()}
                      >
                        <span className="font-PoppinsSemiBold text-ft5 md:text-ft6 text-white-100">
                          {isActivating ? (
                            <div className="">
                              <CircularProgress className="text-white-100 p-1" />
                            </div>
                          ) : (
                            "Activate"
                          )}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="font-PoppinsMedium text-ft16 md:text-ft15 leading-50px text-white-100 w-307px min-w-307px md:w-99 md:min-w-99">
                        Connect wallet to activate this project
                      </span>
                      <div
                        className="w-50 h-10 md:h-13 rounded-xl bg-blue-250 flex items-center justify-center cursor-pointer"
                        onClick={() => handleWallet()}
                      >
                        <span className="font-PoppinsSemiBold text-ft5 md:text-ft6 text-white-100">
                          Connect Wallet
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        <div className="w-full lg:w-35per">
          <div className="font-PoppinsSemiBold text-ft17 md:text-ft11 text-black-100">
            {taskDetails?.name}
          </div>
          <div className="font-PoppinsRegular text-ft4 text-black-50 mb-20">
            {taskDetails?.description}
          </div>
          {isActivated ? (
            <div className="flex items-center justify-center flex-col lg:block">
              <div className="w-50 text-center mb-0.5">
                <span className="font-PoppinsRegular text-ft3 text-black-100">
                  Watched the video?
                </span>
              </div>
              <div
                className="w-50 h-13 bg-blue-250 rounded-xl flex items-center justify-center cursor-pointer"
                onClick={() => handleValidateTask()}
              >
                <span className="font-PoppinsSemiBold text-ft6 text-white-100">
                  Validate Task
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex items-center justify-center pb-15 md:pb-16 lg:pb-90px mobile:mt-4">
        <span className="font-PoppinsMedium text-ft4 text-black-50">
          Facing any technical issue?&nbsp;
        </span>
        <span className="font-PoppinsMedium text-ft4 text-blue-250 cursor-pointer">
          Contact Us
        </span>
      </div>
      {validateDialoag ? (
        <ValidateDialog
          handleClose={() => setValidateDialoag(false)}
          open={validateDialoag}
          handleTask={handleTask}
          taskId={taskId}
          videoDuration={videoDuration}
          validateCurrentTask={validateTask}
          activatedProjectId={activatedProjectId}
          currentTask={currentTask}
        />
      ) : (
        ""
      )}
      {Object.keys(taskDetails).length > 0 ? (
        <>
          <video className="hidden" id={VIDEO_DOM_ID}>
            <source src={taskDetails?.videoS3Link} type="video/mp4" />
          </video>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Task);
