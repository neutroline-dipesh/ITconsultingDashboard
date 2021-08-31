import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, InlineIcon } from "@iconify/react";
import fileEarmarkRichtext from "@iconify/icons-bi/file-earmark-richtext";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "101%",
  },
  maindiv: {
    paddingTop: "8vh",
  },
  PageTabDiv: {
    backgroundColor: "#F5F6FA",

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

  smallBoxMainDiv: {
    backgroundColor: "#f8f9fc",
    textAlign:"center",
    display: "flex",
    justifyContent: "space-evenly",
    width: "80.6vw",
     paddingLeft: "2rem",
    paddingBottom: "1.5rem",
   
  },
  totalJobs: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "13vh",
    width: "20%",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "24%",
      margin: "0.5rem",
    },
  },
  totcalContactJob: {
    borderLeft: "4px solid #4e73df",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
  },

  totcalContractingJob: {
    borderLeft: "4px solid red",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",

    // boxShadow: "0px 0px 30px 0px rgba(232, 144, 144,0.4)",
  },
  totalConstractingNumber: {
    // backgroundColor: "red",
    color: "#fffff",
    fontWeight: 500,
    fontSize: "1.5rem",
  },
  totalText: {
    // backgroundColor: "red",
    // marginTop: "1rem",
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "0.9rem",
  },
  totolIcon: {
    fontSize: "2rem",
    marginRight: "0.2rem",
  },
  totcalInernalJob: {
    borderLeft: "4px solid #1cc88a",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",

    // boxShadow: "0px 0px 30px 0px rgba(144, 232, 144,0.4)",
  },
  totalAllJob: {
    borderLeft: "4px solid #f6c23e",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",

    // boxShadow: "0px 0px 30px 0px rgba(226, 232, 144,0.4)",
  },
  messageNumber: {
    marginLeft: "-2.5rem",
    color: "#fff",
    // width: "0.6rem",
    fontSize: "0.6rem",
    borderRadius: "5px",
    padding: "1px 3px 1px 3px",
    marginTop: "-2.5rem",
    backgroundColor: "#E74A3B",
  },
  tableCalenderDivMain: {
    // border: "solid 1px",
    backgroundColor: "#f8f9fc",
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "space-evenly",
    // alignItems: "center",
    height: "61.8vh",
    // margin: "1.5rem",
  },
  tableContainer: {
    // margin: "1rem",
    // height: "50vh",
  },
  tableDiv: {
    backgroundColor: "#FFFFFF",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    width: "65.1%",
    height:"50vh",
    marginBottom: "1.5rem",
    // marginLeft: "0.5rem",
    // marginRight: "1rem",
    // maxHeight: "50vh",
  },
  tableTitleBottonDiv: {
    borderRadius: "5px 5px 1px 1px",

    display: "flex",
    justifyContent: "space-between",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    alignItems: "center",
    backgroundColor: "#e6e6ff",
    borderBottom: "solid 1px #e3e6f0",
  },
  tableTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
    marginLeft: "1.5rem",
    color: "#fffff",
  },
  tableHead: {
    fontSize: "1rem",
    // fontWeight: "00",
    whiteSpace: "nowrap",
  },
  tableDataDiv: {
    height: "37vh",
    // backgroundColor: "blue",
    paddingTop: "1rem",
    marginLeft: "1rem",
    marginRight: "0.1rem",
    overflowY: "scroll",
  },
  table: {
    // minWidth: 700,
  },
  viewAllButton: {
    textDecoration: "none",
    backgroundColor: "#2653d4",
    borderRadius: "20px",
    width: "7rem",
    height: "3.9vh",
    fontSize: "0.7rem",
    marginRight: "1.5rem",
    // boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    "&:hover": {},
  },
  calenderDiv: {
    marginRight: "1.rem",
  },

  calender: {
    borderRadius: "5px",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
  },

  jobs: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "0.2rem",
  },
}));
const Dashboard = () => {
  const classes = useStyle();
  // const [date, setDate] = useState(new Date());

  // const calenderOnChange = (date) => {
  //   setDate(date);
  // };
  // let d = new Date();
  // let day = d.getDate();
  // let month = d.toLocaleString("en-us", { month: "long" });
  const [recentApplicants, setRecentApplicants] = useState([]);
  const [notSeenInternalNumber, setNotSeenInternalNumber] = useState("");
  const [notSeenContractNumber, setNotSeenContractNumber] = useState("");
  const [notSeenExternalNumber, setNotSeenExternalNumber] = useState("");
  const [notSeenEmproyersNumber, setNotSeenEmproyersNumber] = useState("");
  const [totalInternalJobs, setTotalInternalJobs] = useState("");
  const [totalContractJobs, setTotalContractJobs] = useState("");
  const [totalExternalApplicant, setTotalExternalApplicant] = useState("");
  const [totalEmployers, setTotalEmployers] = useState("");

  useEffect(() => {
    fetchInternalNumber();
    fetchContractNumber();
    fetchExternalNumber();
    fetchEmployersNumber();
    totalInternalJobsFunction();
    totalContractJobsFunction();
    totalExternalFunction();
    totalEmployersFunction();
    fetchRecentApplicants();
    // console.log(notSeenEmproyersNumber);
  }, []);

  const fetchRecentApplicants = () => {
    axios.get("http://localhost:4000/allApplicant/").then((response) => {
      if (response.data.data) {
        setRecentApplicants(response.data.data);
      }
    });
  };
  const fetchInternalNumber = () => {
    axios
      .get("http://localhost:4000/allApplicant/internal/notSeen/")
      .then((response) => {
        if (response.data) {
          setNotSeenInternalNumber(response.data.data[0].notSeenMessage);
          // console.log(notSeenAllQueriesNumber);
        }
      });
  };
  const fetchContractNumber = () => {
    axios
      .get("http://localhost:4000/allApplicant/contract/notSeen/")
      .then((response) => {
        if (response.data) {
          setNotSeenContractNumber(response.data.data[0].notSeenMessage);
          // console.log(notSeenAllQueriesNumber);
        }
      });
  };
  const fetchExternalNumber = () => {
    axios
      .get("http://localhost:4000/externalApplicant/status/notSeen")
      .then((response) => {
        if (response.data) {
          setNotSeenExternalNumber(response.data.data[0].notSeenMessage);
          // console.log(notSeenAllQueriesNumber);
        }
      });
  };
  const fetchEmployersNumber = () => {
    axios
      .get("http://localhost:4000/requestTalent/status/notSeen")
      .then((response) => {
        if (response.data) {
          setNotSeenEmproyersNumber(response.data.data[0].notSeenMessage);
          // console.log(response.data.data[0].requesttalent);
        }
      });
  };
  const totalInternalJobsFunction = () => {
    axios
      .get("http://localhost:4000/allJobs/internal/totalJobs")
      .then((response) => {
        if (response.data) {
          setTotalInternalJobs(response.data.data[0].totalNumber);
          // console.log(response.data.data[0].requesttalent);
        }
      });
  };
  const totalContractJobsFunction = () => {
    axios
      .get("http://localhost:4000/allJobs/contract/totalJobs")
      .then((response) => {
        if (response.data) {
          setTotalContractJobs(response.data.data[0].totalNumber);
          // console.log(response.data.data[0].requesttalent);
        }
      });
  };
  const totalExternalFunction = () => {
    axios
      .get("http://localhost:4000/externalApplicant/totalExternal/totalNumber")
      .then((response) => {
        if (response.data) {
          setTotalExternalApplicant(response.data.data[0].totalNumber);
          // console.log(response.data.data[0].requesttalent);
        }
      });
  };
  const totalEmployersFunction = () => {
    axios
      .get("http://localhost:4000/requestTalent/totalEmployers/totalNumber")
      .then((response) => {
        if (response.data) {
          setTotalEmployers(response.data.data[0].totalNumber);
        }
      });
  };
  // console.log(notSeenEmproyersNumber);
  return (
    <>
      <Sidebar />

      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>Dashboard</span>
          </div>
          <div className={classes.smallBoxMainDiv}>
            <div className={classes.totalJobs + " " + classes.totcalContactJob}>
              <div className={classes.jobs} style={{ color: "#4e73df", textAlign:"center" }}>
                <span className={classes.totalConstractingNumber}>
                  {totalContractJobs}
                </span>
                <span
                  style={{ color: "#4e73df" }}
                  className={classes.totalText}
                >
                  Total Contract Jobs
                </span>
              </div>
              <Icon
                icon={fileEarmarkRichtext}
                style={{ color: "#4e73df" }}
                className={classes.totolIcon}
              />
              {notSeenContractNumber >= 1 ? (
                <span className={classes.messageNumber}>
                  {notSeenContractNumber}
                </span>
              ) : (
                " "
              )}
            </div>
            <div className={classes.totalJobs + " " + classes.totcalInernalJob}>
              <div className={classes.jobs}>
                <span
                  className={classes.totalConstractingNumber}
                  style={{ color: "#1cc88a", textAlign:"center" }}
                >
                  {totalInternalJobs}
                </span>
                <span
                  style={{ color: "#1cc88a" }}
                  className={classes.totalText}
                >
                  Total Internal Jobs
                </span>
              </div>
              <Icon
                icon={fileEarmarkRichtext}
                style={{ color: "#1cc88a" }}
                className={classes.totolIcon}
              />
              {notSeenInternalNumber >= 1 ? (
                <span className={classes.messageNumber}>
                  {notSeenInternalNumber}
                </span>
              ) : (
                " "
              )}
            </div>
            <div
              className={classes.totalJobs + " " + classes.totcalContractingJob}
            >
              <div className={classes.jobs}>
                <span
                  className={classes.totalConstractingNumber}
                  style={{ color: "red" , textAlign:"center"}}
                >
                  {totalExternalApplicant}
                </span>
                <span style={{ color: "red" }} className={classes.totalText}>
                  Total External
                </span>
              </div>
              <Icon
                icon={fileEarmarkRichtext}
                style={{ color: "red" }}
                className={classes.totolIcon}
              />
              {notSeenExternalNumber >= 1 ? (
                <span className={classes.messageNumber}>
                  {notSeenExternalNumber}
                </span>
              ) : (
                " "
              )}
            </div>
            <div className={classes.totalJobs + " " + classes.totalAllJob}>
              <div className={classes.jobs}>
                <span
                  className={classes.totalConstractingNumber}
                  style={{ color: "#f6c23e", textAlign:"center" }}
                >
                  {totalEmployers}
                </span>
                <span
                  style={{ color: "#f6c23e" }}
                  className={classes.totalText}
                >
                  Total Employers
                </span>
              </div>
              <Icon
                icon={fileEarmarkRichtext}
                style={{ color: "#f6c23e" }}
                className={classes.totolIcon}
              />
              {notSeenEmproyersNumber >= 1 ? (
                <span className={classes.messageNumber}>
                  {notSeenEmproyersNumber}
                </span>
              ) : (
                " "
              )}
            </div>
          </div>
          <div className={classes.tableContainer}>
            <div className={classes.tableCalenderDivMain}>
              <div className={classes.tableDiv}>
                <div className={classes.tableTitleBottonDiv}>
                  <span className={classes.tableTitle}>Recent Applicant</span>
                  <Link to="/applicants" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      className={classes.viewAllButton}
                    >
                      View All
                    </Button>
                  </Link>
                </div>
                <div className={classes.tableDataDiv}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.tableHead}>
                          Job Title
                        </TableCell>
                        <TableCell className={classes.tableHead} align="center">
                          Name
                        </TableCell>
                        <TableCell className={classes.tableHead} align="center">
                          Seniority Level
                        </TableCell>
                        <TableCell className={classes.tableHead} align="center">
                          Applid Date
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentApplicants.map((item, index) => (
                        <TableRow
                          style={
                            index % 2
                              ? { background: "#FFF" }
                              : { background: "#f5f9ff" }
                          }
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            {item.jobTitle}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            {item.firstName + " " + item.lastName}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            {item.senioritylevel}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            {item.postedDate}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className={classes.calenderDiv}>
                <CalendarComponent
                  className={classes.calender}
                ></CalendarComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
