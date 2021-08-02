import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Alljobs from "./components/All jobs/Alljobs";
import Contracting from "./components/Contracting Applicant/Contracting";
import Internal from "./components/Internal Applicant/Internal";
import AddJobs from "./components/Add jobs/AddJobs";
import Contact from "./components/Contact/Contact";
import { Switch, Route, withRouter } from "react-router-dom";
import GuardedRoute from "./components/Utility/GuardedRoute";
import pageNotFound from "./components/PageNotFound";
import EditJobs from "./components/All jobs/EditJobs";
import viewDetail from "./components/Contact/ViewDetail";
import allApplicant from "./components/allApplicant/allApplicant";
import Logout from "./components/Logout/Logout";
import viewApplicantDetail from "./components/viewApplicantDetail/viewApplicantDetail";
import viewJobDetail from "./components/All jobs/viewJobDetail";
import Notification from "./components/Sidebar/Notification";
import signout from "./components/Sidebar/SignOut";
import * as actions from "./store/actions/index";
function App(props) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.setPath(window.location.pathname);
    }
    props.onTryAutoSignup();
  }, []);
  return (
    // <Switch>
    //   <Route exact path="/login" component={Login} />
    //   <Route exact path="/" component={Dashboard} />
    //   <Route exact path="/alljobs" component={Alljobs} />
    //   <Route exact path="/alljobs/editJobs" component={EditJobs} />
    //   <Route exact path="/contracting" component={Contracting} />
    //   <Route exact path="/internal" component={Internal} />
    //   <Route exact path="/addjobs" component={AddJobs} />
    //   <Route exact path="/contact" component={Contact} />
    //   <Route exact path="/viewContact" component={viewDetail} />
    //   <Route exact path="/allApplicant" component={allApplicant} />
    //   <Route exact path="/viewJobDetail" component={viewJobDetail} />
    //   <Route exact path="/notification" component={Notification} />

    //   <Route
    //     exact
    //     path="/applicant-detail/:id"
    //     component={viewApplicantDetail}
    //   />
    //   <Route exact path="/signout" component={signout} />
    //   <Route exact path="/logout" component={Logout} />
    //   <Route component={pageNotFound} />
    // </Switch>
    <Switch>
      <Route exact path="/" component={Login} />
      <GuardedRoute
        exact
        path="/dashboard"
        component={Dashboard}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/alljobs"
        component={Alljobs}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/alljobs/editJobs"
        component={EditJobs}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/contracting"
        component={Contracting}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/internal"
        component={Internal}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/addjobs"
        component={AddJobs}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/contact"
        component={Contact}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/viewContact"
        component={viewDetail}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/allApplicant"
        component={allApplicant}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/viewJobDetail"
        component={viewJobDetail}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/logout"
        component={Logout}
        auth={props.isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/viewApplicatnDetail"
        component={viewApplicantDetail}
        auth={props.isAuthenticated}
      />

      <Route component={pageNotFound} />
    </Switch>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    setPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
