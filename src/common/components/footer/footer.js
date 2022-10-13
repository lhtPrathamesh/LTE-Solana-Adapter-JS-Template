import React from "react";
import { STAKE_URL, YOUTUBE_URL, DISCORD_URL, TWITTER_URL, TELEGRAM_URL } from "../../../constants";
import { history } from "../../../managers/history";

const Footer = () => {
  return (
    <div className="bg-purple-150 lg:flex lg:justify-center lg:items-center    text-white-100 lg:h-71.5">
      <div className="px-5 md:px-11 lg:px-24.5 xl:px-45 2xl:px-65 3xl:px-90 pt-10 md:pt-6 lg:pt-12 flex-col pb-11  lg:flex  lg:flex-row  lg:justify-between items-center lg:items-start  ">
        <div className="lg:w-1/3">
          <div className="">
            <img src="/images/lteLogo.svg" alt="" />
          </div>
          <div className="font-PoppinsRegular text-ft4 mt-5 ">
            <p>
              Earn your favorite cryptocurrency while learning how to use it
            </p>
          </div>
          <div className="text-ft4 mt-29px hidden lg:block font-PoppinsRegular">
            <p>{new Date().getFullYear()} &copy; RunCrypto LLC</p>
          </div>
        </div>
        <div className=" lg:w-3/4 lg:pl-16 flex font-PoppinsMedium text-ft3 mt-6 lg:mt-0 justify-between md:justify-start  lg:justify-between">
          <div className="space-y-29px">
            <ul className="cursor-pointer" onClick={() => history.push("/")}>
              Projects
            </ul>
            <ul
              className="cursor-pointer"
              onClick={() => history.push("/how-it-works")}
            >
              How it works
            </ul>
            <ul
              className="cursor-pointer"
              onClick={() => window.open(`${STAKE_URL}`, "_blank")}
            >
              Stake
            </ul>
          </div>
          <div className="space-y-29px md:pl-48  lg:pl-0">
            <ul
              className="cursor-pointer"
              onClick={() => history.push("/terms")}
            >
              Terms
            </ul>
            {/* <ul
              className="cursor-pointer"
              onClick={() => history.push("/privacy-policy")}
            >
              Privacy Policy
            </ul> */}
          </div>
          <div className="flex-col hidden md:block ml-auto lg:ml-0 lg:pl-10 lg:flex space-y-5 lg:justify-end lg:w-1/3 ">
            <div className=" space-x-2.5 hidden md:flex">
              <ul className="cursor-pointer" onClick={() => window.open(`${TELEGRAM_URL}`, "_blank")}>
                <img src="/images/telegram.svg" alt="" />
              </ul>
              <ul className="cursor-pointer" onClick={() => window.open(`${TWITTER_URL}`, "_blank")}>
                <img src="/images/tweet.svg" alt="" />
              </ul>
              <ul className="cursor-pointer" onClick={() => window.open(`${DISCORD_URL}`, "_blank")}>
                <img src="/images/dis.svg" alt="" />
              </ul>
              <ul className="cursor-pointer" onClick={() => window.open(`${YOUTUBE_URL}`, "_blank")}>
                <img src="/images/youtube.svg" alt="" />
              </ul>
            </div>
            <div className="hidden lg:block space-y-5">
              <p>Please contact us if you have any query or feedback</p>
              <div className="flex space-x-1">
                <img src="/images/email.svg" alt="" />
                <p>support@runnode.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2.5 mt-29px md:hidden">
          <ul className="cursor-pointer" onClick={() => window.open(`${TELEGRAM_URL}`, "_blank")}>
            <img src="/images/telegram.svg" alt="" />
          </ul>
          <ul className="cursor-pointer" onClick={() => window.open(`${TWITTER_URL}`, "_blank")}>
            <img src="/images/tweet.svg" alt="" />
          </ul>
          <ul className="cursor-pointer" onClick={() => window.open(`${DISCORD_URL}`, "_blank")}>
            <img src="/images/dis.svg" alt="" />
          </ul>
          <ul className="cursor-pointer" onClick={() => window.open(`${YOUTUBE_URL}`, "_blank")}>
            <img src="/images/youtube.svg" alt="" />
          </ul>
        </div>
        <div className="text-ft4 mt-29px lg:hidden">
          <p>{new Date().getFullYear()} &copy; RunCrypto LLC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
