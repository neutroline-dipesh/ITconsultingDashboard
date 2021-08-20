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
    width: "30%",
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
    fontSize: "1.1rem",
    marginLeft: "1.5rem",
    color: "#fffff",
    height: "3vh",
  },
  listHead: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    width: "30%",
  },
  listBody: {
    marginLeft: "1rem",
    fontSize: "0.9rem",
    width: "60%",
  },
  rightDiv: {
    borderRadius: "5px",
    width: "66.5%",
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
    fontSize: "1.1rem",
    marginLeft: "1.5rem",
    color: "#fffff",
    height: "3vh",
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
  icon: {
    width: "2rem",
  },
}));

const JobsDetail = () => {
  const classes = useStyle();

  const [job, setJob] = useState({
    city: null,
    country: null,
    department: null,
    description: null,
    jobId: null,
    jobSubtitle: null,
    jobType: null,
    jubTitle: null,
    postedDate: null,
    publishedBy: null,
    state: null,
    visiblity: null,
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
      .get("http://localhost:4000/allJobs/" + id)
      .then((res) => {
        console.log(res.data);
        setJob({
          city: res.data.data[0].city,
          country: res.data.data[0].country,
          department: res.data.data[0].department,
          description: res.data.data[0].description,
          jobId: res.data.data[0].jobId,
          jobSubtitle: res.data.data[0].jobSubtitle,
          jobType: res.data.data[0].jobType,
          jobTitle: res.data.data[0].jobTitle,
          postedDate: res.data.data[0].postedDate,
          publishedBy: res.data.data[0].publishedBy,
          state: res.data.data[0].state,
          visiblity: res.data.data[0].visiblity,
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
            <span className={classes.pageTabName}>Jobs / Jobs Detail</span>
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
                    <span className={classes.lefttableTitle}>Job Overview</span>
                  </div>
                  <div className={classes.leftTableContectDiv}>
                    <List className={classes.listMain}>
                      <ListItem>
                        <ListItemAvatar>
                          <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/id-verified.png"
                          />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Job Id:</span>
                        <span className={classes.listBody}>{job.jobId}</span>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/show-permit-card.png"
                          />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Job Title:</span>
                        <span className={classes.listBody}>{job.jobTitle}</span>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/worker-id-card.png"
                          />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Job SubTitle:</span>
                        <span className={classes.listBody}>
                          {job.jobSubtitle}
                        </span>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/org-unit.png"
                          />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Department:</span>
                        <span className={classes.listBody}>{job.jobTitle}</span>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/find-matching-job.png"
                          />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Job Type:</span>
                        <span className={classes.listBody}>{job.jobType}</span>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/address--v1.png"
                          />
                        </ListItemAvatar>
                        <span className={classes.listHead}>Address:</span>
                        <span className={classes.listBody}>
                          {job.country + " , " + job.state + " , " + job.city}
                        </span>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <img
                            className={classes.icon}
                            src="https://img.icons8.com/color/40/000000/calendar--v1.png"
                          />
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
                  {/* <span className={classes.resumeTitle}>Resume:</span> */}
                  {/* <embed className={classes.cv} src={file}></embed> */}
                  <div className={classes.rightTableTitleDiv}>
                    <span className={classes.rightTableTitle}>
                      Job Description
                    </span>
                  </div>
                  <div className={classes.rightTableContectDiv}>
                    <div
                      className={classes.description}
                      dangerouslySetInnerHTML={{
                        __html: job.description,
                      }}
                    ></div>
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

export default JobsDetail;
