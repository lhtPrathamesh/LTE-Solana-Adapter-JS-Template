import React, { useState } from "react";
import { connect } from "react-redux";
import { handleLogin, handleLogout } from "../../action";
import { STAKE_URL, validationMessages } from "../../constants";
import { history } from "../../managers/history";
import toast, { Toaster } from "react-hot-toast";

function SideBar(props) {
  function handleSidebarComponent(value) {
    switch (value) {
      case "myCourse":
        props.toggleSideBar();
        history.push("/my-courses");
        break;
      case "myEarning":
        props.toggleSideBar();
        history.push("/my-earning");
        break;
      case "projects":
        props.toggleSideBar();
        history.push("/");
        break;
      case "howItsWork":
        props.toggleSideBar();
        history.push("/how-it-works");
        break;
      case "logout":
        props.toggleSideBar();
        props.logout({ address: null });
        break;
    }
  }

  const connectWalletFn = async () => {
    if (window.phantom) {
      const connection = await window.phantom.solana.connect();
      if (connection) {
        const address = connection.publicKey.toString();
        props.login({
          address: address,
        });
      } else {
        toast.error(validationMessages.WALLET_CONNECTION_FAILED, {
          duration: 4000,
          position: validationMessages.TOAST_POSITION,
        });
      }
    } else {
      toast.error(validationMessages.WALLET_NOT_FOUND, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
    }
  };

  return (
    <div className="bg-purple-150 h-screen lg:hidden  top-14 fixed overflow-scroll  font-PoppinsMedium  w-full right-0 md:w-75 ">
      <Toaster />
      <div className="flex flex-col text-ft3 text-white-100 px-6 ">
        <ul
          className="cursor-pointer font-PoppinsBold  mt-6 "
          onClick={() => handleSidebarComponent("projects")}
        >
          Projects
        </ul>
        {props.user?.walletDetails?.address ? (
          <ul
            className="cursor-pointer  mt-6 md:hidden"
            onClick={() => handleSidebarComponent("myCourse")}
          >
            My Courses
          </ul>
        ) : (
          ""
        )}
        {props.user?.walletDetails?.address ? (
          <ul
            className="cursor-pointer  mt-6 md:hidden"
            onClick={() => handleSidebarComponent("myEarning")}
          >
            My Earnings
          </ul>
        ) : (
          ""
        )}
        <ul
          className="cursor-pointer mt-6 md:mt-10"
          onClick={() => handleSidebarComponent("howItsWork")}
        >
          How it works
        </ul>
        <ul
          className="cursor-pointer mt-6 md:mt-10"
          onClick={() => window.open(`${STAKE_URL}`, "_blank")}
        >
          Stake
        </ul>
        {props.user?.walletDetails?.address ? (
          <ul
            className="cursor-pointer mt-6 md:mt-10"
            onClick={() => handleSidebarComponent("logout")}
          >
            Logout
          </ul>
        ) : (
          ""
        )}
      </div>

      {!props.user?.walletDetails?.address ? (
        <div
          onClick={() => connectWalletFn()}
          className="mx-4.5 flex justify-center text-ft5 md:hidden cursor-pointer mt-6 w-auto xss:w-84.5 rounded-xl bg-blue-100 text-purple-150 font-PoppinsSemiBold py-1"
        >
          <img src="/images/wallet-mobile.svg" alt="" className="w-8 h-8" />
          <button className="ml-4">Connect Wallet</button>
        </div>
      ) : (
        <div className="mx-4.5 flex justify-center items-center text-ft5 md:hidden cursor-pointer mt-6 w-auto  h-10 rounded-xl bg-purple-300 text-white-100 font-PoppinsMedium py-1">
          <img src="/images/connectedWallet.svg" alt="" className="w-5 h-4" />
          <p className="ml-2.5 text-white-100">
            {props.user?.walletDetails?.address?.slice(0, 6)}...
            {props.user?.walletDetails?.address?.slice(
              props.user?.walletDetails?.address?.length - 4,
              props.user?.walletDetails?.address?.length
            )}
          </p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (walletDetails) => {
    dispatch(handleLogin(walletDetails));
  },
  logout: (walletDetails) => {
    dispatch(handleLogout(walletDetails));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
