import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  FormLabel,
  Checkbox,
  FormGroup,
  MenuItem,
  FormControlLabel,
  Box,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import axios from "axios";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import FullEditor from "ckeditor5-build-full";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link, useParams, useHistory, Redirect } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { ToastContainer, toast } from "react-toastify";
import { useAlert } from 'react-alert';

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4dbeff",
    },
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
  },
  ckeditor: {},
  save: {
    // backgroundColor: "#2653d4",
    // borderRadius: "20px",
    // fontSize: "0.9rem",
    // marginBottom: ".5rem",
    // width: "7rem",
    float: "right",
    // marginTop: "2rem",
    // "&:hover": {
    //   backgroundColor: "#000099",
    // },
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
    marginLeft: ".5rem",
    // backgroundColor: "#52D869",
  },
  jobTypeRadio: {
    marginRight: "2rem",
    color: "#fffff",
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

const Editjobs = (props) => {
  const classes = useStyle();
  const alert = useAlert();
  let { id } = useParams();

  //for validation

  const [ckeditorContent, setCkeditorContent] = useState("");
  const [job, setJob] = useState({
    jobid: "",
    jobTitle: "",
    jobSubtitle: "",
    publishBy: "",
    department: "",
    jobType: "",
    country: "",
    state: "",
    city: "",
    description: "",
    visibility: "",
  });
  // console.log(ckeditorContent);
  // console.log(id);
  useEffect(() => {
    getJob();
  }, []);
  const [publish, setPublish] = useState(job.publish);
  
  const getJob = () => {
    axios
      .get("http://localhost:4000/allJobs/" + id)
      .then((res) => {
        setJob({
          jobid: res.data.data[0].jobId,
          jobTitle: res.data.data[0].jobTitle,
          jobSubtitle: res.data.data[0].jobSubtitle,
          publishBy: res.data.data[0].publishBy,
          department: res.data.data[0].department,
          jobType: res.data.data[0].jobType,
          country: res.data.data[0].country,
          state: res.data.data[0].state,
          city: res.data.data[0].city,
          description: res.data.data[0].description,
          publish: res.data.data[0].publish,
          visibility: res.data.data[0].visibility,
        });
        // console.log(res.data.data[0].publish);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues: {
      jobTitle: job.jobTitle,
      jobSubTitle: job.jobSubtitle,
      department: job.department,
      jobType: job.jobType,
      country: job.country,
      state: job.state,
      city: job.city,
      publishBy: job.publishBy,
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
      formik.resetForm('');
      // history.push("/Alljobs")
    },
    enableReinitialize: true,
  });

  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  const handleSubmit = (values) => {
    const jobData = {
      jobId: job.jobid,
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
    console.log(jobData);
    // console.log(headers);

    axios
      .patch("http://localhost:4000/allJobs/" + id, jobData, { headers })
      .then((res) => {
        if (res.status == 200){
           alert.success("Job edited successfully");
           props.history.push("/jobs");
        }
        console.log("success");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert.error("something went wrong!");
      });
  };

  console.log(job.visibility);

 
  
  // for switch button (publish)
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
            <span className={classes.pageTabName}>Job / Edit Job</span>
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
                    >
                      <FormControlLabel
                        value="Internal"
                        control={<Radio color="primary" />}
                        label="Internal"
                      />
                      <FormControlLabel
                        value="Contract"
                        control={<Radio color="primary" />}
                        label="Contract"
                      />
                    </RadioGroup>
                  </div>
                </div>{" "}

                <Box>
                  <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <div className={classes.formDiv}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                          {formik.touched.publishBy &&
                          formik.errors.publishBy ? (
                            <TextField
                              fullWidth
                              error
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{ boxShadow: "5px #D3D3D3" }}
                              label={formik.errors.publishBy}
                              type="text"
                              name="publishBy"
                              {...formik.getFieldProps("publishBy")}
                              required
                            />
                          ) : (
                            <TextField
                              fullWidth
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{ boxShadow: "5px #D3D3D3" }}
                              label="Publisher Name"
                              type="text"
                              name="publishBy"
                              {...formik.getFieldProps("publishBy")}
                              required
                            />
                          )}
                        </Grid>

                        <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                          {formik.touched.jobTitle && formik.errors.jobTitle ? (
                            <TextField
                              fullWidth
                              error
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{
                                height: 38,
                                boxShadow: "5px #D3D3D3",
                              }}
                              type="text"
                              className={
                                "form-control" + " " + classes.JobSubtitle
                              }
                              aria-describedby="emailHelp"
                              label={formik.errors.jobTitle}
                              name="jobTitle"
                              {...formik.getFieldProps("jobTitle")}
                              required
                            />
                          ) : (
                            <TextField
                              fullWidth
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{
                                height: 38,
                                boxShadow: "5px #D3D3D3",
                              }}
                              type="text"
                              className={
                                "form-control" + " " + classes.JobSubtitle
                              }
                              aria-describedby="emailHelp"
                              label="Job title"
                              name="jobTitle"
                              {...formik.getFieldProps("jobTitle")}
                              required
                            />
                          )}
                        </Grid>

                        <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                          {formik.touched.jobSubTitle &&
                          formik.errors.jobSubTitle ? (
                            <TextField
                              fullWidth
                              error
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{
                                boxShadow: "5px #D3D3D3",
                              }}
                              type="text"
                              style={{ borderColor: "#0066ff" }}
                              className={
                                "form-control" + " " + classes.JobSubtitle
                              }
                              aria-describedby="emailHelp"
                              name="jobSubTitle"
                              {...formik.getFieldProps("jobSubTitle")}
                              label={formik.errors.jobSubTitle}
                              required
                            />
                          ) : (
                            <TextField
                              fullWidth
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{
                                boxShadow: "5px #D3D3D3",
                              }}
                              type="text"
                              style={{ borderColor: "#0066ff" }}
                              className={
                                "form-control" + " " + classes.JobSubtitle
                              }
                              aria-describedby="emailHelp"
                              name="jobSubTitle"
                              {...formik.getFieldProps("jobSubTitle")}
                              label="Job Short Description"
                              required
                            />
                          )}
                        </Grid>

                        <Grid item xs={12} sm={12} lg={3} xl={3} md={3}>
                          {formik.touched.department &&
                          formik.errors.department ? (
                            <TextField
                              error
                              select
                              variant="outlined"
                              fullWidth
                              margin="dense"
                              label={formik.errors.department}
                              size="small"
                              style={{ borderColor: "#0066ff" }}
                              className={
                                "form-select" + " " + classes.Department
                              }
                              {...formik.getFieldProps("department")}
                              required
                            >
                              <MenuItem value="office Administration">
                                Office Administration
                              </MenuItem>
                              <MenuItem value="Human Resource">
                                Human Resource
                              </MenuItem>
                              <MenuItem value="Sales/Marketing">
                                Sales/Marketing
                              </MenuItem>
                              <MenuItem value="Technology">Technology</MenuItem>
                            </TextField>
                          ) : (
                            <TextField
                              select
                              variant="outlined"
                              fullWidth
                              margin="dense"
                              label="Department"
                              size="small"
                              style={{ borderColor: "#0066ff" }}
                              className={
                                "form-select" + " " + classes.Department
                              }
                              {...formik.getFieldProps("department")}
                              required
                            >
                              <MenuItem value="office Administration">
                                Office Administration
                              </MenuItem>
                              <MenuItem value="Human Resource">
                                Human Resource
                              </MenuItem>
                              <MenuItem value="Sales/Marketing">
                                Sales/Marketing
                              </MenuItem>
                              <MenuItem value="Technology">Technology</MenuItem>
                            </TextField>
                          )}
                        </Grid>

                        <Grid item xs={12} sm={12} lg={3} xl={3} md={3}>
                          {formik.touched.jobType && formik.errors.jobType ? (
                            <TextField
                              error
                              select
                              variant="outlined"
                              fullWidth
                              label={formik.errors.jobType}
                              size="small"
                              margin="dense"
                              className={"form-select" + " " + classes.JobType}
                              {...formik.getFieldProps("jobType")}
                              required
                            >
                              <MenuItem value="Full-time"> Full-time</MenuItem>

                              <MenuItem value="Part-time"> Part-time</MenuItem>
                            </TextField>
                          ) : (
                            <TextField
                              select
                              variant="outlined"
                              fullWidth
                              label="Job Type"
                              size="small"
                              margin="dense"
                              className={"form-select" + " " + classes.JobType}
                              {...formik.getFieldProps("jobType")}
                              required
                            >
                              <MenuItem value="Full-time"> Full-time</MenuItem>

                              <MenuItem value="Part-time"> Part-time</MenuItem>
                            </TextField>
                          )}
                        </Grid>

                        <Grid item xs={12} sm={12} lg={4} xl={4} md={4}>
                          {formik.touched.country && formik.errors.country ? (
                            <TextField
                              error
                              fullWidth
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{
                                height: 38,
                                boxShadow: "5px #D3D3D3",
                                marginTop: "10px",
                              }}
                              type="text"
                              className={"form-control" + " " + classes.Country}
                              aria-describedby="emailHelp"
                              label={formik.errors.country}
                              name="country"
                              {...formik.getFieldProps("country")}
                              required
                            />
                          ) : (
                            <TextField
                              fullWidth
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{
                                height: 38,
                                boxShadow: "5px #D3D3D3",
                                marginTop: "10px",
                              }}
                              type="text"
                              className={"form-control" + " " + classes.Country}
                              aria-describedby="emailHelp"
                              label="Country"
                              name="country"
                              {...formik.getFieldProps("country")}
                              required
                            />
                          )}
                        </Grid>

                        <Grid item xs={12} sm={12} lg={4} xl={4} md={4}>
                          {formik.touched.state && formik.errors.state ? (
                            <TextField
                              error
                              fullWidth
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{
                                height: 38,
                                boxShadow: "5px #D3D3D3",
                                marginTop: "10px",
                              }}
                              style={{ borderColor: "#0066ff" }}
                              type="text"
                              className={"form-control" + " " + classes.State}
                              aria-describedby="emailHelp"
                              label={formik.errors.state}
                              name="jobTitle"
                              {...formik.getFieldProps("state")}
                              required
                            />
                          ) : (
                            <TextField
                              fullWidth
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{
                                height: 38,
                                boxShadow: "5px #D3D3D3",
                                marginTop: "10px",
                              }}
                              style={{ borderColor: "#0066ff" }}
                              type="text"
                              className={"form-control" + " " + classes.State}
                              aria-describedby="emailHelp"
                              label="State initials "
                              name="jobTitle"
                              {...formik.getFieldProps("state")}
                              required
                            />
                          )}
                        </Grid>

                        <Grid item xs={12} sm={12} lg={4} xl={4} md={4}>
                          {formik.touched.city && formik.errors.city ? (
                            <TextField
                              error
                              fullWidth
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{
                                height: 38,
                                boxShadow: "5px #D3D3D3",
                                marginTop: "10px",
                              }}
                              type="text"
                              style={{ borderColor: "#0066ff" }}
                              className={"form-control" + " " + classes.city}
                              aria-describedby="emailHelp"
                              label={formik.errors.city}
                              name="jobTitle"
                              {...formik.getFieldProps("city")}
                              required
                            />
                          ) : (
                            <TextField
                              fullWidth
                              variant="outlined"
                              size="small"
                              margin="dense"
                              style={{
                                height: 38,
                                boxShadow: "5px #D3D3D3",
                                marginTop: "10px",
                              }}
                              type="text"
                              style={{ borderColor: "#0066ff" }}
                              className={"form-control" + " " + classes.city}
                              aria-describedby="emailHelp"
                              label="City"
                              name="jobTitle"
                              {...formik.getFieldProps("city")}
                              required
                            />
                          )}
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} xl={12} md={12}>
                          <div className={classes.DescriptionDiv}>
                            <span>Description</span>
                            <CKEditor
                              className={classes.ckeditor}
                              id="editor1"
                              editor={FullEditor}
                              data={job.description}
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
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                          <FormControlLabel
                            style={{ padding: "6px", marginBottom:"5px", color:"blue"}}
                            control={
                              <IOSSwitch
                                // checked={state.checked}
                                onChange={handleChange}
                                name="checkedB"
                              />
                            }
                            label="Publish"
                          />
                        </Grid>
                          <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
                          <div className={classes.saveButtonDiv}>
                            <Button color="primary" variant="contained" type="submit"  className={classes.save}>
                              Save
                            </Button>
                          </div>
                        </Grid>

                      </Grid>
                    </div>
                  </form>
                </Box>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editjobs;
