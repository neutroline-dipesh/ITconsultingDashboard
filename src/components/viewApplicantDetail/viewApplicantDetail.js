import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import adimImage from "../../assets/images/admin2.jpeg";
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

import file from "../../assets/files/cv.pdf";
const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
  maindiv: {
    paddingTop: "8vh",
  },
  PageTabDiv: {
    backgroundColor: "#C4C4C4",

    height: "10vh",
    // border: "solid 1px",
    paddingTop: "1rem",
  },
  pageTabName: {
    fontSize: "2rem",
    fontWeight: "600",
    marginLeft: "1rem",
    color: "#062837",
  },
  MainContentDiv: {
    height: "82vh",

    backgroundColor: "#C4C4C4",
  },

  ContentDiv: {
    backgroundColor: "#FFFFFF",
    float: "left",
    // height: "80vh",
    marginLeft: "1rem",
    width: "82%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
  },
  ContentDateDiv: {
    // overflow: "scroll",
    maxHeight: "80vh",
    display: "flex",
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
    boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.25)",
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
    fontSize: "1rem",
    width: "50%",
    fontWeight: "bold",
  },
  listBody: {
    marginLeft: "1rem",
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
    marginTop: "1.5rem",
    height: "5vh",
  },
  acceptToggleBtn: {
    backgroundColor: "#24803c",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1cba45",
      color: "#fff",
    },
    "&:active": {
      backgroundColor: "#fff",
      color: "#ffff",
    },
  },
  rejectToggleBtn: {
    marginLeft: "15px",
    backgroundColor: "#cccc00",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ffff00",
      color: "#fff",
    },
  },
  blacklistToggleBtn: {
    backgroundColor: "#660000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ff0000",
      color: "#fff",
    },
  },
}));

const Contracting = () => {
  const classes = useStyle();
  const [alignment, setAlignment] = React.useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Sidebar />
      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>Applicant Detail</span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <div className={classes.leftDiv}>
                  {/* <img className={classes.image} src={adimImage} /> */}
                  <List className={classes.listMain}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ContactsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Dipesh Shrestha" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ContactPhoneIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="9816940668" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ContactMailIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Kathmandu, Nepal" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ContactMailIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="dipeshxtha129@gmail.com" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CalendarTodayIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="4 july 2021" />
                    </ListItem>
                    <ListItem>
                      <span className={classes.listHead}>Seniority Level:</span>
                      <span className={classes.listBody}>Internship</span>
                    </ListItem>
                    <ListItem>
                      <span className={classes.listHead}>Expected Salary:</span>
                      <span className={classes.listBody}>15000</span>
                    </ListItem>
                    <ListItem>
                      <span className={classes.listHead}>Applied Job:</span>
                      <span className={classes.listBody}>Web development</span>
                    </ListItem>
                  </List>

                  <ToggleButtonGroup
                    className={classes.toogleButton}
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                  >
                    <ToggleButton
                      className={classes.acceptToggleBtn}
                      value="accept"
                      aria-label="left aligned"
                    >
                      Accept
                    </ToggleButton>
                    <ToggleButton
                      className={classes.rejectToggleBtn}
                      value="reject"
                      aria-label="centered"
                    >
                      Reject
                    </ToggleButton>
                    <ToggleButton
                      className={classes.blacklistToggleBtn}
                      value="blackList"
                      aria-label="right aligned"
                    >
                      BlackList
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
                <div className={classes.rightDiv}>
                  {/* <span className={classes.resumeTitle}>Resume:</span> */}
                  <embed className={classes.cv} src={file}></embed>
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
