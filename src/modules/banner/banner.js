import React from "react";
import { history } from "../../managers/history";

const Banner = ({ connectWallet, walletAddress }) => {
  return (
    <div className="flex xl:justify-center bg-banner bg-cover bg-no-repeat">
      <div className="xl:flex  justify-center text-white-100 w-full xl:justify-between  md:px-11 lg:px-24.5 xl:px-45 2xl:px-65 3xl:px-90 xl:mt-21 mt-41px mr-4 md:justify-center md:text-center">
        <div className="xl:text-justify text-center  flex flex-col justify-center items-center xl:pb-32 w-auto">
          <div className="sm:w-447px w-71.5">
            <h1 className="xl:text-ft14 text-ft11 md:text-ft14  font-PoppinsSemiBold">
              Earn as you Learn
            </h1>
            <p className="text-ft4 font-PoppinsRegular mt-7px  ">
              Earn up to $300 in Rewards with the first ever on chain rewards
              program.
            </p>
          </div>
          <div className="flex-col sm:space-x-4 xl:mt-15 px-2 xs:px-0 space-y-4 md:space-x-21px mt-11.5 xl:mr-4.5">
            <button
              onClick={() => (walletAddress ? "" : connectWallet())}
              className="xl:text-ft6 w-74.5  sm:w-50 sm:h-42px sm:px-29px sm:py-2 md:w-50 lg:h-13  md:h-42px text-ft4 xl:pl-29px xl:pr-29px  px-21.5 py-9px rounded-xl font-PoppinsSemiBold bg-blue-250 text-white-100"
            >
              {walletAddress
                ? `${walletAddress?.slice(0, 6)}...${walletAddress?.slice(
                    walletAddress?.length - 4,
                    walletAddress?.length
                  )}`
                : "Connect Wallet"}
            </button>
            <button
              className="xl:text-ft6 w-74.5  sm:w-50 sm:h-42px sm:px-29px sm:py-2 md:w-50 lg:h-13 md:h-42px text-ft4 xl:pl-29px xl:pr-29px   py-9px  rounded-xl font-PoppinsSemiBold bg-blue-100 text-blue-250"
              onClick={() => history.push("/how-it-works")}
            >
              How it Works
            </button>
          </div>
        </div>
        <div className="flex justify-center xl:justify-end xl:mt-auto  mt-10">
          <img
            className="md:w-303px md:h-59.5 xl:w-513px xl:h-403px w-67 h-52.5"
            src="/images/handPhone.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
