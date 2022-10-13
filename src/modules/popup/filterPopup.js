import React, { useState } from "react";

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
  onClose,
  getProjects,
  handleProjects,
  handleTypes,
  projects,
  types,
}) => {
  const handleApply = () => {
    getProjects(projects, types);
    onClose();
  };

  return (
    <div className="flex px-4  h-full  justify-center pt-20 fixed inset-0 bg-black-100 bg-opacity-20">
      <div className="  absolute bg-white-50 w-607px h-auto rounded-xl">
        <div className=" ">
          <div className="flex justify-between px-5 pt-5 ">
            <div className="font-PoppinsSemiBold  text-ft10">Filters</div>
            <img
              onClick={onClose}
              className="w-7 h-7 cursor-pointer"
              alt=""
              src="/images/close.png"
            />
          </div>
          <div className="px-5 pt-4">
            <div className="font-PoppinsSemiBold text-ft5 ">Project</div>
            <div className="flex-shrink pt-1 min-h-30per">
              {ProjectItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleProjects(item)}
                  className={`border border-darkGrey-50 rounded-md text-ft4 px-2 py-1 my-1 mr-3 cursor-pointer font-PoppinsRegular  ${
                    projects?.includes(item)
                      ? `bg-purple-150 text-white-50`
                      : `text-black-200`
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="px-5 pt-6 ">
            <div className="font-PoppinsSemiBold text-ft5">Type</div>
            <div className="flex-shrink pt-1 min-h-30per ">
              {TypeItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleTypes(item)}
                  className={`border border-darkGrey-50 rounded-md text-ft4 px-2 py-1 my-1 mr-3 cursor-pointer font-PoppinsRegular ${
                    types?.includes(item)
                      ? `bg-purple-150 text-white-50`
                      : `text-black-200`
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center py-5  ">
            <button
              onClick={() => handleApply()}
              className="border border-darkGrey-50 rounded-md bg-blue-250 w-48 h-42px text-ft5 text-white-50 text-ft my-8 text-center  font-PoppinsSemiBold cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
