import "./App.css";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Alljobs from "./components/All jobs/Alljobs";
import Contracting from "./components/Contracting Applicant/Contracting";
import Internal from "./components/Internal Applicant/Internal";
import AddJobs from "./components/Add jobs/AddJobs";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import pageNotFound from "./components/PageNotFound";
import EditJobs from "./components/All jobs/EditJobs";
import viewDetail from "./components/Contact/ViewDetail";
import allApplicant from "./components/allApplicant/allApplicant";
import viewApplicantDetail from "./components/viewApplicantDetail/viewApplicantDetail";
import viewJobDetail from "./components/All jobs/viewJobDetail";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />

        <Route exact path="/" component={Dashboard} />
        <Route path="/alljobs/editJobs" component={EditJobs} />
        <Route path="/alljobs" component={Alljobs} />

        <Route path="/contracting" component={Contracting} />
        <Route path="/internal" component={Internal} />
        <Route path="/addjobs" component={AddJobs} />
        <Route path="/contact" component={Contact} />
        <Route path="/viewContact" component={viewDetail} />
        <Route path="/allApplicant" component={allApplicant} />
        <Route path="/viewJobDetail" component={viewJobDetail} />

        <Route
          exact
          path="/viewApplicatnDetail"
          component={viewApplicantDetail}
        />

        <Route component={pageNotFound} />
      </Switch>
    </BrowserRouter>
    // <div>
    //   {/* <Login /> */}
    //   {/* <Sidebar /> */}
    //   {/* <Dashboard /> */}
    //   {/* <Alljobs /> */}
    //   {/* <Contracting /> */}
    //   {/* <Internal /> */}
    //   <AddJobs />
    //   {/* <Text /> */}

    //   <div></div>
    // </div>
  );
}

export default App;
