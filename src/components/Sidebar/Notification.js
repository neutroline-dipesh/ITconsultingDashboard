import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { MdNotificationsActive } from "react-icons/md";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import ContactsIcon from "@material-ui/icons/Contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menu: {
    marginTop: "-0.45rem",
  },
  manuItem: {
    borderBottom: "1px solid #858796",
    // marginTop: "-1rem",
  },
  notificationButton: {
    backgroundColor: "transparent",
  },
  notificationIcon: {
    color: "#4E73DF",
    fontSize: "1.3rem",
    marginTop: "0.3rem",
  },
  notificationNumber: {
    // marginRight: "1rem",
    color: "#fff",
    // width: "0.6rem",
    fontSize: "0.6rem",
    borderRadius: "5px",
    padding: "1px 1.5px 0.5px 1px",
    marginTop: "-1rem",
    backgroundColor: "#E74A3B",
  },
  notificationTitle: {
    backgroundColor: "#4e73df",
    borderRadius: "4px 4px 0px 0px",
    // border: "2px solid #4e73df",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    paddingLeft: "1rem",
    fontSize: "0.65rem",
    fontWeight: "700",
  },
  avatar: {
    backgroundColor: "#b3d9ff",
    width: "1.7rem",
    height: "1.7rem",
  },
  icon: {
    fontSize: "1rem",
    color: "#4e73df",
  },
  notificationBodydiv: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "1rem",
  },
  notificationBodyDate: {
    fontSize: "0.75rem",
    color: "#858796",
  },
  notificationBody: {
    fontSize: "0.8rem",
    fontWeight: "500",
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          disableRipple="true"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ backgroundColor: "transparent" }}
          className={classes.notificationButton}
        >
          <MdNotificationsActive className={classes.notificationIcon} />
          <span className={classes.notificationNumber}>20</span>
        </Button>

        {/* <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Toggle Menu Grow
        </Button> */}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          style={{ width: "20%", zIndex: "500" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <div className={classes.notificationTitle}>ALERTS CENTER</div>

                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    className={classes.menu}
                  >
                    <MenuItem className={classes.manuItem}>
                      <Avatar className={classes.avatar}>
                        <ContactsIcon className={classes.icon} />
                      </Avatar>
                      <div className={classes.notificationBodydiv}>
                        <span className={classes.notificationBodyDate}>
                          December 12 , 2021
                        </span>
                        <span className={classes.notificationBody}>
                          {" "}
                          Here is the small notification !{" "}
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem className={classes.manuItem}>
                      <Avatar className={classes.avatar}>
                        <ContactsIcon className={classes.icon} />
                      </Avatar>
                      <div className={classes.notificationBodydiv}>
                        <span className={classes.notificationBodyDate}>
                          December 12 , 2021
                        </span>
                        <span className={classes.notificationBody}>
                          {" "}
                          Here is the small notification !{" "}
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem className={classes.manuItem}>
                      <Avatar className={classes.avatar}>
                        <ContactsIcon className={classes.icon} />
                      </Avatar>
                      <div className={classes.notificationBodydiv}>
                        <span className={classes.notificationBodyDate}>
                          December 12 , 2021
                        </span>
                        <span className={classes.notificationBody}>
                          {" "}
                          Here is the small notification !{" "}
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <Avatar className={classes.avatar}>
                        <ContactsIcon className={classes.icon} />
                      </Avatar>
                      <div className={classes.notificationBodydiv}>
                        <span className={classes.notificationBodyDate}>
                          December 12 , 2021
                        </span>
                        <span className={classes.notificationBody}>
                          {" "}
                          Here is the small notification !{" "}
                        </span>
                      </div>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
