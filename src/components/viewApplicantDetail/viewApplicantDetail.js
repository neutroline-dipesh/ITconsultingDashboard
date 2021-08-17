import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ContactsIcon from "@material-ui/icons/Contacts";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import WcIcon from "@material-ui/icons/Wc";
import Resume from "./viewResume";
import CoverLetter from "./viewCoverLetter";

import { useParams } from "react-router-dom";
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
    display: "flex",
    alignItems: "center",
  },
  pageTabName: {
    fontSize: "1.75rem",
    fontWeight: "700",
    marginLeft: "2.5rem",
    color: "#3F51B5",
  },
  MainContentDiv: {
    // height: "82vh",

    backgroundColor: "#f8f9fc",
  },

  ContentDiv: {
    backgroundColor: "#FFFFFF",
    float: "left",
    // height: "80vh",
    marginLeft: "1rem",
    width: "81%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
  },
  ContentDateDiv: {
    // overflow: "scroll",
    // maxHeight: "80vh",
    // display: "flex",
  },
  leftRightDiv: {
    display: "flex",
    // backgroundColor: "red",
    maxHeight: "70vh",
    overflow: "scroll",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  leftDiv: {
    // backgroundColor: "red",
    // border: "solid 1px",
    borderRadius: "10px",
    width: "30%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    // boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.25)",
  },
  lefttableTitleDiv: {
    borderRadius: "5px 5px 1px 1px",
    display: "flex",
    alignItems: "center",

    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: "#F8F9FC",

    borderBottom: "solid 1px #e3e6f0",
    display: "flex",
    justifyContent: "space-between",
  },
  lefttableTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
    marginLeft: "1.5rem",
    color: "#303f9f",
  },
  image: {
    marginTop: "1rem",
    width: "90%",
    height: "20vh",
  },
  listMain: {
    // backgroundColor: "red",
    width: "100%",
  },
  rightDiv: {
    borderRadius: "10px",
    width: "65%",
    // paddingTop: "1rem",
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    // boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.25)",
  },
  SecondlistMain: {
    border: "solid 1px ",
    borderColor: "#d1d1cf",
    marginTop: "1rem",
    width: "90%",
  },
  listItem: {
    borderBottom: "solid 1px",
    borderBottomColor: "#d1d1cf",
  },
  listHead: {
    // backgroundColor: "red",
    fontSize: "1rem",
    width: "25%",
    fontWeight: "bold",
  },
  listBody: {
    marginLeft: "1rem",
    // backgroundColor: "blue",
    maxWidth: "508px",
    textAlign: "justify",
  },
  resumeTitle: {
    marginLeft: "1rem",
  },
  cv: {
    marginLeft: "1rem",
    width: "95%",
    height: "80vh",
  },
  toogleButton: {
    // marginTop: "2rem",
    marginRight: "1rem",
    height: "5vh",
  },
  acceptToggleBtn: {
    backgroundColor: "#28A745",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1f7a1f",
      color: "#fff",
    },
    "&:active": {
      backgroundColor: "#fff",
      color: "#ffff",
    },
  },
  rejectToggleBtn: {
    marginLeft: "15px",
    backgroundColor: "#DC3545",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#b30000",
      color: "#fff",
    },
  },
  blacklistToggleBtn: {
    backgroundColor: "#FFC107",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#b38f00",
      color: "#fff",
    },
  },
}));

const Contracting = () => {
  let { id } = useParams();
  // console.log(id);
  const [applicant, setApplicant] = useState({
    firstName: null,
    lastName: null,
    phone: null,
    city: null,
    state: null,
    country: null,
    gmail: null,
    postedDate: null,
    senioritylevel: null,
    expectedSalary: null,
    salaryType: null,
    jobTitle: null,
    message: null,
    resume: null,
    resumeFileType: null,
    coverletter: null,
    error: false,
    loading: false,
  });
  const classes = useStyle();
  const [alignment, setAlignment] = React.useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  useEffect(() => {
    getApplicantDetails();
    console.log(applicant);
  }, []);

  const getApplicantDetails = () => {
    axios
      .get("http://localhost:4000/allApplicant/" + id)
      .then((response) => {
        // console.log(response.data.data[0]);
        setApplicant({
          firstName: response.data.data[0].firstName,
          lastName: response.data.data[0].lastName,
          phone: response.data.data[0].phone,
          city: response.data.data[0].city,
          state: response.data.data[0].state,
          country: response.data.data[0].country,
          gmail: response.data.data[0].gmail,
          postedDate: response.data.data[0].postedDate,
          senioritylevel: response.data.data[0].senioritylevel,
          expectedSalary: response.data.data[0].expectedSalary,
          salaryType: response.data.data[0].salaryType,
          jobTitle: response.data.data[0].jobTitle,
          message: response.data.data[0].message,
          resume: response.data.data[0].resume,
          resumeFileType: response.data.data[0].resume.split(".").pop(),
          coverletter: response.data.data[0].coverletter,
          error: false,
          loading: false,
        });
      })
      .catch((err) => {
        console.log("error", err);
        setApplicant({
          ...applicant,
          error: true,
          loading: false,
        });
      });
  };

  return (
    <>
      <Sidebar />
      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>
              Applicant / Applicant Detail
            </span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <div className={classes.lefttableTitleDiv}>
                  <span className={classes.lefttableTitle}>
                    Personal Information
                  </span>
                  <ToggleButtonGroup
                    className={classes.toogleButton}
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                  >
                    <ToggleButton
                      className={classes.acceptToggleBtn}
                      value="Accept"
                      aria-label="left aligned"
                    >
                      Accept
                    </ToggleButton>
                    <ToggleButton
                      className={classes.rejectToggleBtn}
                      value="Reject"
                      aria-label="centered"
                    >
                      Reject
                    </ToggleButton>
                    <ToggleButton
                      className={classes.blacklistToggleBtn}
                      value="Hold"
                      aria-label="right aligned"
                    >
                      Hold
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>{" "}
                <div className={classes.leftRightDiv}>
                  <div className={classes.leftDiv}>
                    <List className={classes.listMain}>
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/48/000000/customer-skin-type-7.png" />{" "}
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            applicant.firstName + " " + applicant.lastName
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/48/000000/apple-phone.png" />{" "}
                        </ListItemAvatar>
                        <ListItemText primary={applicant.phone} />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/48/000000/order-delivered.png" />{" "}
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            applicant.city +
                            " , " +
                            applicant.state +
                            " , " +
                            applicant.country
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/40/000000/gmail--v1.png" />
                        </ListItemAvatar>
                        <ListItemText primary={applicant.gmail} />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/48/000000/gender.png" />
                        </ListItemAvatar>
                        <ListItemText primary={applicant.salaryType} />
                      </ListItem>

                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/40/000000/calendar.png" />
                        </ListItemAvatar>
                        <ListItemText primary={applicant.postedDate} />
                      </ListItem>
                    </List>
                  </div>
                  <div className={classes.rightDiv}>
                    <List>
                      <ListItem>
                        <span className={classes.listHead}>
                          Seniority Level:
                        </span>
                        <span className={classes.listBody}>
                          {applicant.senioritylevel}
                        </span>
                      </ListItem>
                      <ListItem>
                        <span className={classes.listHead}>
                          Expected Salary($):
                        </span>
                        <span className={classes.listBody}>
                          {applicant.expectedSalary}
                        </span>
                      </ListItem>
                      <ListItem>
                        <span className={classes.listHead}>Applied Job:</span>
                        <span className={classes.listBody}>
                          {applicant.jobTitle}
                        </span>
                      </ListItem>
                      <ListItem>
                        <span className={classes.listHead}>Message:</span>
                        <span className={classes.listBody}>
                          {applicant.message}
                        </span>
                      </ListItem>
                    </List>
                    <Resume
                      resume={applicant.resume}
                      fileType={applicant.resumeFileType}
                    />
                    <CoverLetter letter={applicant.coverletter} />

                    {/* <span className={classes.resumeTitle}>Resume:</span> */}
                    {/* <embed className={classes.cv} src={file}></embed> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contracting;
