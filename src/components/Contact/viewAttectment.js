import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { AiOutlineFileText } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#4487A9",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  viewButton: {
    marginTop: "2rem",
    marginLeft: "1rem",
    fontSize: "0.9rem",
    // borderRadius: "20px",
    // backgroundColor: "#04A8F6",
    height: "5vh",
    "&:hover": {
      color: "#fff",
    },
  },
  cv: {
    // marginLeft: "1rem",
    width: "100%",
    height: "100vh",
  },
  attectmentBtn: {
    fontSize: "0.7rem",
  },
  attechmentIcon: {
    fontSize: "1rem",
    marginRight: "0.4rem",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewAttectment(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        size="small"
        className={classes.attectmentBtn}
        onClick={handleClickOpen}
      >
        <AiOutlineFileText className={classes.attechmentIcon} />
        Attechment
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Cover letter
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
        <iframe
          style={{
            width: "101.75%",
            height: "94vh",
            marginLeft: "-1.5rem",
            marginTop: "-1.5rem",
            marginBottom: "-2rem",
          }}
          src={
            "https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?id=" +
            props.attechmnet
          }
        ></iframe>
      </Dialog>
    </div>
  );
}
