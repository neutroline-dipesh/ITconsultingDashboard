import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import axios from "axios";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import FullEditor from "ckeditor5-build-full";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddBoxIcon from "@material-ui/icons/AddBox";

import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import { CgArrowLeftR } from "react-icons/cg";
import { IoMdArrowBack } from "react-icons/io";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";

// import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
  maindiv: {
    paddingTop: "8vh",
  },
  PageTabDiv: {
    backgroundColor: "#f8f9fc",

    height: "10vh",
    // border: "solid 1px",
    display: "flex",
    justifyContent: "space-between",

    alignItems: "center",
    // paddingTop: "0.5rem",
  },

  pageTabName: {
    fontSize: "1.75rem",
    fontWeight: "700",
    marginLeft: "2.5rem",
    color: "#3F51B5",
  },
  jobListButton: {
    textDecoration: "none",
    backgroundColor: "#2653d4",
    borderRadius: "20px",
    width: "7rem",
    height: "3.9vh",
    fontSize: "0.7rem",
    marginRight: "1.5rem",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      // backgroundColor: "#98DED9",
    },
  },
  jobListIcon: {
    // color: "black !important",
    fontSize: "1rem",
    marginRight: "1rem",
  },

  MainContentDiv: {
    height: "82vh",

    backgroundColor: "#f8f9fc",
  },

  ContentDiv: {
    backgroundColor: "#FFFFFF",
    float: "left",
    marginLeft: "1rem",
    width: "81%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
  },
  ContentDateDiv: {},
  lefttableTitleDiv: {
    borderRadius: "5px 5px 1px 1px",
    display: "flex",
    alignItems: "center",

    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: "#F8F9FC",

    borderBottom: "solid 1px #e3e6f0",
  },
  lefttableTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
    marginLeft: "1.5rem",
    color: "#303f9f",
  },
  formDiv: {
    maxHeight: "65vh",
    overflow: "scroll",

    overflowX: "hidden",
    paddingRight: "1rem",
  },
  form: {
    margin: "1rem",
    // paddingTop: "1rem",
  },
  inputBoderColor: {
    borderColor: "#ff0000 !important",
  },
  JobTitle: {},
  JobSubtitle: {
    marginTop: "1.5rem",
  },
  DepartmentJobTypeDiv: {
    display: "flex",
  },
  departmentDiv: {
    // display: "flex",
    // flexDirection: "row",
  },
  DepartmentDiv: {
    // backgroundColor: "red",
    width: "48%",
  },
  Department: {
    marginTop: "1.5rem",
    // width: "250%",
  },
  jobTypeDiv: {
    width: "48%",
  },
  JobType: {
    marginTop: "1.5rem",
    marginLeft: "2.5rem",
    // width: "100%",
  },
  jobTypeErrorMsg: {
    marginLeft: "2.5rem",
  },

  CountryStateCityDiv: {
    marginTop: "1.5rem",
    display: "flex",
    // justifyContent: "space-between",
  },
  countryDiv: {
    width: "30%",
  },
  stateDiv: {
    width: "30%",
  },
  Country: {
    // width: "30%",
  },
  State: {
    // width: "30%",
    marginLeft: "2.5rem",
  },
  stateErrorMsg: {
    marginLeft: "2.5rem",
  },
  cityDiv: {
    width: "30%",
  },
  city: {
    marginLeft: "5rem",
  },
  cityErrorMsg: {
    marginLeft: "5rem",
  },
  DescriptionDiv: {
    marginTop: "1rem",
  },
  ckeditor: {},
  save: {
    backgroundColor: "#04A8F6",
    borderRadius: "20px",
    fontSize: "0.9rem",
    // boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    width: "7rem",
    marginTop: "2rem",
    // float: "right",
    // marginBottom: "1rem",
  },
  errorMessage: {
    // marginLeft: "5rem",
    marginTop: "0.2rem",
    fontSize: "12px",
    fontFamily: "Verdana",
    color: "red",
  },
  PublishDiv: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
  },
  publishSaveDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  publishCheckBox: {
    width: "3.5rem !important",
    height: "3.5vh",
    // backgroundColor: "#52D869",
  },
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const Addjobs = () => {
  const classes = useStyle();
  let history = useHistory();

  //for validation
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      jobSubTitle: "",
      department: "",
      jobType: "",
      country: "",
      state: "",
      city: "",
      publishBy: "",
    },
    validationSchema: Yup.object({
      jobTitle: Yup.string().required("Required!"),
      jobSubTitle: Yup.string().required("Required!"),
      department: Yup.string().required("Required!"),
      jobType: Yup.string().required("Required!"),
      country: Yup.string().required("Required!"),
      state: Yup.string().required("Required!"),
      city: Yup.string().required("Required!"),
      publishBy: Yup.string().required("Required!"),
      // password: Yup.string()
      //   .min(4, "Minimum 4 character!")
      //   .required("Required!"),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
      // history.push("/Alljobs")
    },
  });

  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  const [ckeditorContent, setCkeditorContent] = useState("");
  const [publish, setPublish] = useState("Not Publish");
  // console.log(ckeditorContent);
  const handleSubmit = (values) => {
    const job = {
      jobTitle: values.jobTitle,
      jobSubtitle: values.jobSubTitle,
      department: values.department,
      jobType: values.jobType,
      country: values.country,
      state: values.state,
      city: values.city,
      publishBy: values.publishBy,
      description: ckeditorContent,
      visibility: publish,
    };
    console.log(job);
    // console.log(headers);

    axios
      .post("http://localhost:4000/allJobs/", job, { headers })
      .then((res) => {
        saveFunction();
        console.log("success");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log("unsuccessful");
      });
  };

  //alert message
  const saveFunction = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mx-2",
        cancelButton: "btn btn-danger mx-2",
      },
      buttonsStyling: false,
    });
    // if (
    //   formik.initialValues.jobTitle != "" &&
    //   formik.initialValues.jobSubTitle != "" &&
    //   formik.initialValues.department != "" &&
    //   formik.initialValues.jobType != "" &&
    //   formik.initialValues.country != "" &&
    //   formik.initialValues.state != "" &&
    //   formik.initialValues.city != ""
    // ) {
    //   console.log("hello");
    // }

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Save it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Save!",
            "Your file has been Save.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  //for switch button (publish)
  const [state, setState] = React.useState();
  const handleChange = (event) => {
    setState(event.target.checked);
    setPublish("Not Publish");
    console.log(state);
    if (state == true) {
      setPublish("Not Publish");
    } else {
      setPublish("Publish");
    }
  };
  return (
    <>
      <Sidebar />
      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>Job / Add Jobs</span>
            <Tooltip title="Job List" TransitionComponent={Zoom} arrow>
              <Link to="/alljobs">
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.jobListButton}
                >
                  <IoMdArrowBack className={classes.jobListIcon} /> Job List
                </Button>
              </Link>
            </Tooltip>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <div className={classes.lefttableTitleDiv}>
                  <span className={classes.lefttableTitle}>
                    Job Information
                  </span>
                </div>{" "}
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                  <div className={classes.formDiv}>
                    <input
                      className={classes.inputBoderColor}
                      style={{ borderColor: "#45ffe6" }}
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Publisher Name"
                      name="publishBy"
                      {...formik.getFieldProps("publishBy")}
                      required
                    />
                    <div className={classes.errorMessage}>
                      {formik.errors.publishBy}
                    </div>
                    <input
                      type="text"
                      style={{ borderColor: "#45ffe6" }}
                      className={"form-control" + " " + classes.JobSubtitle}
                      aria-describedby="emailHelp"
                      placeholder="Enter Job title"
                      name="jobTitle"
                      {...formik.getFieldProps("jobTitle")}
                      required
                    />
                    <div className={classes.errorMessage}>
                      {formik.errors.jobTitle}
                    </div>
                    <input
                      type="text"
                      style={{ borderColor: "#45ffe6" }}
                      className={"form-control" + " " + classes.JobSubtitle}
                      aria-describedby="emailHelp"
                      name="jobSubTitle"
                      {...formik.getFieldProps("jobSubTitle")}
                      placeholder="Enter Job SubTitle"
                      required
                    />
                    <div className={classes.errorMessage}>
                      {formik.errors.jobSubTitle}
                    </div>
                    <div className={classes.DepartmentJobTypeDiv}>
                      <div className={classes.DepartmentDiv}>
                        <select
                          style={{ borderColor: "#45ffe6" }}
                          className={"form-select" + " " + classes.Department}
                          {...formik.getFieldProps("department")}
                        >
                          <option value="" selected disabled>
                            Department
                          </option>
                          <option>Office Administration</option>
                          <option>Human Resource</option>
                          <option>Sales/Marketing</option>
                          <option>Technology</option>
                        </select>
                        <div className={classes.errorMessage}>
                          {formik.errors.department}
                        </div>
                      </div>
                      <div className={classes.jobTypeDiv}>
                        <select
                          style={{ borderColor: "#45f6ff" }}
                          className={"form-select" + " " + classes.JobType}
                          {...formik.getFieldProps("jobType")}
                        >
                          <option value="" selected disabled>
                            Job type
                          </option>
                          <option>Full Time</option>
                          <option>Part Time</option>
                          <option>Contract</option>
                        </select>
                        <div
                          className={
                            classes.errorMessage + " " + classes.jobTypeErrorMsg
                          }
                        >
                          {formik.errors.jobType}
                        </div>
                      </div>
                    </div>

                    <div className={classes.CountryStateCityDiv}>
                      <div className={classes.countryDiv}>
                        <input
                          style={{ borderColor: "#45ffe6" }}
                          type="text"
                          className={"form-control" + " " + classes.Country}
                          aria-describedby="emailHelp"
                          placeholder="Enter Country"
                          name="jobTitle"
                          {...formik.getFieldProps("country")}
                          required
                        />
                        {/* <select
                          className={"form-select" + " " + classes.Country}
                          {...formik.getFieldProps("country")}
                        >
                          <option value="" selected disabled>
                            Country
                          </option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select> */}
                        <div
                          className={
                            classes.errorMessage + " " + classes.countryErrorMsg
                          }
                        >
                          {formik.errors.country}
                        </div>
                      </div>

                      <div className={classes.stateDiv}>
                        <input
                          style={{ borderColor: "#45ffe6" }}
                          type="text"
                          className={"form-control" + " " + classes.State}
                          aria-describedby="emailHelp"
                          placeholder="Enter State"
                          name="jobTitle"
                          {...formik.getFieldProps("state")}
                          required
                        />
                        <div
                          className={
                            classes.errorMessage + " " + classes.stateErrorMsg
                          }
                        >
                          {formik.errors.state}
                        </div>
                      </div>
                      <div className={classes.cityDiv}>
                        <input
                          type="text"
                          style={{ borderColor: "#45ffe6" }}
                          className={"form-control" + " " + classes.city}
                          aria-describedby="emailHelp"
                          placeholder="Enter City"
                          name="jobTitle"
                          {...formik.getFieldProps("city")}
                          required
                        />

                        <div
                          className={
                            classes.errorMessage + " " + classes.cityErrorMsg
                          }
                        >
                          {formik.errors.city}
                        </div>
                      </div>
                    </div>
                    <div className={classes.DescriptionDiv}>
                      <span>Description</span>
                      <CKEditor
                        className={classes.ckeditor}
                        id="editor1"
                        editor={FullEditor}
                        config={{
                          ckfinder: {
                            // Upload the images to the server using the CKFinder QuickUpload command
                            // You have to change this address to your server that has the ckfinder php connector
                            uploadUrl:
                              "https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",
                          },
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setCkeditorContent(editor.getData());
                          // console.log({ event, editor, data });
                        }}
                      />
                    </div>
                    <div className={classes.publishSaveDiv}>
                      <div className={classes.PublishDiv}>
                        <span>Publish</span>
                        <div class="form-check form-switch">
                          <input
                            className={"form-check-input"}
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            name="publish"
                            style={{
                              width: "3.5rem",
                              height: "3.5vh",
                            }}
                            onChange={handleChange}
                            value="true"
                          />
                          {/* <label
                            class="form-check-label"
                            for="flexSwitchCheckChecked"
                          >
                            Publish
                          </label> */}
                        </div>

                        {/* <FormControlLabel
                          control={
                            <IOSSwitch
                              checked={state.checkedB}
                              onChange={handleChange}
                              name="checkedB"
                            />
                          }
                        /> */}
                      </div>
                      <div className={classes.saveButtonDiv}>
                        <button
                          type="submit"
                          className={"btn btn-primary" + " " + classes.save}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addjobs;
