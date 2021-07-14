import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ContactsIcon from "@material-ui/icons/Contacts";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
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
    borderRadius: "10px",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    // boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.25)",
  },
  listMain: {
    marginTop: "1rem",
  },

  listHead: {
    fontSize: "1rem",
    fontWeight: "bold",
    width: "30%",
    height: "8vh",
    marginLeft: "1rem",

    // backgroundColor: "red",
  },
  listBody: {
    marginLeft: "1rem",
    height: "8vh",
    width: "60%",
    // backgroundColor: "red",
    // lineHeight: "1",
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
  cv: {
    marginLeft: "1rem",
    width: "95%",
    height: "80vh",
  },
}));

const JobsDetail = () => {
  const classes = useStyle();

  return (
    <>
      <Sidebar />
      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>Jobs Detail</span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <div className={classes.leftDiv}>
                  <List className={classes.listMain}>
                    <ListItem>
                      <span className={classes.listHead}>Job Id:</span>
                      <span className={classes.listBody}>React Developer</span>
                    </ListItem>
                    <ListItem>
                      <span className={classes.listHead}>Job Title:</span>
                      <span className={classes.listBody}>React Developer</span>
                    </ListItem>
                    <ListItem>
                      <span className={classes.listHead}>Job SubTitle:</span>
                      <span className={classes.listBody}>
                        Subtitle is here Subtitle is here Subtitle is here
                        Subtitle is here
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className={classes.listHead}>Department:</span>
                      <span className={classes.listBody}>Technology</span>
                    </ListItem>
                    <ListItem>
                      <span className={classes.listHead}>Job Type:</span>
                      <span className={classes.listBody}>Full Time</span>
                    </ListItem>
                    <ListItem>
                      <span className={classes.listHead}>Address:</span>
                      <span className={classes.listBody}>
                        Nepal ,Provience 1, Damak-6
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className={classes.listHead}>Publish Date:</span>
                      <span className={classes.listBody}>7/7/2021</span>
                    </ListItem>
                  </List>
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

export default JobsDetail;
