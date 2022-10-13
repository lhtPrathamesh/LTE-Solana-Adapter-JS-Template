import React, { useEffect, useRef, useState } from "react";
import { history } from "../../../managers/history";
import WalletPopup from "./walletPopup";
import SideBar from "../../../modules/sidebar/sidebar";
import useOnClickOutside from "../useOnClickOutside";
import { STAKE_URL, validationMessages } from "../../../constants";
import { connect } from "react-redux";
import { handleLogin, handleLogout } from "../../../action";
import toast, { Toaster } from "react-hot-toast";

function Header(props) {
  const [showWalletPopup, setWalletPopup] = useState(false);
  const [showWallet, setWallet] = useState(false);
  const [showSideBar, setSideBar] = useState(false);

  function toggleWalletPopup() {
    setWalletPopup((prevState) => !prevState);
  }
  function toggleSideBar() {
    setSideBar((prevState) => !prevState);
  }
  function toggleWallet() {
    setWallet((prevState) => !prevState);
  }
  const walletPopupRef = useRef();
  useOnClickOutside(walletPopupRef, () => {
    setWalletPopup(false);
  });

  const sideBarRef = useRef();
  useOnClickOutside(sideBarRef, () => {
    setSideBar(false);
  });

  const logoRedirect = () => {
    history.push("/");
    setSideBar(false);
  };

  useEffect(() => {
    const getAddress = async () => {
      const connection = await window?.phantom?.solana.connect();
      const address = connection?.publicKey?.toString();
      return address;
    };

    //   const handleWallet = async () => {
    //     const address = await getAddress();
    //     if (
    //       props.user?.walletDetails?.address &&
    //       props.user?.walletDetails?.address !== address
    //     ) {
    //       connectWallet();
    //     }
    //   };
    //   setTimeout(() => {
    //     handleWallet();
    //   }, 500);
  }, []);

  const connectWallet = async () => {
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
    <div
      ref={sideBarRef}
      className={`w-full flex lg:justify-center bg-purple-150 h-15 z-20
    ${showSideBar ? "fixed" : ""}`}
    >
      <Toaster />
      <div className="w-full px-5 md:px-11 lg:px-24.5 xl:px-45 2xl:px-65 3xl:px-90 flex lg:justify-between items-center">
        <div className="">
          <img
            className="cursor-pointer"
            src="/images/lteLogo.svg"
            alt=""
            onClick={logoRedirect}
          />
        </div>
        <div className="flex lg:ml-auto">
          <div className="hidden lg:flex text-ft3 font-PoppinsMedium text-white-100  space-x-37px mt-1 ">
            <ul
              className="cursor-pointer font-PoppinsBold"
              onClick={() => history.push("/")}
            >
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
        </div>
        <div className="ml-auto lg:ml-37px flex items-center">
          {!props.user?.walletDetails?.address ? (
            <div className="hidden md:flex  flex-col w-9 items-center">
              <div>
                <img
                  onClick={() => connectWallet()}
                  className="cursor-pointer"
                  src="/images/wallet.svg"
                  alt=""
                />{" "}
              </div>
            </div>
          ) : (
            <div
              ref={walletPopupRef}
              className="bg-purple-350 w-36 min-w-138px cursor-pointer  items-center px-3 h-33px  rounded-18px space-x-1 hidden md:flex z-30"
              onClick={toggleWalletPopup}
            >
              <img className="" src="/images/connectedWallet.svg" alt="" />
              <p className="text-ft3 text-white-100  font-PoppinsMedium">
                {props.user?.walletDetails?.address?.slice(0, 5)}...
                {props.user?.walletDetails?.address?.slice(
                  props.user?.walletDetails?.address?.length - 4,
                  props.user?.walletDetails?.address?.length
                )}
              </p>
              <div className="relative top-78px lg:right-45 md:right-32   hidden  md:block ">
                {showWalletPopup ? <WalletPopup /> : ""}
              </div>
            </div>
          )}
          <div className="lg:hidden ml-4   flex cursor-pointer">
            <label onClick={toggleSideBar}>
              <span className="block m-1 h-1 w-27px bg-white-100 rounded-lg"></span>
              <span className="block m-1 h-1 w-27px bg-white-100 rounded-lg"></span>
              <span className="block m-1 h-1 w-27px bg-white-100 rounded-lg"></span>
            </label>
          </div>
          {showSideBar ? <SideBar toggleSideBar={toggleSideBar} /> : ""}
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
