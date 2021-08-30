import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import FullEditor from "ckeditor5-build-full";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Box from "@material-ui/core/Box";
import SelectInput from "@material-ui/core/Select/SelectInput";

// import FormControlLabel from "@material-ui/core/FormControlLabel";
import "bootstrap/dist/css/bootstrap.min.css";

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
    "&:hover": {},
  },
  jobListIcon: {
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
    justifyContent: "space-between",
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
    color: "#fffff",
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
    marginLeft: "3.2rem",
  },
  stateErrorMsg: {
    marginLeft: "3.2rem",
  },
  cityDiv: {
    width: "30%",
  },
  city: {
    marginLeft: "6.5rem",
  },
  cityErrorMsg: {
    marginLeft: "6.5rem",
  },
  DescriptionDiv: {
    marginTop: "1rem",
  },
  ckeditor: {},
  save: {
    backgroundColor: "#2653d4",
    borderRadius: "20px",
    fontSize: "0.9rem",
    marginBottom:".5rem",
    width: "7rem",
    marginTop: "2rem",
    "&:hover": {
      backgroundColor: "#000099",
    },
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
    marginLeft:".5rem",
    // backgroundColor: "#52D869",
  },
  jobTypeRadio: {
    marginRight: "2rem",
    color: "#fffff",
  },
}));

const Addjobs = () => {
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
      workType: "",
    },
    validationSchema: Yup.object({
      jobTitle: Yup.string().min(1, "Required!").required("Required!"),
      jobSubTitle: Yup.string()
        .min(1, "Required!")
        .max(200, "please make it short, only 200 characters allowed.").required("Required!"),
      department: Yup.string().min(1, "Required!").required("Required!"),
      jobType: Yup.string().min(1, "Required!").required("Required!"),
      country: Yup.string().min(1, "Required!").required("Required!"),
      state: Yup.string().max(3, "please enter only state Initials").required("Required!"),
      city: Yup.string().min(1, "Required!").required("Required!"),
      publishBy: Yup.string().min(1, "Required!").required("Required!"),
      // password: Yup.string()
      //   .min(4, "Minimum 4 character!")
      //   .required("Required!"),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
      // formik.resetForm();
      // history.push("/Alljobs")
    },
  });

  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  const [ckeditorContent, setCkeditorContent] = useState("");
  const [publish, setPublish] = useState("Not Publish");
  const [workType, setWorkType] = useState("Internal");
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
      workType: workType,
    };
    const notify = () => {
      toast.success("Job posted successfully");

      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    };
    axios
      .post("http://localhost:4000/allJobs/", job, { headers })
      .then((res) => {
        console.log("success");

        {
          notify();
        }
      });
  };

  //alert message
  //for switch button (publish)
  const [state, setState] = React.useState();
  const handleChange = (event) => {
    setState(event.target.checked);
    // setPublish("Not Publish");
    console.log(state);
    if (state == true) {
      setPublish("Not Publish");
    } else {
      setPublish("Publish");
    }
  };
  const handleRadio = (event) => {
    setWorkType(event.target.value);
    console.log(workType);
  };
  return (
    <>
      <Sidebar />
      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>Job / Add Jobs</span>
            <Tooltip title="Job List" TransitionComponent={Zoom} arrow>
              <Link to="/jobs" style={{ textDecoration: "none" }}>
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
                  <div className={classes.jobTypeRadio}>
                    <RadioGroup
                      row
                      aria-label="position"
                      name="position"
                      defaultValue="Internal"
                      onChange={handleRadio}
                    >
                      <FormControlLabel
                        value="Internal"
                        control={<Radio color="primary" />}
                        label={<Box component="div">Internal</Box>}
                      />
                      <FormControlLabel
                        value="Contract"
                        control={<Radio color="primary" />}
                        label={<Box component="div">Contract</Box>}
                      />
                    </RadioGroup>
                  </div>
                </div>{" "}
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                  <div className={classes.formDiv}>
                    <input
                      className={classes.inputBoderColor}
                      style={{ borderColor: "#0066ff" }}
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Publisher Name"
                      name="publishBy"
                      {...formik.getFieldProps("publishBy")}
                      required
                    />
                    <div className={classes.errorMessage}>
                    {formik.touched.publishBy && formik.errors.publishBy ? (
         <div>{formik.errors.publishBy}</div>
       ) : null}
                    </div>
                    <input
                      type="text"
                      style={{ borderColor: "#0066ff" }}
                      className={"form-control" + " " + classes.JobSubtitle}
                      aria-describedby="emailHelp"
                      placeholder="Enter Job title"
                      name="jobTitle"
                      {...formik.getFieldProps("jobTitle")}
                      required
                    />
                    <div className={classes.errorMessage}>
                    {formik.touched.jobTitle && formik.errors.jobTitle ? (
         <div>{formik.errors.jobTitle}</div>
       ) : null}                    </div>
                    <input
                      type="text"
                      style={{ borderColor: "#0066ff" }}
                      className={"form-control" + " " + classes.JobSubtitle}
                      aria-describedby="emailHelp"
                      name="jobSubTitle"
                      {...formik.getFieldProps("jobSubTitle")}
                      placeholder="Enter Job Short Description"
                      required
                    />
                    <div className={classes.errorMessage}>
                    {formik.touched.jobSubTitle && formik.errors.jobSubTitle ? (
         <div>{formik.errors.jobSubTitle}</div>
       ) : null}                       </div>
                    <div className={classes.DepartmentJobTypeDiv}>
                      <div className={classes.DepartmentDiv}>
                        <select
                          style={{ borderColor: "#0066ff" }}
                          className={"form-select" + " " + classes.Department}
                          {...formik.getFieldProps("department")}
                          required
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
                        {formik.touched.department && formik.errors.department ? (
         <div>{formik.errors.department}</div>
       ) : null}    
                        </div>
                      </div>
                      <div className={classes.jobTypeDiv}>
                        <select
                          style={{ borderColor: "#0066ff" }}
                          className={"form-select" + " " + classes.JobType}
                          {...formik.getFieldProps("jobType")}
                          required
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
                          {formik.touched.jobType && formik.errors.jobType ? (
         <div>{formik.errors.jobType}</div>
       ) : null}    
                        </div>
                      </div>
                    </div>

                    <div className={classes.CountryStateCityDiv}>
                      <div className={classes.countryDiv}>
                        <input
                          style={{ borderColor: "#0066ff" }}
                          type="text"
                          className={"form-control" + " " + classes.Country}
                          aria-describedby="emailHelp"
                          placeholder="Enter Country"
                          name="country"
                          {...formik.getFieldProps("country")}
                          required
                        />

                        <div
                          className={
                            classes.errorMessage + " " + classes.countryErrorMsg
                          }
                        >
                           {formik.touched.country && formik.errors.country ? (
         <div>{formik.errors.country}</div>
       ) : null}    
                        </div>
                      </div>

                      <div className={classes.stateDiv}>
                        <input
                          style={{ borderColor: "#0066ff" }}
                          type="text"
                          className={"form-control" + " " + classes.State}
                          aria-describedby="emailHelp"
                          placeholder="Enter State initials "
                          name="jobTitle"
                          {...formik.getFieldProps("state")}
                          required
                        />
                        <div
                          className={
                            classes.errorMessage + " " + classes.stateErrorMsg
                          }
                        >
                          {formik.touched.state && formik.errors.state ? (
         <div>{formik.errors.state}</div>
       ) : null}    
                        </div>
                      </div>
                      <div className={classes.cityDiv}>
                        <input
                          type="text"
                          style={{ borderColor: "#0066ff" }}
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
                           {formik.touched.city && formik.errors.city ? (
         <div>{formik.errors.city}</div>
       ) : null}    
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
                        <ToastContainer
                          position="bottom-right"
                          autoClose={2000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                        />
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
