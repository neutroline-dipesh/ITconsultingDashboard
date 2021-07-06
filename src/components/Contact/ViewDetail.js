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

const useStyle = makeStyles((theme) => ({
  DialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#4487A9",
    color: "#fff",
  },
  viewButton: {
    fontSize: "0.7rem",
    // borderRadius: "20px",
    backgroundColor: "#00264d",
    height: "3.9vh",
    "&:hover": {
      color: "#fff",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  //   console.log(typeof props.visible);

  // if (props.visible == true) {
  //   //   setOpen(true);
  //   // console.log("true");
  //   // console.clear();
  // } else {
  //   // console.log("false");
  //   //   setOpen(false);
  // }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   console.log(props.visible);

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Button
        className={classes.viewButton}
        variant="contained"
        color="primary"
        href="#contained-buttons"
        // onClick={handleClickOpenViewTable}
        onClick={handleClickOpen}
      >
        View
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          className={classes.DialogTitle}
          id="alert-dialog-slide-title"
        >
          <span>{"Queries"}</span>
          {/* <CloseIcon /> */}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Name : Dipesh Shrestha
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Email : dipeshxtha129@gmail.com
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Phone : 9816940668
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Address : Damak-11, Jhapa
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Subject : Subject is here
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Message : Here is the message .Here is the message .Here is the
            message .Here is the message .Here is the message .Here is the
            message .Here is the message .Here is the message .Here is the
            message .Here is the message .Here is the message .
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
