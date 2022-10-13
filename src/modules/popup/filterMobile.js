import React, { useState } from "react";
import { history } from "../../managers/history";

const ProjectItems = [
  "PancakeSwap",
  "Raydium",
  "Solana",
  "polkadot",
  "Avalance",
  "Tezos",
  "Coinbase",
  "Steller",
  "Cardona",
];
const TypeItems = [
  "Bridge",
  "Buy tokens",
  "Solana",
  "Stake",
  "Parachain",
  "Subnets",
  "Cardona",
];

const Filter = ({
  getProjects,
  handleProjects,
  handleTypes,
  projects,
  types,
  setFilterMobile,
}) => {
  const handleApply = () => {
    getProjects(projects, types);
    setFilterMobile(false);
  };

  return (
    <div className="  bg-white-50 flex flex-col  justify-center items-center">
      <div className=" py-7 ">
        <div className="font-PoppinsMedium  text-black-100 text-ft8 pb-2">
          Filter
        </div>

        <div className="flex w-343px   rounded bg-white-100  flex-col justify-center">
          <div className="px-4 pt-5">
            <div className="font-PoppinsSemiBold text-ft5 ">Project</div>
            <div className="flex-shrink pt-1 min-h-30per">
              {ProjectItems.map((item, index) => (
                <button
                  onClick={() => handleProjects(item)}
                  className={`border border-darkGrey-50 rounded-md text-ft4 px-2 py-1 my-1 mr-3 cursor-pointer font-PoppinsRegular  hover:bg-purple-150 hover:text-white-50 ${
                    projects?.includes(item)
                      ? `bg-purple-150 text-white-50`
                      : `text-black-200`
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="px-4 pt-5 ">
            <div className="font-PoppinsSemiBold text-ft5">Type</div>
            <div className="flex-shrink pt-1 min-h-30per ">
              {TypeItems.map((item, index) => (
                <button
                  onClick={() => handleTypes(item)}
                  className={`border border-darkGrey-50 rounded-md text-ft4 px-2 py-1 my-1 mr-3 cursor-pointer font-PoppinsRegular  hover:bg-purple-150 hover:text-white-50 ${
                    types?.includes(item)
                      ? `bg-purple-150 text-white-50`
                      : `text-black-200`
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center mt-42px space-y-6 items-center  mb-8">
            <button
              onClick={() => handleApply()}
              className="border border-darkGrey-50 rounded-md bg-blue-250 w-307px h-10 text-ft5 text-white-50  text-center  font-PoppinsSemiBold cursor-pointer"
            >
              Apply
            </button>
            <button
              onClick={() => setFilterMobile(false)}
              className="border border-blue-250 rounded-md bg-white-100 w-307px h-10 text-ft5 text-blue-250  text-center  font-PoppinsSemiBold cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
