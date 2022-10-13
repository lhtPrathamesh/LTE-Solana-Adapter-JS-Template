import React, { useEffect, useState } from "react";
import { validationMessages } from "../../constants";
import { CourseService } from "../../services";
import MyCoursesComponent from "./courses";
import Utility from "../../utility";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";

function MyCourses(props) {
  const [activatedProjects, setActivatedProjects] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getActivatedProjectsByAddress();
  }, [props.user?.walletDetails?.address]);

  const getActivatedProjectsByAddress = async () => {
    let requestData = {
      address: props.user?.walletDetails?.address,
    };

    let [error, response] = await Utility.parseResponse(
      CourseService.getActivatedProjectsByAddress(requestData)
    );

    if (error && error?.responseCode !== 200) {
      toast.error(validationMessages.ACTIVATED_PROJECTS_FETCH_FAILED, {
        duration: 4000,
        position: validationMessages.TOAST_POSITION,
      });
      setIsLoading(false);
      return;
    }

    setActivatedProjects(response);
    setIsLoading(false);
  };

  return (
    <div>
      <Toaster />
      <MyCoursesComponent
        activatedProjects={activatedProjects}
        isloading={isloading}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MyCourses);
