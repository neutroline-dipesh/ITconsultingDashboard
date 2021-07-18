import React from "react";
// import { useStyle } from "./LoginElement";
import { Grid, Button } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    backgroundColor: "white",
    position: "absolute",
    top: "15%",
    left: "20%",
    borderRadius: "10px",
    boxShadow: "0 8px 16px  rgba(0, 0, 0, 0.3)",
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
    alignItmes: "center",
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
    color: "red",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    textAlign: "center",
    marginTop: "15px",
  },

  loiginButton: {
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
  errorMessage: {
    marginLeft: "5rem",
    fontSize: "12px",
    fontFamily: "Verdana",
  },
}));

//Main funcation
const Login = (props) => {
  const classes = useStyle();
  //for validation
  const handleOnSubmit = (values) => {
    props.onAuth(values.email, values.password);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email Format!").required("Required!"),

      password: Yup.string()
        .min(4, "Minimum 4 character!")
        .required("Required!"),
    }),

    onSubmit: (values) => {
      handleOnSubmit(values);
    },
  });
  return (
    <Grid containor className={classes.root}>
      <Grid item sx={12} className={classes.centerGrid}>
        {/* hello world */}
        <Grid item className={classes.leftGrid}>
          <p className={classes.login}>Login</p>
          <form onSubmit={formik.handleSubmit}>
            <input
              className={classes.email}
              type="email"
              label="hello"
              name="email"
              placeholder="   Email"
              {...formik.getFieldProps("email")}
              required
            />
            <div className={classes.errorMessage}>{formik.errors.email}</div>

            <input
              className={classes.password}
              type="Password"
              name="Password"
              placeholder="   Password"
              {...formik.getFieldProps("password")}
              required
            />
            <div className={classes.errorMessage}>{formik.errors.password}</div>
            {props.error ? (
              <p className={classes.forgetPassword}>Invalid Credentian !</p>
            ) : (
              <p> &nbsp;</p>
            )}
            {/* <p className={classes.forgetPassword}>{props.error}</p> */}
            {props.loading ? (
              <div style={{ textAlign: "center" }}>
                <CircularProgress />
              </div>
            ) : (
              <Button
                type="submit"
                variant="contained"
                size="small"
                color="primary"
                className={classes.loiginButton}
              >
                LOG IN
              </Button>
            )}
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

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
