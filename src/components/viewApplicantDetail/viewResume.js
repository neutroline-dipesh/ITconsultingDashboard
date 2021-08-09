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
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import res from "../../assets/files/test.docx";
import FileViewer from "react-file-viewer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#4487A9",
    // height: "8vh",
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // var str = "examp.le";
  // const str = props.resume;
  // console.log("check:" + str);
  // const slug = str.split(".").pop();
  // console.log(slug);

  const docs = [
    { uri: props.resume },
    // { uri: require("../../assets/files/test.docx") }, // Local File
  ];
  console.log("fileType:" + props.fileType);
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
        {/* <FileViewer fileType={props.fileType} filePath={props.resume} /> */}
        {/* <DocViewer
          className={classes.cv}
          pluginRenderers={DocViewerRenderers}
          documents={docs}
        /> */}
        {/* <iframe
          src="https://view.officeapps.live.com/op/embed.aspx?src=http://remote.url.tld/path/to/document.doc"
          width="80%"
          height="565px"
          frameborder="0"
        >
          {" "}
        </iframe> */}

        {/* <iframe
          src={"https://view.officeapps.live.com/op/embed.aspx?src=" + res}
          width="80%"
          height="565px"
          frameborder="0"
        >
          {" "}
        </iframe> */}

        <iframe
          src={
            "https://docs.google.com/gview?url=" + props.cv + "&embedded=true"
          }
          className={classes.cv}
        ></iframe>
      </Dialog>
    </div>
  );
}
