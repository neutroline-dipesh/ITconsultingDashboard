import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  errorNumber: {
    fontSize: "15rem",
  },
  errorDetail: {
    fontSize: "2rem",
  },
}));
const PageNotFound = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <h1 className={classes.errorNumber}>404</h1>
      <p className={classes.errorDetail}>
        Oops! The Page you requested was not Found!
      </p>
    </div>
  );
};

export default PageNotFound;
