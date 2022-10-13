import React, { useEffect, useState } from "react";
import { history } from "../../managers/history";
import CircularProgress from "@mui/material/CircularProgress";

const ValidateTaskMobile = (props) => {
  const [address, setaddress] = useState(
    "0xafd4f2a6291402355f1f4821f7383f471a8daeebfa9622d03e3fc8c63a1afc53"
  );
  const [isValidating, setIsValidating] = useState(false);
  const [validateSuccess, setValidateSuccess] = useState(false);

  const handleNextTask = async () => {
    setIsValidating(true);
    const response = await props?.location?.validateCurrentTask(
      props?.location?.taskId,
      address,
      props?.location?.videoDuration,
      props?.location?.activatedProjectId
    );
    if (response) {
      setIsValidating(false);
      setValidateSuccess(true);
    }
  };

  const getNextTask = () => {
    const task = props?.location?.handleTask();
    history.push(
      `/project-details/${props?.location?.state?.currentProjectId}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white-50 ">
      <div className="w-343px">
        <div className="font-PoppinsMedium text-ft8 text-left w-full mt-7">
          Validate Task
        </div>
        <div
          className={`w-343px ${
            validateSuccess ? `h-466px` : `h-433px`
          } bg-white-100 rounded-xl mt-2 mb-4`}
        >
          <div className="hidden justify-between px-4 pt-6 sm:flex"></div>
          <div className="text-black-50 font-PoppinsRegular px-4 pt-8 text-ft4">
            <div className="pb-1">
              1. Open <a className="text-blue-250">www.pancakeswap.finance</a>{" "}
              and click on Trade.
            </div>
            <div className="pb-1">2. Connect your wallet.</div>
            <div>3. Make a swap as explained in video.</div>
          </div>
          <div className="pt-10 px-4">
            <div className="text-black-50 font-PoppinsRegular text-ft2">
              Copy paste swap transaction address from{" "}
              <span className="text-blue-250">Solscan</span> and click
              Validate
            </div>
            <div className="border px-15px py-3 border-darkGrey-100 text-black-50 mt-1 mb-7 rounded-lg h-68px">
              <textarea
                type="text"
                className="overflow-hidden border-none outline-none w-full h-full resize-none text-ft4 font-PoppinsRegular"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>
          </div>
          {validateSuccess ? (
            <div className="flex items-center justify-center mb-17px">
              <img
                src="/images/checkGreen.svg"
                alt=""
                className="mr-2 w-17px h-17px"
              />
              <span className="font-PoppinsMedium text-ft4 text-green">
                Success! Task-{props?.location?.currentTask} Completed
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-center sm:justify-end  px-4 mb-17px">
            {validateSuccess ? (
              <button
                onClick={() => getNextTask()}
                className="border border-darkGrey-50 w-full   rounded-md bg-blue-250  h-10 text-white-50   text-center  font-PoppinsSemiBold text-ft5 cursor-pointer"
              >
                Next Task
              </button>
            ) : (
              <button
                onClick={() => handleNextTask()}
                className="border border-darkGrey-50 w-full   rounded-md bg-blue-250  h-10 text-white-50   text-center  font-PoppinsSemiBold text-ft5 cursor-pointer"
              >
                {isValidating ? (
                  <div>
                    <CircularProgress className="text-white-100 p-1" />
                  </div>
                ) : (
                  "Validate"
                )}
              </button>
            )}
          </div>
          <div className="flex justify-center sm:justify-end  px-4">
            <button
              onClick={() =>
                validateSuccess
                  ? getNextTask()
                  : history.push(
                      `/project-details/${props?.location?.state?.currentProjectId}`
                    )
              }
              className="border border-blue-250 w-full   rounded-md bg-white-100  h-10 text-blue-250   text-center  font-PoppinsSemiBold text-ft5 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidateTaskMobile;
