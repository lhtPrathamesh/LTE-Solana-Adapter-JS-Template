import React, { useEffect, useState } from "react";
import { history } from "../../managers/history";
import ClaimRewardDialog from "./claimRewardPopup";
import { TokenTransferService } from "../../services";
import {
  validationMessages,
  TOKEN_AMOUNT_DECIMALS,
  REDIRECT_URL,
} from "../../constants";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import courseService from "../../services/courseService";
import Utility from "../../utility";
import CircularProgress from "@mui/material/CircularProgress";

function ClaimReward(props) {
  const [claimRewardPopup, setClaimRewardPopup] = useState(false);
  const [claimSucces, setClaimSuccess] = useState(false);
  const [rewardInfo, setRewardInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getClaimedRewards();
  }, []);

  const getClaimedRewards = async () => {
    setIsLoading(true);
    let requestData = {
      address: props.user?.walletDetails?.address,
    };

    let [error, response] = await Utility.parseResponse(
      courseService.getClaimedRewards(requestData)
    );

    if (error && error?.responseCode !== 200) {
      toast.error(validationMessages.CLAIM_REWARD_INFO_ERROR, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
      setIsLoading(false);
      return;
    }

    const claimResponse = await response?.map((item) => {
      if (item.projectId === props.currentProjectId) {
        setRewardInfo(item);
        return item;
      }
    });

    setIsLoading(false);
  };

  const claimReward = async () => {
    setClaimRewardPopup(true);

    const amount = (props?.activatedProjectDetails?.totalTokensTobeEarned)
      .toString()
      .concat(TOKEN_AMOUNT_DECIMALS);

    const txHash = await TokenTransferService.transferToken(
      props.user?.walletDetails?.address,
      amount
    );

    if (txHash) {
      const response = await props?.claimReward(
        props?.activatedProjectId,
        props?.activatedProjectDetails?.cryptoToBeEarned,
        props?.activatedProjectDetails?.totalTokensTobeEarned,
        txHash
      );
      getClaimedRewards();
      setClaimSuccess(true);
    } else {
      toast.error(validationMessages.CLAIM_REWARD_TRANSACTION_ERROR, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
    }
  };

  const handleRedirect = () => {
    window.open(
      `${REDIRECT_URL}${rewardInfo?.transactionId + "?cluster=devnet"}`,
      "_blank"
    );
  };

  return (
    <div className="relative">
      <Toaster />
      <div className="flex flex-col lg:flex-row mb-10 md:mb-16 lg:mb-115px">
        <div className="w-full   lg:w-60per lg:h-98 mb-6 lg:mb-0 lg:mr-30px relative">
          <div className="w-full h-full">
            <img
              src="/images/claimReward.svg"
              alt=""
              className="w-full h-full lg:object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-40per">
          {isLoading ? (
            ""
          ) : (
            <div className="font-PoppinsSemiBold text-ft11 text-black-100 md:text-ft31">
              {rewardInfo?.transactionId
                ? "Reward Claimed"
                : "Claim your Reward"}
            </div>
          )}
          {isLoading ? (
            <div className="flex justify-center items-center h-4/5 w-full">
              <CircularProgress />
            </div>
          ) : (
            <div className="font-PoppinsRegular text-ft4 text-black-50 mb-33px">
              {rewardInfo?.transactionId ? (
                <span>
                  <span className="text-black-100 font-PoppinsSemiBold">
                    {rewardInfo?.amount} {rewardInfo?.crypto}&nbsp;
                  </span>
                  added to your account. You can track this transaction{" "}
                  <span
                    className="cursor-pointer text-blue-250"
                    onClick={() => handleRedirect()}
                  >
                    &nbsp;here
                  </span>
                </span>
              ) : (
                `You have won ${props?.activatedProjectDetails?.totalTokensTobeEarned} ${props?.activatedProjectDetails?.cryptoToBeEarned} tokens for successfully completing the tasks in
            this project. Click on the Claim Reward button to get these tokens
            in your wallet.`
              )}
            </div>
          )}
          {isLoading ? (
            ""
          ) : (
            <div className="flex items-center justify-center flex-col lg:block">
              {rewardInfo?.transactionId ? (
                <div
                  className="w-50 h-13 bg-green rounded-xl flex items-center justify-center cursor-pointer"
                  onClick={() => history.push("/my-earning")}
                >
                  <span className="font-PoppinsSemiBold text-ft6 text-white-100">
                    See Earnings
                  </span>
                </div>
              ) : (
                <div
                  className="w-50 h-13 bg-green rounded-xl flex items-center justify-center cursor-pointer"
                  onClick={() => claimReward()}
                >
                  <span className="font-PoppinsSemiBold text-ft6 text-white-100">
                    Claim Reward
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center pb-15 md:pb-16 lg:pb-90px">
        <span className="font-PoppinsMedium text-ft4 text-black-50">
          Facing any technical issue?&nbsp;
        </span>
        <span className="font-PoppinsMedium text-ft4 text-blue-250 cursor-pointer">
          Contact Us
        </span>
      </div>
      {claimRewardPopup ? (
        <ClaimRewardDialog
          handleClose={() => setClaimRewardPopup(false)}
          open={claimRewardPopup}
          handleTask={props.handleTask}
          handleClaim={props.handleClaim}
          amount={props?.activatedProjectDetails?.totalTokensTobeEarned}
          crypto={props?.activatedProjectDetails?.cryptoToBeEarned}
          claimSucces={claimSucces}
        />
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ClaimReward);
