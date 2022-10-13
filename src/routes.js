import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import { connect } from "react-redux";
import { history } from "./managers/history";
import ProjectDetails from "./modules/projectDetails/index";
import Header from "./common/components/header/header";
import Footer from "./common/components/footer/footer";
import Dashoard from "./modules/dashboard/index";
import ValidateTask from "./modules/popup/validateTaskMobile";
import MyEarning from "./modules/myEarning/index";
import MyCourses from "./modules/myCourses/index";
import Terms from "./modules/terms/index";
import claimRewardMobile from "./modules/projectDetails/claimRewardMobile";
import Filter from "./modules/popup/filterMobile";
import PrivacyPolicy from "./modules/privacyPolicy/index";
import HowItWork from "./modules/howItsWork/index";

const Routes = () => {
  return (
    <Router history={history}>
      <Header />

      <Switch>
        <Route exact path={"/"} component={Dashoard} />
        <Route
          exact
          path={"/project-details/:projectId"}
          component={ProjectDetails}
        />
        <Route exact path={"/validate-task"} component={ValidateTask} />
        <Route exact path={"/my-earning"} component={MyEarning} />
        <Route exact path={"/my-courses"} component={MyCourses} />
        <Route exact path={"/terms"} component={Terms} />
        <Route exact path={"/claim-reward"} component={claimRewardMobile} />
        <Route exact path={"/filter"} component={Filter} />
        <Route exact path={"/privacy-policy"} component={PrivacyPolicy} />
        <Route exact path={"/how-it-works"} component={HowItWork} />
        <Redirect exact from="*" to="/" />
      </Switch>

      <Footer />
    </Router>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
