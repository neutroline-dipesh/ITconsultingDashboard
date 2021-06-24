import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";

import ContactsIcon from "@material-ui/icons/Contacts";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <HomeIcon />,
    links: "/menu",
  },
  {
    id: 2,
    title: "Jobs",
    icon: <WorkIcon />,
    iconClosed: <ExpandMoreIcon />,
    iconeOpen: <ExpandLessIcon />,

    subNav: [
      {
        title: "All Jobs",
        links: "/allJobs",
      },
      {
        title: "Add Jobs",
        links: "/addJobs",
      },
    ],
  },
  {
    id: 3,
    title: "Applicant",
    icon: <WorkIcon />,
    iconClosed: <ExpandMoreIcon />,
    iconeOpen: <ExpandLessIcon />,

    subNav: [
      {
        title: "Contracting",
        links: "/allJobs",
      },
      {
        title: "Internal",
        links: "/addJobs",
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    icon: <ContactsIcon />,
    links: "/time",
  },
  {
    id: 5,
    title: "Sign Out",
    icon: <ExitToAppIcon />,
    links: "/notice",
  },
];
