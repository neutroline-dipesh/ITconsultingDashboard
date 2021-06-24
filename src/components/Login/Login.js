import React from "react";
// import { useStyle } from "./LoginElement";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles((theme) => ({
  root: {
    // color: "red",
    minHeight: "100vh",
    background: "linear-gradient(to bottom,  #4487A9 ,#B0C3BF )",
    display: "flex",
    justifyContent: "center",

    position: "relative",
  },
  centerGrid: {
    // border: "solid 1px red",
    backgroundColor: "white",
    position: "absolute",
    top: "15%",
    left: "20%",
    borderRadius: "10px",
    boxShadow: "0 8px 16px  rgba(0, 0, 0, 0.3)",
    // margin: "0 auto",
    height: "70vh",
    width: "60vw",
    color: "red",
    display: "flex",
    flexDirection: "row",
  },
  leftGrid: {
    borderRadius: "10px 0px 0px 10px",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  login: {
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "35px",
    textAlign: "center",
    marginTop: "-1rem",
  },
  email: {
    paddingLeft: "15px",
    marginLeft: "5rem",
    marginTop: "0.8rem",
    height: "2.4rem",
    width: "15rem",
    backgroundColor: "rgba(196, 196, 196, 0.4)",
    // borderRadius: "5px",
    border: "0px",
    fontSize: "15px",
  },
  password: {
    paddingLeft: "15px",
    marginLeft: "5rem",
    marginTop: "1.5rem",
    height: "2.4rem",
    width: "15rem",
    backgroundColor: "rgba(196, 196, 196, 0.4)",
    // borderRadius: "5px",
    border: "0px",
    fontSize: "15px",
  },
  forgetPassword: {
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    textAlign: "center",
    marginTop: "15px",
  },
  // buttonDiv: {

  //   position: "absolute",
  //   transform: "translateY(-50%)",
  // },
  loiginButton: {
    // border: "solid 1px",
    backgroundColor: "#04A8F6",
    borderRadius: "20px",
    width: "30%",
    height: "3.9vh",
    fontSize: "12px",
    left: "35%",
    marginTop: "10px",
  },
  rightGrid: {
    background: "#EB7D50",
    borderRadius: "0px 10px 10px 0px ",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
  },
  welcomeBack: {
    color: "#FFFFFF",
    // backgroundColor: "yellow",
    // fontFamily: "Roboto",

    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "35px",
    textAlign: "center",
  },
  welcomeBackNote: {
    color: "rgba(255, 255, 255, 0.6)",
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: "18px",
    fontWeight: "400",
    width: "80%",
    marginTop: "-1rem",
    marginLeft: "3.5rem",
  },
}));

//Main funcation
const Login = () => {
  const classes = useStyle();
  return (
    <Grid containor className={classes.root}>
      <Grid item sx={12} className={classes.centerGrid}>
        {/* hello world */}
        <Grid item className={classes.leftGrid}>
          <p className={classes.login}>Login</p>
          <form noValidate autoComplete="off">
            {/* <TextField
              className={classes.email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            /> */}
            <input
              className={classes.email}
              type="text"
              name="Email"
              placeholder="   Email"
            />
            <input
              className={classes.password}
              type="Password"
              name="Password"
              placeholder="   Password"
            />
            <p className={classes.forgetPassword}>Forget Your password?</p>

            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.loiginButton}
            >
              LOG IN
            </Button>
          </form>
        </Grid>
        <Grid item className={classes.rightGrid}>
          <p
            className={
              classes.welcomeBack +
              " " +
              "animate__animated animate__slideInLeft "
            }
          >
            Welcome Back
          </p>
          <p
            className={
              classes.welcomeBackNote +
              " " +
              "animate__animated animate__slideInRight"
            }
          >
            To keep connected login with your personal info
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
