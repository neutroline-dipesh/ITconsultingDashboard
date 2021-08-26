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
import Employers from "./components/Employers/Employers";
import External from "./components/ExternalApplicant/External";
import ExternalViewDetail from "./components/ExternalApplicant/ExternalViewDetail";
import Resume from "./components/viewApplicantDetail/viewResume";
function App(props) {
  const token = localStorage.getItem("token");
  const isAuthenticated = token !== null;

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <GuardedRoute
        exact
        path="/dashboard"
        component={Dashboard}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/jobs"
        component={Alljobs}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/job/add"
        component={AddJobs}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/job/edit/:id"
        component={EditJobs}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/job/detail/:id"
        component={viewJobDetail}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/applicant/contracting"
        component={Contracting}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/applicant/internal"
        component={Internal}
        auth={isAuthenticated}
      />

      <GuardedRoute
        exact
        path="/contact"
        component={Contact}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/contact/view"
        component={viewDetail}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/applicants"
        component={allApplicant}
        auth={isAuthenticated}
      />

      <GuardedRoute
        exact
        path="/employers"
        component={Employers}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/logout"
        component={Logout}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/applicant/detail/:id"
        component={viewApplicantDetail}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/applicant/external"
        component={External}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/applicant/external/detail/:id"
        component={ExternalViewDetail}
        auth={isAuthenticated}
      />
      <GuardedRoute
        exact
        path="/resume"
        component={Resume}
        auth={isAuthenticated}
      />
      <Route component={pageNotFound} />
    </Switch>
  );
}
// export default App;

export default withRouter(App);
