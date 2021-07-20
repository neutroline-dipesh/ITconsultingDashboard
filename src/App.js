import "./App.css";
import {useEffect} from "react";
import Login from "./components/Login/Login";
import { connect } from 'react-redux';
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
import * as actions from "./store/actions/index";
function App(props) {
  useEffect(() => {
    props.onTryAutoSignup();
  }, []);
  return (
      <Switch>
        <Route exact path="/" component={Login} />
        <GuardedRoute exact path="/dashboard" component={Dashboard} auth={props.isAuthenticated}/>
        <GuardedRoute exact path="/alljobs" component={Alljobs} auth={props.isAuthenticated}/>
        <GuardedRoute exact path="/alljobs/editJobs" component={EditJobs} auth={props.isAuthenticated}/>
        <GuardedRoute exact path="/contracting" component={Contracting} auth={props.isAuthenticated}/>
        <GuardedRoute exact path="/internal" component={Internal} auth={props.isAuthenticated}/>
        <GuardedRoute exact path="/addjobs" component={AddJobs} auth={props.isAuthenticated}/>
        <GuardedRoute exact path="/contact" component={Contact} auth={props.isAuthenticated}/>
        <GuardedRoute exact path="/viewContact" component={viewDetail} auth={props.isAuthenticated}/>
        <GuardedRoute exact path="/allApplicant" component={allApplicant} auth={props.isAuthenticated}/>
        <GuardedRoute exact path="/viewJobDetail" component={viewJobDetail} auth={props.isAuthenticated}/>
        <GuardedRoute exact path="/logout" component={Logout} auth={props.isAuthenticated}/>
        <GuardedRoute
          exact
          path="/viewApplicatnDetail"
          component={viewApplicantDetail}
        auth={props.isAuthenticated}/>

        <Route component={pageNotFound} />
      </Switch>
  );
}
const mapStateToProps = state =>{
  return{
    isAuthenticated: state.token !== null
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
