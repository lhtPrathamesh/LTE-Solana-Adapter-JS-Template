import React, { useEffect, useState } from "react";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ClaimRewardMobile from "./claimRewardMobile";

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    top: 46,
  },
});

function ClaimReward({
  handleClose,
  open,
  handleTask,
  handleClaim,
  amount,
  crypto,
  claimSucces,
}) {
  const classes = useStyles();

  const handleNextTask = () => {
    handleClose();
    handleTask();
    handleClaim();
  };

  return (
    <Dialog
      onClose={(_, reason) => {
        if (reason !== "backdropClick") {
          handleClose();
        }
      }}
      aria-labelledby="simple-dialog-title"
      open={open}
      PaperProps={{
        style: { borderRadius: 12 },
      }}
      classes={{
        paper: classes.dialog,
      }}
      maxWidth="md"
      className="rounded-lg hidden md:block"
    >
      <div className="w-160 h-347px bg-white-100 px-27px py-21px">
        {claimSucces ? (
          <div>
            <div className="flex justify-between items-center mb-31px h-33px pl-7">
              <div className=""></div>
              <span className="font-PoppinsSemiBold text-black-100 text-ft17">
                Claim Reward
              </span>
              <div onClick={() => handleNextTask()}>
                <img
                  src="/images/close.svg"
                  alt=""
                  className="w-7 h-7 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
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
            <div className="flex justify-center font-PoppinsMedium text-black-50 text-ft18">
              <span className="text-black-100">
                {amount} {crypto}&nbsp;
              </span>{" "}
              transferred to your wallet
            </div>
          </div>
        ) : (
          <div>
            <div className="font-PoppinsSemiBold text-black-100 text-ft17 flex justify-center mb-31px h-33px">
              Claim Reward
            </div>
            <div className="flex items-center justify-center relative mb-30px">
              <div className="loader"></div>
              <div className="absolute top-35per left-45per">
                <img src="/images/walletLarge.svg" alt="" />
              </div>
            </div>
            <div className="flex justify-center font-PoppinsMedium text-black-50 text-ft18">
              Transferring{" "}
              <span className="text-black-100">
                &nbsp;{amount} {crypto}&nbsp;
              </span>{" "}
              to your wallet
            </div>
          </div>
        )}
      </div>
    </Dialog>
  );
}

export default ClaimReward;
