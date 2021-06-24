import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { SidebarData } from "./sidebarData";
import MenuIcon from "@material-ui/icons/Menu";
import adimImage from "../../assets/images/admin.png";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import ContactsIcon from "@material-ui/icons/Contacts";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyle = makeStyles((theme) => ({
  root: {
    float: "left",
    width: "15.5%",
    height: "100vh",
    background: "linear-gradient(to bottom,  #4487A9 ,#B0C3BF )",
    textAlign: "center",
    //position: "absolute",
    // top: 0,
    // left: 0,
    // transform: "translate(0%, 0%)",
    // transition: "all 0.5s",
    // display: "flex",
    // justifyContent: "center",
    paddingTop: "0.4rem",
  },
  sidenav: {
    // left: 0,
  },
  companyName: {
    color: "#FFFFFF",
    // backgroundColor: "red",
    fontSize: "30px",
    width: "100%",

    // textAlign: "center",
    // marginTop: "8rem",
  },
  // sidebarMenuUl: {
  //   marginTop: "-17rem",
  //   paddingInlineStart: "0 !important",
  //   // marginLeft: "1rem",
  // },
  // sidebarListAll: {
  //   width: "100%",
  //   listStyleType: "none",
  //   marginLeft: "10px",
  //   paddingLeft: "10px",
  //   color: "white",
  //   display: "block",
  //   height: "5vh",
  //   fontSize: "20px",
  //   marginBottom: "0.8rem",

  //   "&:hover": {
  //     cursor: "pointer",
  //     backgroundColor: "#0F5373",
  //     borderRadius: "5px",
  //   },
  // },
  // SidebarIcon: {
  //   // marginLeft: "-2rem",
  //   // marginRight: "0.9rem",
  //   paddingRight: "10px",
  //   marginTop: "3px",
  //   float: "left",
  // },
  // SidebarMenu: {
  //   width: "100%",
  //   // marginRight: "3rem",
  //   // backgroundColor: "red",
  // },
  // downUpArrow: {
  //   // marginLeft: "2rem",
  //   float: "right",
  // },
  // submenuUl: {
  //   width: "100%",
  //   // backgroundColor: "red",
  //   height: "10vh",
  // },
  // submenuItem: {
  //   display: "block",
  //   backgroundColor: "#0F5373",
  // },
  NavbarMainDiv: {
    height: "8vh",
    width: "100%",
    float: "left",
    boxShadow: "0 8px 16px  rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    // backgroundColor: "green",
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
    // "&$selected:hover": {
    //   backgroundColor: "purple",
    // },
  },
  sidebarList: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#0F5373",
    },
  },
  nastedList: {
    backgroundColor: "#80b3ff",
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
            <ListItem button className={classes.sidebarList}>
              <ListItemIcon>
                <HomeIcon className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
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
                <ListItem
                  button
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="All Jobs" />
                </ListItem>
                <ListItem
                  button
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="Add Jobs" />
                </ListItem>
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
                <ListItem
                  button
                  className={classes.nested}
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="Contracting" />
                </ListItem>
                <ListItem
                  button
                  className={classes.sidebarList}
                  className={classes.nastedList}
                >
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="Internal" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button className={classes.sidebarList}>
              <ListItemIcon>
                <ContactsIcon className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button className={classes.sidebarList}>
              <ListItemIcon>
                <ExitToAppIcon className={classes.sidebarIcon} />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
          {/* <div>
            <ul className={classes.sidebarMenuUl}>
              {SidebarData.map((item, key) => {
                return (
                  <li
                    className={classes.sidebarListAll}
                    key={key}
                    id="active"
                    onClick={() => showSubnav(key)}
                  >
                    <i className={classes.SidebarIcon}> {item.icon}</i>

                    {item.title}

                    <i className={classes.downUpArrow}>
                      {subnav[key] ? item.iconeOpen : item.iconClosed}
                    </i>
                    <ul className={classes.submenuUl}>
                      {subnav[key] &&
                        item.subNav.map((item, index) => {
                          return (
                            <li className={classes.submenuItem}>
                              <a>{item.title}</a>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div> */}
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
