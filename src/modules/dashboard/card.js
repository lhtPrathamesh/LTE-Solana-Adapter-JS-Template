import React from "react";
import { history } from "../../managers/history";

export function Card({ logo, name, heading, coin, projectId }) {
  return (
    <div
      className="bg-white-100 h-57.5    break-words rounded-lg w-319px xd:w-343px md:w-319px lg:w-343px 2xl:w-auto shadow-xs cursor-pointer"
      onClick={() => {
        history.push(`/project-details/${projectId}`);
        window.location.reload();
      }}
    >
      <div className=" flex justify-center items-center h-2/3">
        <img src={logo} alt="" className="w-114px h-114px object-contain" />
      </div>
      <hr className="opacity-10" />
      <div className="flex justify-between px-4 py-4">
        <p className=" w-60per text-black-100 font-PoppinsSemiBold text-ft5">
          {heading}
        </p>
        <div className="flex-col">
          <div className="flex items-center space-x-1">
            <p className="text-ft4 font-PoppinsMedium text-black-100">Earn</p>
            <p className="text-ft10 font-PoppinsBold text-purple-150">{coin}</p>
            <p className="text-ft1 font-PoppinsMedium text-black-50">{name}</p>
          </div>
          <div>
            <p className="text-ft1 font-PoppinsMedium text-darkGrey-50">
              + NFT Certificate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
