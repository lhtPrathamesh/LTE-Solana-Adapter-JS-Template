import React, { useEffect, useState } from "react";
import MyEarningComponent from "./myEarning";
import Utility from "../../utility";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import { validationMessages } from "../../constants";
import { CourseService } from "../../services";

const MyEarning = (props) => {
  const [earnings, setEarnings] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    getEarningsByAddress();
  }, [props.user?.walletDetails?.address]);

  const getEarningsByAddress = async () => {
    setIsLoading(true);
    let requestData = {
      address: props.user?.walletDetails?.address,
    };

    let [error, response] = await Utility.parseResponse(
      CourseService.getEarningsByAddress(requestData)
    );

    if (error && error?.responseCode !== 200) {
      toast.error(validationMessages.EARNING_FETCH_FAILED, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
      setIsLoading(false);
      return;
    }

    setEarnings(response);
    setIsLoading(false);
  };

  return (
    <div>
      <MyEarningComponent earnings={earnings} isloading={isloading} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MyEarning);
