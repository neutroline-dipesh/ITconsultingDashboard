import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

import ListItemText from "@material-ui/core/ListItemText";
import ContactsIcon from "@material-ui/icons/Contacts";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import pdf from "../../assets/files/cv.pdf";
import adimImage from "../../assets/images/profile.png";
import TabViewApplicant from "./TabViewApplicant";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import DateRangeIcon from "@material-ui/icons/DateRange";
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
    justifyContent: "space-between",
    alignItems: "center",
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
    width: "9rem",
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
  backIcon: {
    fontSize: "1.9rem",
    marginRight: "1rem",
  },
  MainContentDiv: {
    height: "82vh",

    backgroundColor: "#f8f9fc",
  },

  ContentDiv: {
    float: "left",
    marginLeft: "1rem",
    width: "82%",
    borderRadius: "5px",
  },
  ContentDateDiv: {
    maxHeight: "80vh",
    display: "flex",
  },
  leftDiv: {
    borderRadius: "5px",
    width: "25%",

    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
    backgroundColor: "#ffffff",
    boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.25)",
  },
  listMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  lefttableTitleDiv: {
    borderRadius: "5px 5px 1px 1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: "#e6e6ff",

    borderBottom: "solid 1px #e3e6f0",
  },
  lefttableTitle: {
    fontWeight: "600",
    fontSize: "1.1rem",

    color: "#fffff",
    height: "3vh",
  },
  listHead: {
    fontSize: "0.875rem",
    fontWeight: "bold",
    width: "30%",
  },
  listBody: {
    marginLeft: "1rem",
    width: "60%",
  },
  rightDiv: {
    // borderRadius: "5px",
    width: "71.5%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
    marginBottom: "1rem",
    marginRight: "0.5rem",
    backgroundColor: "#ffffff",
    boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.25)",
  },
  rightTableTitleDiv: {
    borderRadius: "5px 5px 1px 1px",
    display: "flex",
    alignItems: "center",

    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: "#e6e6ff",

    borderBottom: "solid 1px #e3e6f0",
  },
  rightTableTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
    marginLeft: "1.5rem",
    color: "#fffff",
  },
  leftTableContectDiv: {
    // overflow: "scroll",
    // overflowX: "hidden",
    // overflowY: "hidden",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  rightTableContectDiv: {
    height: "85vh",
    // overflow: "scroll",
    // overflowX: "hidden",
  },
  description: {
    padding: "1rem",
  },
  ListItem: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
    // border: "solid 1px",
    width: "80%",
    // fontWeight: "500",
    fontSize: "0.9rem",
    color: "#3d3d29",
    // justifyContent: "space-between",
    // backgroundColor: "red",
    // paddingLeft: "2rem",
    // paddingRight: "2rem",
  },
  ListItemLeft: {
    width: "50%",
    textAlign: "justify",
    // backgroundColor: "red",
    // marginRight: "1rem",
  },
  ListItemRight: {
    width: "50%",
    // backgroundColor: "blue",

    marginLeft: "1.5rem",
  },
  listItemTitle: {
    fontWeight: "500",
  },
  listItemBody: {
    // color: "#858796",
    fontSize: "0.5rem",
  },
  cv: {
    // marginLeft: "1rem",
    width: "100%",
    height: "100vh",
  },
  image: {
    width: "50%",
    marginBottom: "1rem",
    marginTop: "1rem",
    // position: "absolute",
    // top: "3.5rem",
  },
  icon: {
    width: "1.5rem",
  },
}));

const ViewApplicantDetail = () => {
  const classes = useStyle();
  let { id } = useParams();
  const [applicant, setApplicant] = useState({
    id: null,
    fullName: null,
    gmail: null,
    phone: null,
    message: null,
    resume: null,
    coverletter: null,
    jobType: null,
    status: null,
    postedDate: null,
    loading: false,
    error: false,
    loading: false,
  });
  const [alignment, setAlignment] = React.useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  useEffect(() => {
    getApplicantDetails();
  }, []);
  console.log(applicant);

  const getApplicantDetails = () => {
    axios
      .get("http://localhost:4000/externalApplicant/" + id)
      .then((res) => {
        console.log(res.data);
        setApplicant({
          id: res.data.data[0].id,
          fullName: res.data.data[0].fullName,
          gmail: res.data.data[0].gmail,
          phone: res.data.data[0].phone,
          message: res.data.data[0].message,
          resume: res.data.data[0].resume,
          coverletter: res.data.data[0].coverletter,
          jobType: res.data.data[0].jobType,
          status: res.data.data[0].status,
          postedDate: res.data.data[0].postedDate,
          loading: false,
          error: false,
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
              External / Applicant Detail
            </span>
            <Tooltip title="Job List" TransitionComponent={Zoom} arrow>
              <Link to="/externalApplicant">
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.jobListButton}
                >
                  <IoMdArrowBack className={classes.jobListIcon} /> External
                  List
                </Button>
              </Link>
            </Tooltip>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <div className={classes.leftDiv}>
                  <div className={classes.lefttableTitleDiv}>
                    <span className={classes.lefttableTitle}>
                      Personal Information
                    </span>
                  </div>
                  <div className={classes.leftTableContectDiv}>
                    <List className={classes.listMain}>
                      <img src={adimImage} className={classes.image} />

                      <ListItem
                        className={classes.ListItem}
                        style={{
                          backgroundColor: "#809fff",
                          color: "#fff",
                          borderRadius: "5px",
                          textAlign: "center",
                        }}
                      >
                        {/* <span
                          className={classes.listItemTitle}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          {/* <PersonOutlineIcon style={{ color: "#adad85" }} /> */}
                        {/* <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/id-verified.png"
                          />
                        </span>  */}
                        <span style={{ width: "100%" }}>
                          {applicant.fullName}
                        </span>
                      </ListItem>
                      <ListItem className={classes.ListItem}>
                        <span
                          className={classes.listItemTitle}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <PhoneAndroidIcon style={{ color: "#adad85" }} />
                          {/* <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/address--v1.png"
                          /> */}
                        </span>
                        <span>{applicant.phone}</span>
                      </ListItem>
                      <ListItem className={classes.ListItem}>
                        <span
                          className={classes.listItemTitle}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <MailOutlineIcon style={{ color: "#adad85" }} />
                          {/* <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/address--v1.png"
                          /> */}
                        </span>
                        <span>{applicant.gmail}</span>
                      </ListItem>
                      {/* <ListItem className={classes.ListItem}>
                        <span
                          className={classes.listItemTitle}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <LocationCityIcon style={{ color: "#adad85" }} />
                          
                        </span>
                        <span>{applicant.city + " , " + applicant.state}</span>
                      </ListItem> */}
                      <ListItem className={classes.ListItem}>
                        <span
                          className={classes.listItemTitle}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <DateRangeIcon style={{ color: "#adad85" }} />
                          {/* <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/calendar--v1.png"
                          /> */}
                        </span>
                        <span>{applicant.postedDate}</span>
                      </ListItem>
                    </List>
                  </div>
                </div>
                <div className={classes.rightDiv}>
                  <div className={classes.rightTableContectDiv}>
                    <TabViewApplicant data={applicant} />
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

export default ViewApplicantDetail;
