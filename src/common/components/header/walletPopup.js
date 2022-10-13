import React from "react";
import { connect } from "react-redux";
import { handleLogout } from "../../../action";
import { history } from "../../../managers/history";

const walletPopup = (props) => {
  return (
    <div className="lg:w-48.5  w-36.5 bg-white-100 rounded-10px">
      <div className="font-PoppinsMedium text-black-100 text-ft3">
        <div className="flex flex-col ">
          <div className="border-b border-darkGrey-50 border-opacity-20 py-2">
            <ul className="ml-3.5 " onClick={() => history.push("/my-courses")}>
              My Courses
            </ul>
          </div>
          <div className="border-b border-darkGrey-50 border-opacity-20 py-2">
            <ul className="ml-3.5" onClick={() => history.push("/my-earning")}>
              My Earnings
            </ul>
          </div>
          <div className="py-2">
            <ul
              className="ml-3.5 "
              onClick={() => {
                props.logout({ address: null });
                history.push("/");
              }}
            >
              Logout
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (walletDetails) => {
    dispatch(handleLogout(walletDetails));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(walletPopup);
