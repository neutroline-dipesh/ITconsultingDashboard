import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import FullEditor from "ckeditor5-build-full";
import { useFormik } from "formik";
import * as Yup from "yup";
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
    alignItems: "center",
    // paddingTop: "0.5rem",
  },
  pageTabName: {
    fontSize: "2rem",
    fontWeight: "400",
    marginLeft: "1rem",
    color: "#062837",
  },
  MainContentDiv: {
    height: "82vh",

    backgroundColor: "#f8f9fc",
  },

  ContentDiv: {
    backgroundColor: "#FFFFFF",
    float: "left",
    marginLeft: "1rem",
    width: "82%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    // borderRadius: "5px",
  },
  ContentDateDiv: {
    overflow: "scroll",
    maxHeight: "80vh",
  },
  form: {
    margin: "1rem",
    // paddingTop: "1rem",
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

const EditJobs = () => {
  const classes = useStyle();

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
      alert(JSON.stringify(values, null, 2));
    },
  });

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
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <Sidebar />
      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>Job / Edit Jobs</span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <form className={classes.form}>
                  <div>
                    <input
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
                        <select
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
                        </select>
                        <div
                          className={
                            classes.errorMessage + " " + classes.countryErrorMsg
                          }
                        >
                          {formik.errors.country}
                        </div>
                      </div>

                      <div className={classes.stateDiv}>
                        <select
                          className={"form-select" + " " + classes.State}
                          {...formik.getFieldProps("state")}
                        >
                          <option value="" selected disabled>
                            State/Province
                          </option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <div
                          className={
                            classes.errorMessage + " " + classes.stateErrorMsg
                          }
                        >
                          {formik.errors.state}
                        </div>
                      </div>
                      <div className={classes.cityDiv}>
                        <select
                          className={"form-select" + " " + classes.city}
                          {...formik.getFieldProps("city")}
                        >
                          <option value="" selected disabled>
                            City
                          </option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
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
                          console.log({ event, editor, data });
                        }}
                      />
                    </div>
                    <div className={classes.publishSaveDiv}>
                      <div className={classes.PublishDiv}>
                        <span>Publish</span>
                        <FormControlLabel
                          control={
                            <IOSSwitch
                              checked={state.checkedB}
                              onChange={handleChange}
                              name="checkedB"
                            />
                          }
                        />
                      </div>
                      <div className={classes.saveButtonDiv}>
                        <button
                          type="submit"
                          className={"btn btn-primary" + " " + classes.save}
                          onClick={() => saveFunction()}
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

export default EditJobs;
