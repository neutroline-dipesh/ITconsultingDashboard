import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import file from "../../assets/files/cv.pdf";

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
    backgroundColor: "#04A8F6",
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
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
        className={classes.viewButton}
        variant="contained"
        color="primary"
        href="#contained-buttons"
        // onClick={handleClickOpenViewTable}
        onClick={handleClickOpen}
      >
        Resume
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
              Resume
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
        <embed className={classes.cv} src={file}></embed>
      </Dialog>
    </div>
  );
}
