import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import { ColorLensOutlined } from "@material-ui/icons";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import adimImage from "../../assets/images/admin2.png";

import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import ContactsIcon from "@material-ui/icons/Contacts";

const useStyle = makeStyles((theme) => ({
  DialogTitle: {
    display: "flex",
    // backgroundColor: "#4e73df",
    // color: "#fff",
    // height: "15vh",
    borderBottom: "solid 1px #e3e6f0",
  },

  message: {
    marginTop: "1rem",
    textAlign: "justify",
  },

  viewButton: {
    marginTop: "0.3rem",
    marginBottom: "0.3rem",
    height: "1.3rem",
    width: "1.3rem",
    color: "#04A8F6",
    "&:hover": {
      color: "#4e73df",
    },
  },
  adminimg: {
    width: "80px",
    marginRight: "1rem",
  },
  iconBodyDiv: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#fff",
    color: "red",
    border: "1px solid #4e73df",
  },
  dialogBody: {
    marginLeft: "1rem",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // console.log(props);
  return (
    <div>
      <Tooltip title="View" TransitionComponent={Zoom} arrow>
        <Link>
          <VisibilityIcon
            className={classes.viewButton}
            onClick={handleClickOpen}
          />
        </Link>
      </Tooltip>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className={classes.DialogTitle}>
          <span>{"Dipesh Shrestha "}</span>
        </DialogTitle>

        <DialogContent>
          <DialogContentText className={classes.iconBodyDiv}>
            <Avatar className={classes.avatar}>
              <ContactsIcon className={classes.icon} />
            </Avatar>
            <span className={classes.dialogBody}> dipeshxtha129@gmail.com</span>
          </DialogContentText>
          {/* <DialogContentText>Phone : 9816940668</DialogContentText>
          <DialogContentText>Address : Damak-11, Jhapa</DialogContentText> */}
          {/* <DialogContentText>Subject : Subject is here</DialogContentText> */}
          <DialogContentText className={classes.message}>
            Here is the message .Here is the message .Here is the message .Here
            is the message .Here is the message .Here is the message .Here is
            the message .Here is the message .Here is the message .Here is the
            message .Here is the message .
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
