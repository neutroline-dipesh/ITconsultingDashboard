import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import adimImage from "../../assets/images/admin2.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import ContactsIcon from "@material-ui/icons/Contacts";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { FaSmileWink } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { RiDashboard3Fill } from "react-icons/ri";
import Notification from "./Notification";
import { MdNotificationsActive } from "react-icons/md";
import SignOut from "./SignOut";
const useStyle = makeStyles((theme) => ({
  root: {
    float: "left",
    width: "16.5%",
    height: "100vh",

    // background: "linear-gradient(to bottom,  #4487A9 ,#B0C3BF )",
    backgroundColor: "#4e73df",
    textAlign: "center",
    // position: "fixed",
    //position: "absolute",
    // top: 0,
    // left: 0,
    // transform: "translate(0%, 0%)",
    // transition: "all 0.5s",
    // display: "flex",
    // justifyContent: "center",
    paddingTop: "0.4rem",
  },
  linktext: {
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
      color: "#fff",
    },
  },
  sidenav: {},
  smileIcon: {
    color: "#fff",
    fontSize: "2rem",
    marginTop: "-1rem",
  },
  companyName: {
    color: "#FFFFFF",
    fontSize: "25px",
    width: "100%",

    marginLeft: "1rem",
  },
  hr: {
    marginTop: "0.8rem",
  },

  NavbarMainDiv: {
    height: "8vh",
    width: "100%",
    float: "left",
    boxShadow: "0 8px 16px  rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  NavbarMianDivOnClick: {
    height: "8vh",
    width: "83.5%",
    float: "right",
    boxShadow: "0 8px 16px  rgba(0, 0, 0, 0.3)",
    display: "flex",

    alignItems: "center",

    justifyContent: "flex-end",
  },
  // hamburgurIcon: {
  //   marginLeft: "1rem",
  //   fontSize: "30px",
  // },
  notificationIcon: {
    color: "#858796",
    fontSize: "1.3rem",
    marginTop: "0.3rem",
  },
  notificationNumber: {
    marginRight: "1rem",
    color: "#fff",
    // width: "0.6rem",
    fontSize: "0.6rem",
    borderRadius: "5px",
    padding: "1px 3px 1px 3px",
    marginTop: "-1rem",
    backgroundColor: "#E74A3B",
  },

  messgaeIcon: {
    fontSize: "1.3rem",
    color: "#858796",
  },
  messageNumber: {
    marginRight: "1rem",
    color: "#fff",
    // width: "0.6rem",
    fontSize: "0.6rem",
    borderRadius: "5px",
    padding: "1px 3px 1px 3px",
    marginTop: "-1rem",
    backgroundColor: "#E74A3B",
  },
  adminName: {
    marginRight: "0.5rem",
    marginLeft: "1rem",
    color: "#858796",
    fontSize: "0.9rem",
  },
  verticalLine: {
    color: "#858796",
    fontSize: "2.5rem",
    fontWeight: "100",
  },
  adminimg: {
    width: "40px",
    marginRight: "2.5rem",
  },
  sidebarMenuItem: {
    width: "100%",
    maxWidth: 360,
    color: "#fff",
    marginTop: "2rem",

    // position: "fixed",
  },
  sidebarList: {
    textDecoration: "none",
    color: "#fff",
    zIndex: "1000",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#F6F6F6",
      color: "#161D6F",
      textDecoration: "none",
      boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.50)",
      transform: "scale(1.04)",
      transition: "ease 0.3s",
    },
  },
  nastedList: {
    // textAlign: "center",
    paddingLeft: "3.5rem",
    backgroundColor: "#2854d7",
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fff",
      color: "#161D6F",
    },
  },
  // nastedListtext: {
  //   backgroundColor: "#fff",
  //   color: "#161D6F",
  //   borderRadius: "5px",
  // },
  // sidebarIcon: {
  //   color: "#fff",
  // },
}));

const Sidebar = () => {
  const classes = useStyle();

  const [subnav, setSubnav] = useState([false, false, false, false]);
  const showSubnav = (index) => {
    const newsubnavState = [...subnav];
    newsubnavState[index] = !newsubnavState[index];
    setSubnav(newsubnavState);
  };

  //Show side bar (for animation )
  const [showNav, setShowNav] = useState(true);

  const [openJobs, setOpenJobs] = React.useState(false);
  const [openApplicant, setOpenApplicant] = React.useState(false);

  const handleClickApplicant = () => {
    setOpenApplicant(!openApplicant);
  };
  const handleClickJob = () => {
    setOpenJobs(!openJobs);
  };

  return (
    <>
      {/* {showNav && ( */}
      <div className={classes.root}>
        <FaSmileWink className={classes.smileIcon} />
        <span className={classes.companyName}>
          Neutrosys <hr className={classes.hr} />
        </span>

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.sidebarMenuItem}
        >
          <Link to="/" className={classes.linktext}>
            <ListItem button className={classes.sidebarList}>
              <RiDashboard3Fill
                style={{ fontSize: "1.56rem" }}
                className={classes.sidebarIcon}
              />

              <ListItemText
                style={{ marginLeft: "1.5rem" }}
                primary="Dashboard"
              />
            </ListItem>
          </Link>
          <ListItem
            button
            onClick={handleClickJob}
            className={classes.sidebarList}
          >
            <WorkIcon className={classes.sidebarIcon} />

            <ListItemText style={{ marginLeft: "1.5rem" }} primary="Jobs" />
            {openJobs ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openJobs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/alljobs" className={classes.linktext}>
                <ListItem
                  button
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemText
                    className={classes.nastedListtext}
                    primary="Job List"
                  />
                </ListItem>
              </Link>

              <Link to="/addjobs" className={classes.linktext}>
                <ListItem
                  button
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemText primary="Add Jobs" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={handleClickApplicant}
            className={classes.sidebarList}
          >
            <WorkIcon className={classes.sidebarIcon} />

            <ListItemText
              style={{ marginLeft: "1.5rem" }}
              primary="Applicant"
            />
            {openApplicant ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openApplicant} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/internal" className={classes.linktext}>
                <ListItem
                  button
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemText primary="Internal" />
                </ListItem>
              </Link>
              <Link to="/contracting" className={classes.linktext}>
                <ListItem
                  button
                  className={classes.nested}
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemText primary="Contract" />
                </ListItem>
              </Link>

              <Link to="/allApplicant" className={classes.linktext}>
                <ListItem
                  button
                  className={classes.nested}
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemText primary="All Applicant" />
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <Link to="/contact" className={classes.linktext}>
            <ListItem button className={classes.sidebarList}>
              <ContactsIcon className={classes.sidebarIcon} />

              <ListItemText
                style={{ marginLeft: "1.5rem" }}
                primary="All Query"
              />
            </ListItem>
          </Link>

          <Link to="/logout" className={classes.linktext}>
            <ListItem button className={classes.sidebarList}>
              <ExitToAppIcon className={classes.sidebarIcon} />

              <ListItemText
                style={{ marginLeft: "1.5rem" }}
                primary="Sign Out"
              />
            </ListItem>
          </Link>
        </List>
      </div>
      {/* )} */}
      <div
        className={
          showNav ? classes.NavbarMianDivOnClick : classes.NavbarMainDiv
        }
      >
        {/* <MenuIcon
          className={classes.hamburgurIcon}
          onClick={() => setShowNav(!showNav)}
        /> */}
        {/* <Tooltip title="Notification" TransitionComponent={Zoom} arrow>
          <Link>
            <MdNotificationsActive className={classes.notificationIcon} />
          </Link>
        </Tooltip>
        <span className={classes.notificationNumber}>20</span> */}
        <Notification />
        <Tooltip title="Message" TransitionComponent={Zoom} arrow>
          <Link to="/contact">
            <GrMail className={classes.messgaeIcon} />
          </Link>
        </Tooltip>
        <span className={classes.messageNumber}>20</span>

        <span className={classes.verticalLine}>l</span>
        <span className={classes.adminName}>Dipesh Shrestha</span>
        {/* <img className={classes.adminimg} src={adimImage} /> */}
        <SignOut />
      </div>
    </>
  );
};

export default Sidebar;
