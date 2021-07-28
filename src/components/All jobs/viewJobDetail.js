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

import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import { CgArrowLeftR } from "react-icons/cg";

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
    fontWeight: "400",
    marginLeft: "1rem",
    color: "#fffff",
  },
  backIcon: {
    // color: "black !important",

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
    width: "33%",
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    marginBottom: "1rem",
    backgroundColor: "#ffffff",
    boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.25)",
  },
  listMain: {
    marginTop: "1rem",
  },
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
  listHead: {
    fontSize: "1rem",
    fontWeight: "bold",
    // color: "#858796",
    width: "30%",
    marginLeft: "1rem",
  },
  listBody: {
    // color: "#858796",
    marginLeft: "1rem",
    width: "60%",
  },
  rightDiv: {
    borderRadius: "5px",
    width: "65%",
    // paddingTop: "1rem",
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
    marginTop: "1rem",
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
    backgroundColor: "#F8F9FC",

    borderBottom: "solid 1px #e3e6f0",
  },
  rightTableTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
    marginLeft: "1.5rem",
    color: "#303f9f",
  },
  rightTableContectDiv: {
    overflow: "scroll",
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
            <span className={classes.pageTabName}>Jobs / Jobs Detail</span>
            <Tooltip title="Job List" TransitionComponent={Zoom} arrow>
              <Link to="/alljobs">
                <CgArrowLeftR className={classes.backIcon} />
              </Link>
            </Tooltip>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <div className={classes.leftDiv}>
                  <div className={classes.lefttableTitleDiv}>
                    <span className={classes.lefttableTitle}>Job Overview</span>
                  </div>
                  <div className={classes.rightTableContectDiv}>
                    <List className={classes.listMain}>
                      <ListItem>
                        <span className={classes.listHead}>Job Id:</span>
                        <span className={classes.listBody}>
                          React Developer
                        </span>
                      </ListItem>
                      <ListItem>
                        <span className={classes.listHead}>Job Title:</span>
                        <span className={classes.listBody}>
                          React Developer
                        </span>
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
                </div>
                <div className={classes.rightDiv}>
                  {/* <span className={classes.resumeTitle}>Resume:</span> */}
                  {/* <embed className={classes.cv} src={file}></embed> */}
                  <div className={classes.rightTableTitleDiv}>
                    <span className={classes.rightTableTitle}>
                      Job Description
                    </span>
                  </div>
                  <div className={classes.rightTableContectDiv}>
                    <List className={classes.listMain}>
                      <ListItem>
                        <span className={classes.listHead}>Job Id:</span>
                        <span className={classes.listBody}>
                          React Developer
                        </span>
                      </ListItem>
                      <ListItem>
                        <span className={classes.listHead}>Job Title:</span>
                        <span className={classes.listBody}>
                          React Developer
                        </span>
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
                      <ListItem>
                        <span className={classes.listHead}>Publish Date:</span>
                        <span className={classes.listBody}>7/7/2021</span>
                      </ListItem>
                      <ListItem>
                        <span className={classes.listHead}>Publish Date:</span>
                        <span className={classes.listBody}>7/7/2021</span>
                      </ListItem>
                      <ListItem>
                        <span className={classes.listHead}>Publish Date:</span>
                        <span className={classes.listBody}>7/7/2021</span>
                      </ListItem>
                      <ListItem>
                        <span className={classes.listHead}>Publish Date:</span>
                        <span className={classes.listBody}>7/7/2021</span>
                      </ListItem>
                      <ListItem>
                        <span className={classes.listHead}>Publish Date:</span>
                        <span className={classes.listBody}>7/7/2021</span>
                      </ListItem>
                    </List>
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

export default JobsDetail;
