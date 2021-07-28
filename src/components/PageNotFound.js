import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./pageNotFound.css";

import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import { CgArrowLeftR } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";
// import Sidebar from "../components/Sidebar/Sidebar";
const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  errorNumber: {
    // fontSize: "15rem",
    // animation: "noise-anim 2s infinite linear alternate-reverse",
  },
  errorDetail: {
    fontSize: "2rem",
  },
  backArrowBackToDashboardDIv: {
    display: "flex",
    flexDirection: "row",
  },
  backArrow: {
    marginTop: "0.35rem",
  },
  backToDashboard: {
    textDecoration: "none !important",
  },
}));
const PageNotFound = () => {
  const classes = useStyle();
  return (
    <>
      {/* <Sidebar /> */}
      <div className={classes.root}>
        <h1 className={classes.errorNumber + " " + "glitch"} data-text="404">
          404
        </h1>
        <p className={classes.errorDetail}>
          Oops! The Page you requested was not Found!
        </p>

        <Tooltip title="Back To Dashboard" TransitionComponent={Zoom} arrow>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <div className={classes.backArrowBackToDashboardDIv}>
              <BiArrowBack className={classes.backArrow} />
              <p className={classes.backToDashboard}>Back to Dashboard</p>
            </div>
          </Link>
        </Tooltip>
      </div>
    </>
  );
};

export default PageNotFound;
