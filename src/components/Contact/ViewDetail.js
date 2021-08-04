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
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
const useStyle = makeStyles((theme) => ({
  DialogTitle: {
    display: "flex",
    backgroundColor: "#F8F9FC",
    borderBottom: "solid 1px #e3e6f0",
    color: "#303f9f",
    fontWeight: "700",
  },
  phoneAddressDiv: {
    display: "flex",
  },
  message: {
    marginTop: "1rem",
    textAlign: "justify",
    border: "1px solid #e3e6f0",
    borderRadius: "5px",
    padding: "1rem",
    color: "black",
    backgroundColor: "#F8F9FC",
    width: "32rem",
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

  iconBodyDiv: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#fff",
    color: "#4e73df",
    border: "1px solid #4e73df",
    height: "2rem",
    width: "2rem",
  },
  icon: {
    fontSize: "1rem",
  },
  dialogBody: {
    marginLeft: "1rem",
    marginRight: ".8rem",
    color: "black",
  },
  doneButton: {
    color: "#fff",
    backgroundColor: "#2653d4",
    borderRadius: "20px",
    width: "5rem",
    height: "3.9vh",
    fontSize: "0.7rem",
    marginRight: "1.5rem",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      backgroundColor: "#2929a3",
    },
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
        className={classes.dialog}
      >
        <DialogTitle className={classes.DialogTitle}>
          <span>{"Dipesh Shrestha "}</span>
        </DialogTitle>

        <DialogContent>
          <div className={classes.phoneAddressDiv}>
            <DialogContentText
              className={classes.iconBodyDiv}
              style={{ minWidth: "50%" }}
            >
              <img src="https://img.icons8.com/color/40/000000/phone.png" />
              <span className={classes.dialogBody}>+977 9816940668</span>
            </DialogContentText>
            <DialogContentText className={classes.iconBodyDiv}>
              <img src="https://img.icons8.com/color/40/000000/order-delivered.png" />
              <span className={classes.dialogBody}> Damak-11, Jhapa</span>
            </DialogContentText>
          </div>
          <div className={classes.phoneAddressDiv}>
            <DialogContentText
              className={classes.iconBodyDiv}
              style={{ minWidth: "50%" }}
            >
              <img src="https://img.icons8.com/color/40/000000/gmail-new.png" />
              <span className={classes.dialogBody}>
                {" "}
                dipeshxtha129@gmail.com
              </span>
            </DialogContentText>
            <DialogContentText className={classes.iconBodyDiv}>
              <img src="https://img.icons8.com/color/40/000000/pay-date.png" />
              <span className={classes.dialogBody}> 1/12/2021</span>
            </DialogContentText>
          </div>
          {/* <DialogContentText>Phone : 9816940668</DialogContentText>
          <DialogContentText>Address : Damak-11, Jhapa</DialogContentText> */}
          {/* <DialogContentText>Subject : Subject is here</DialogContentText> */}
          <DialogContentText className={classes.message}>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form,
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            className={classes.doneButton}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
