import React from "react";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import { REDIRECT_URL, FROM_REDIRECT_URL } from "../../constants";

const MyEarning = ({ earnings, isloading }) => {
  const handleRedirect = (transactionId) => {
    window.open(
      `${REDIRECT_URL}${transactionId + "?cluster=devnet"}`,
      "_blank"
    );
  };

  const handleFromRedirect = (from) => {
    window.open(`${FROM_REDIRECT_URL}${from + "?cluster=devnet"}`, "_blank");
  };

  return (
    <div className="bg-white-50 w-full flex overflow-auto lg:justify-center component-min-h">
      <div className="w-full  px-5 md:px-11 lg:px-24.5 xl:px-45 2xl:px-65 3xl:px-90 flex flex-col">
        <div className="text-ft8 font-PoppinsMedium  text-black-100 mt-6 mb-4 md:mt-8 md:mb-11">
          My Earnings
        </div>
        <div className=" 3xl:overflow-hidden w-1196px mobile:w-275  ">
          <table className="mr-4 lg:mr-11 2xl:mr-0 rounded-lg ">
            <thead>
              <tr className=" text-left ml-4 bg-white-50 text-black-50 text-ft3 font-PoppinsMedium ">
                <th className=" py-1 pl-10">Amount</th>
                <th className=" ">Project Name</th>
                <th className=" ">Txn ID</th>
                <th className=" ">From</th>
                <th className=" ">Issued On</th>
              </tr>
            </thead>
            <tbody className="bg-white-100">
              {earnings &&
                earnings.map((items, index) => (
                  <tr
                    key={index}
                    className={`text-ft4 font-PoppinsMedium text-black-100 border-table`}
                  >
                    <td className={`w-1/6 py-4 px-4 pl-9`}>
                      {items.amount} {items.crypto}
                    </td>
                    <td className=" w-1/5  ">{items.projectName}</td>
                    <td
                      className="w-1/5   text-blue-250 cursor-pointer"
                      onClick={() => handleRedirect(items.transactionId)}
                    >
                      {items.transactionId.slice(0, 18)}...
                      {items.transactionId.slice(
                        items?.transactionId?.length - 4,
                        items?.transactionId?.length
                      )}
                    </td>
                    <td
                      className="w-1/5    text-blue-250 cursor-pointer"
                      onClick={() =>
                        handleFromRedirect(items.senderWalletAddress)
                      }
                    >
                      {items.senderWalletAddress.slice(0, 18)}...
                      {items.senderWalletAddress.slice(
                        items?.senderWalletAddress?.length - 4,
                        items?.senderWalletAddress?.length
                      )}
                    </td>
                    <td className="w-1/5   pr-7">
                      {moment(items.addedOn).format("LT")},{" "}
                      {moment(items.addedOn).format("DD MMM YYYY")}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {isloading ? (
          <div className="flex items-center justify-center h-183px w-full bg-white-100 rounded-lg shadow-xs">
            <div className="">
              <CircularProgress />
            </div>
          </div>
        ) : (
          ""
        )}
        {!isloading && (earnings?.length === 0 || earnings === undefined) ? (
          <div className="w-1196px mobile:w-295  mr-4 lg:mr-11 2xl:mr-0  h-183px bg-white-100 rounded-lg shadow-xs flex items-center justify-center font-PoppinsMedium text-black-50 text-ft4">
            No earnings found
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MyEarning;
