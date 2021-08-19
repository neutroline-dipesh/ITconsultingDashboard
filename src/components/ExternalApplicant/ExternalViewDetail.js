import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
  maindiv: {
    paddingTop: "8vh",
  },
  PageTabDiv: {
    backgroundColor: "#f8f9fc",

    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTabName: {
    fontSize: "1.75rem",
    fontWeight: "700",
    marginLeft: "2.5rem",
    color: "#3F51B5",
  },
  jobListButton: {
    textDecoration: "none",
    backgroundColor: "#2653d4",
    borderRadius: "20px",
    width: "7rem",
    height: "3.9vh",
    fontSize: "0.7rem",
    marginRight: "1.5rem",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    "&:hover": {},
  },
  jobListIcon: {
    fontSize: "1rem",
    marginRight: "1rem",
  },
  backIcon: {
    fontSize: "1.9rem",
    marginRight: "1rem",
  },
  MainContentDiv: {
    height: "82vh",

    backgroundColor: "#f8f9fc",
  },

  ContentDiv: {
    float: "left",
    marginLeft: "1rem",
    width: "82%",
    borderRadius: "5px",
  },
  ContentDateDiv: {
    maxHeight: "80vh",
    display: "flex",
  },
  leftDiv: {
    borderRadius: "5px",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
    backgroundColor: "#ffffff",
    boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.25)",
  },
  listMain: {},
  lefttableTitleDiv: {
    borderRadius: "5px 5px 1px 1px",
    display: "flex",
    alignItems: "center",

    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: "#e6e6ff",

    borderBottom: "solid 1px #e3e6f0",
  },
  lefttableTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
    marginLeft: "1.5rem",
    color: "#fffff",
  },
  listHead: {
    fontSize: "0.875rem",
    fontWeight: "bold",
    width: "30%",
  },
  listBody: {
    marginLeft: "1rem",
    width: "60%",
  },
  rightDiv: {
    borderRadius: "5px",
    width: "65%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
    marginBottom: "1rem",
    marginRight: "0.5rem",
    backgroundColor: "#ffffff",
    boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.25)",
  },
  rightTableTitleDiv: {
    borderRadius: "5px 5px 1px 1px",
    display: "flex",
    alignItems: "center",

    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: "#e6e6ff",

    borderBottom: "solid 1px #e3e6f0",
  },
  rightTableTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
    marginLeft: "1.5rem",
    color: "#fffff",
  },
  leftTableContectDiv: {
    overflow: "scroll",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  rightTableContectDiv: {
    overflow: "scroll",
    overflowX: "hidden",
  },
  description: {
    padding: "1rem",
  },
  cv: {
    width: "100%",
    height: "100vh",
  }
}));

const ExternalViewDetail = () => {
  const classes = useStyle();

  const [job, setJob] = useState({
    fullName: null,
    gmail: null,
    phone: null,
    message: null,
    resume: null,
    coverletter: null,
    jobType: null,
    status: null,
    postedDate: null,
    loading: false,
    error: false,
  });
  const { id } = useParams();
  useEffect(() => {
    getJobDetails();
    console.log(job);
  }, []);

  const getJobDetails = () => {
    axios
      .get("http://localhost:4000/externalApplicant/" + id)
      .then((res) => {
        console.log(res.data);
        setJob({
          fullName: res.data.data[0].fullName,
          gmail: res.data.data[0].gmail,
          phone: res.data.data[0].phone,
          message: res.data.data[0].message,
          resume: res.data.data[0].resume,
          coverletter: res.data.data[0].coverletter,
          jobType: res.data.data[0].jobType,
          status: res.data.data[0].status,
          postedDate: res.data.data[0].postedDate,
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Sidebar />
      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>
              External / Applicant Detail
            </span>
            <Tooltip title="Job List" TransitionComponent={Zoom} arrow>
              <Link to="/alljobs">
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.jobListButton}
                >
                  <IoMdArrowBack className={classes.jobListIcon} /> Job List
                </Button>
              </Link>
            </Tooltip>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <div className={classes.leftDiv}>
                  <div className={classes.lefttableTitleDiv}>
                    <span className={classes.lefttableTitle}>Personal Information</span>
                  </div>
                  <div className={classes.leftTableContectDiv}>
                    <List className={classes.listMain}>
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/40/000000/id-verified.png" />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Full Name:</span>
                        <span className={classes.listBody}>{job.fullName}</span>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/40/000000/gmail" />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Gmail:</span>
                        <span className={classes.listBody}>{job.gmail}</span>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/40/000000/phone" />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Phone:</span>
                        <span className={classes.listBody}>
                          {job.phone}
                        </span>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/40/000000/chat" />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Message:</span>
                        <span className={classes.listBody}>{job.message}</span>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/40/000000/find-matching-job.png" />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Job Type:</span>
                        <span className={classes.listBody}>{job.jobType}</span>
                      </ListItem>
                      {/* <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/40/000000/address--v1.png" />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Address:</span>
                        <span className={classes.listBody}>
                          {job.country + " , " + job.state + " , " + job.city}
                        </span>
                      </ListItem> */}
                      <ListItem>
                        <ListItemAvatar>
                          <img src="https://img.icons8.com/color/40/000000/calendar--v1.png" />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Publish Date:</span>
                        <span className={classes.listBody}>
                          {job.postedDate}
                        </span>
                      </ListItem>
                    </List>
                  </div>
                </div>
                <div className={classes.rightDiv}>
                  {/* <span className={classes.resumeTitle}>Resume:</span>
                  <embed className={classes.cv} src={job.resume}></embed> */}
                  <div className={classes.rightTableTitleDiv}>
                    <span className={classes.rightTableTitle}>
                      Resume
                    </span>
                  </div>
                  <div className={classes.rightTableContectDiv}>
                  <embed className={classes.cv} src={job.resume}></embed>
                    {/* <div
                      className={classes.description}
                      dangerouslySetInnerHTML={{
                        __html: job.description,
                      }}
                    ></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExternalViewDetail;
