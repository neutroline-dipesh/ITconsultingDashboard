import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const useStyle = makeStyles((theme) => ({
  DialogTitle: {
    display: "flex",
    backgroundColor: "#F8F9FC",
    borderBottom: "solid 1px #e3e6f0",
    color: "#303f9f",
    fontWeight: "700",
  },
  phoneAddressDiv: {
    display: "grid",
    gridTemplateCoumns: "1fr 1fr",
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

const Dialogcontainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewDetail(props) {
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
          <span>
            {props.firstName} {props.lastName}
          </span>
        </DialogTitle>

        <DialogContent>
          <Dialogcontainer>
            <DialogContentText className={classes.iconBodyDiv}>
              <img src="https://img.icons8.com/color/40/000000/company.png" />
              <span className={classes.dialogBody}>{props.companyName}</span>
            </DialogContentText>

            <DialogContentText className={classes.iconBodyDiv}>
              <img src="https://img.icons8.com/color/40/000000/order-delivered.png" />
              <span className={classes.dialogBody}>
                {props.country}, {props.city}
              </span>
            </DialogContentText>

            <DialogContentText className={classes.iconBodyDiv}>
              <img src="https://img.icons8.com/color/40/000000/phone.png" />
              <span className={classes.dialogBody}>{props.phone}</span>
            </DialogContentText>

            <DialogContentText className={classes.iconBodyDiv}>
              <img src="https://img.icons8.com/color/40/000000/gmail-new.png" />
              <span className={classes.dialogBody}>{props.email}</span>
            </DialogContentText>

            <DialogContentText className={classes.iconBodyDiv}>
              <img src="https://img.icons8.com/color/40/000000/pay-date.png" />
              <span className={classes.dialogBody}>{props.postedDate}</span>
            </DialogContentText>

            <DialogContentText className={classes.iconBodyDiv}>
              <img src="https://img.icons8.com/color/40/000000/computer.png" />
              <span className={classes.dialogBody}>{props.jobTitle}</span>
            </DialogContentText>

            <DialogContentText className={classes.iconBodyDiv}>
              <span>Status:</span>
              <span className={classes.dialogBody}>{props.status}</span>
            </DialogContentText>
          </Dialogcontainer>

          <DialogContentText className={classes.message}>
            {props.message}
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
