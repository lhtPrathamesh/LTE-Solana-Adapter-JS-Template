import React, { useState, useEffect } from "react";
import { history } from "../../managers/history";

function ClaimRewardMobile() {
  const [transfer, setTransfer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTransfer(true);
    }, 3000);
  }, []);

  return (
    <div className=" bg-white-50 flex  justify-center items-center ">
      {transfer ? (
        <div className="flex w-90  m-3 rounded bg-white-100  flex-col justify-center items-center">
          <div className="flex  justify-center items-center mt-6">
            <div className=""></div>
            <span className="font-PoppinsMedium text-black-100 text-ft15">
              Claim Reward
            </span>
          </div>
          <div className="flex items-center justify-center mt-13">
            <div className="w-161px h-161px bg-slate-100 rounded-full flex items-center justify-center mb-30px relative">
              <div className="absolute right-3per top-15per">
                <img
                  src="/images/checkGreen.svg"
                  alt=""
                  className="w-21px h-21px"
                />
              </div>
              <img src="/images/walletLarge.svg" alt="" />
            </div>
          </div>
          <div className="flex justify-center font-PoppinsMedium text-black-50 text-ft18 mt-11.5">
            <span className="text-black-100">50 RUN&nbsp;</span> transferred to
            your wallet
          </div>

          <div>
            <button
              onClick={() => history.push("/project-details")}
              className="w-75 h-10 mt-14 text-white-100 font-semibold rounded-lg text-ft5 mb-16 bg-blue-250"
            >
              Go to Project
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-90  m-3 rounded bg-white-100  flex-col justify-center items-center">
          <div className="font-PoppinsSemiBold  text-black-100 text-ft15 flex justify-center mt-6">
            Claim Reward
          </div>
          <div className="flex items-center justify-center relative mt-13">
            <div className="loader"></div>
            <div className="absolute top-35per ">
              <img src="/images/walletLarge.svg" alt="" />
            </div>
          </div>
          <div className="flex justify-center font-PoppinsMedium text-black-50 text-ft4 mt-11.5  mb-161px">
            Transferring{" "}
            <span className="text-black-100">&nbsp;50 RUN&nbsp;</span> to your
            wallet
          </div>
        </div>
      )}
    </div>
  );
}

export default ClaimRewardMobile;
