import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import adimImage from "../../assets/images/admin.png";
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

const useStyle = makeStyles((theme) => ({
  root: {
    float: "left",
    width: "15.5%",
    height: "100vh",
    background: "linear-gradient(to bottom,  #4487A9 ,#B0C3BF )",
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
  linktext:{
    textDecoration: 'none',
    color:"#fff",
    "&:hover" :{
    textDecoration: 'none',
    color:"#fff",
    },
  },
  sidenav: {},
  companyName: {
    color: "#FFFFFF",
    fontSize: "30px",
    width: "100%",
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
    width: "84.5%",
    float: "left",
    boxShadow: "0 8px 16px  rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hamburgurIcon: {
    marginLeft: "1rem",
    fontSize: "30px",
  },
  adminimg: {
    width: "40px",
    marginRight: "1rem",
  },
  sidebarMenuItem: {
    width: "100%",
    maxWidth: 360,
    color: "#fff",
    marginTop: "2rem",
    // position: "fixed",
  },
  sidebarList: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#0F5373",
      textDecoration: "none",
    },
  },
  nastedList: {
    backgroundColor: "#80b3ff",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#0F5373",
    },
  },
  sidebarIcon: {
    color: "#fff",
  },
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
      {showNav && (
        <div className={classes.root}>
          <span className={classes.companyName}>Neutrosys</span>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.sidebarMenuItem}
          >
              <Link to="/dashboard" className={classes.linktext}>
            <ListItem
              button
              className={classes.sidebarList}
            >
              <ListItemIcon>
                <HomeIcon className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            </Link>
            <ListItem
              button
              onClick={handleClickJob}
              className={classes.sidebarList}
            >
              <ListItemIcon>
                <WorkIcon className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText primary="Jobs" />
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
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="All Jobs" />
                </ListItem>
                </Link>

                <Link to="/addjobs" className={classes.linktext}>
                <ListItem
                  button
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
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
              <ListItemIcon>
                <WorkIcon className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText primary="Applicant" />
              {openApplicant ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openApplicant} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to="/allApplicant" className={classes.linktext}>
                <ListItem
                  button
                  className={classes.nested}
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="All Applicant" />
                </ListItem>
                </Link>
                <Link to="/contracting" className={classes.linktext}>
                <ListItem
                  button
                  className={classes.nested}
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="Contract" />
                </ListItem>
                </Link>
                <Link to="/internal" className={classes.linktext}>
                <ListItem
                  button
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="Internal" />
                </ListItem>
                </Link>
              </List>
            </Collapse>

            <Link to="/contact" className={classes.linktext}>
            <ListItem
              button
              className={classes.sidebarList}
            >
              <ListItemIcon>
                <ContactsIcon className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText primary="All Query" />
            </ListItem>
            </Link>
            
            <Link to="/logout" className={classes.linktext}>
            <ListItem
              button
              className={classes.sidebarList}
            >
              <ListItemIcon>
                <ExitToAppIcon className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
            </Link>
          </List>
        </div>
      )}
      <div
        className={
          showNav ? classes.NavbarMianDivOnClick : classes.NavbarMainDiv
        }
      >
        <MenuIcon
          className={classes.hamburgurIcon}
          onClick={() => setShowNav(!showNav)}
        />
        <img className={classes.adminimg} src={adimImage} />
      </div>
    </>
  );
};

export default Sidebar;
