import React from "react";
import BannerMobile from "./bannerMobile";
import { history } from "../../managers/history";

function Banner({ projectDetails }) {
  return (
    <div className="mb-6 md:mb-8 lg:mb-11">
      <div className="flex items-center mb-3">
        <span
          className="text-blue-250 font-PoppinsMedium text-ft1 mr-6px cursor-pointer"
          onClick={() => history.push("/")}
        >
          Project
        </span>
        <img src="/images/rightArrowSmall.svg" alt="" className="mr-6px" />
        <span className="text-black-50 font-PoppinsMedium text-ft1">
          Details
        </span>
      </div>
      <div className="text-black-100 font-PoppinsMedium text-ft8 mb-2 ">
        Project Details
      </div>
      <div className="w-full h-139 lg:min-h-320px tab:w-full tab:h-454px lg:w-full lg:h-80  gradient-bg rounded-lg flex mobile:flex-col p-6">
        {/* Image Conotainer */}
        {Object.keys(projectDetails).length > 0 ? (
          <div className="w-78px h-78px md:w-114px md:h-114px min-w-78px md:min-w-114px md:mr-8 flex mobile:w-full mb-6 md:mb-0">
            <img
              src={projectDetails?.projectImage}
              alt=""
              className="w-full h-full rounded-full object-fill"
            />
          </div>
        ) : (
          ""
        )}

        {Object.keys(projectDetails).length > 0 ? (
          <div className="xss:hidden md:flex flex-col lg:flex-row lg:justify-between w-full">
            {/* Details Container */}
            <div className="flex flex-col lg:mr-auto">
              <div className="w-466px mb-12 tab:mb-17px">
                <div className="mb-7px">
                  <span className="h-101px font-PoppinsSemiBold text-ft10 text-white-100 md:text-ft12">
                    {projectDetails?.name}
                  </span>
                </div>
                <div className="h-67px md:min-h-67px font-PoppinsRegular text-ft5 text-white-100">
                  {projectDetails?.description}
                </div>
              </div>

              {/* Bottom Container */}
              <div className="flex items-center justify-between w-466px xss:hidden lg:flex">
                <div className="flex items-center">
                  <img className="mr-7px" src="/images/clock.svg" alt="" />
                  <span className="font-PoppinsMedium text-ft3 text-white-100">
                    {projectDetails?.totalDuration} min duration
                  </span>
                </div>
                <div className="flex items-center">
                  <img className="mr-7px" src="/images/beginner.svg" alt="" />
                  <span className="font-PoppinsMedium text-ft3 text-white-100">
                    {projectDetails?.level}
                  </span>
                </div>
                <div className="flex items-center">
                  <img
                    className="mr-7px"
                    src="/images/participant.svg"
                    alt=""
                  />
                  <span className="font-PoppinsMedium text-ft3 text-white-100">
                    {projectDetails?.totalParticipants} Participants
                  </span>
                </div>
              </div>
            </div>

            {/* Earn Details Container */}
            <div className="flex tab:mb-30px">
              <div className=" cursor-pointer w-31 h-115px md:w-157px border border-blue-300 rounded-lg py-2.5 px-14px">
                <div className="flex items-center h-6 mb-1">
                  <span className="mr-2 font-PoppinsMedium text-ft6 text-blue-100">
                    Earn
                  </span>
                  <div className="w-3 h-3">
                    <img
                      src="/images/info.svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex items-center h-11">
                  <span className="font-PoppinsSemiBold text-ft13 text-white-100 mr-3">
                    {projectDetails?.totalTokensTobeEarned}
                  </span>
                  <span className="font-PoppinsMedium text-ft9 text-white-150">
                    {projectDetails?.cryptoToBeEarned}
                  </span>
                </div>
                <div className="h-5">
                  <span className="font-PoppinsMedium text-ft3 text-purple-200">
                    32.30 USD
                  </span>
                </div>
              </div>
              <div className="h-115px flex flex-col items-center justify-center">
                <img
                  src="/images/plusIcon.svg"
                  alt=""
                  className="w-3 h-3 mx-2"
                />
              </div>
              <div className="cursor-pointer w-31 h-115px md:w-157px border border-blue-300 rounded-lg py-2.5 px-14px">
                <div className="flex items-center h-6 mb-1">
                  <span className="mr-2 font-PoppinsMedium text-ft6 text-blue-100">
                    Get
                  </span>
                  <div className="w-3 h-3">
                    <img
                      src="/images/info.svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex items-center h-11">
                  <span className="font-PoppinsSemiBold text-ft13 text-white-100 mr-3">
                    NFT
                  </span>
                </div>
                <div className="h-5">
                  <span className="font-PoppinsMedium text-ft3 text-purple-200">
                    Certificate
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Bottom Container */}
            <div className="xss:flex lg:hidden items-center justify-between w-466px">
              <div className="flex items-center">
                <img className="mr-7px" src="/images/clock.svg" alt="" />
                <span className="font-PoppinsMedium text-ft3 text-white-100">
                  {projectDetails?.totalDuration} min duration
                </span>
              </div>
              <div className="flex items-center">
                <img className="mr-7px" src="/images/beginner.svg" alt="" />
                <span className="font-PoppinsMedium text-ft3 text-white-100">
                  {projectDetails?.level}
                </span>
              </div>
              <div className="flex items-center">
                <img className="mr-7px" src="/images/participant.svg" alt="" />
                <span className="font-PoppinsMedium text-ft3 text-white-100">
                  {projectDetails?.totalParticipants} Participants
                </span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* Mobile Component */}
        {Object.keys(projectDetails).length > 0 ? (
          <div className="md:hidden">
            <BannerMobile projectDetails={projectDetails} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Banner;
