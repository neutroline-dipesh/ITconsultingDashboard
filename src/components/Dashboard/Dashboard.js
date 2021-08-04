import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, InlineIcon } from "@iconify/react";
import fileEarmarkRichtext from "@iconify/icons-bi/file-earmark-richtext";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Calendar from "react-calendar";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

import "react-calendar/dist/Calendar.css";
import { allApplicantData } from "../allApplicant/allApplicantData";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const useStyle = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    width: "100%",
    // top: "30",
    // position: "absolute",
    // top: "8vh",
  },
  maindiv: {
    // backgroundColor: "red",
    paddingTop: "8vh",
  },
  PageTabDiv: {
    backgroundColor: "#f8f9fc",

    height: "10vh",
    // border: "solid 1px",
    display: "flex",
    justifyContent: "space-between",

    alignItems: "center",
    // paddingTop: "0.5rem",
  },

  pageTabName: {
    fontSize: "1.75rem",
    fontWeight: "700",
    marginLeft: "2.5rem",
    color: "#3F51B5",
  },

  smallBoxMainDiv: {
    // color: "red",
    backgroundColor: "#f8f9fc",
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "space-evenly",
    width: "83.5%",
    // paddingLeft: "1rem",
    // paddingRight: "1rem",
    // paddingTop: "1.5rem",
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
  },
  totcalContactJob: {
    borderLeft: "4px solid #4e73df",
    boxShadow: "0px 0px 30px 0px rgba(144, 178, 232,0.4)",

  },

  totcalContractingJob: {
    borderLeft: "4px solid red",
    boxShadow: "0px 0px 30px 0px rgba(232, 144, 144,0.4)",

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
    boxShadow: "0px 0px 30px 0px rgba(144, 232, 144,0.4)",

  },
  totalAllJob: {
    borderLeft: "4px solid #f6c23e",
    boxShadow: "0px 0px 30px 0px rgba(226, 232, 144,0.4)",

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
    width: "68%",
    marginBottom: "1.5rem",
    marginLeft: "0.5rem",
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
    backgroundColor: "#F8F9FC",
    borderBottom: "solid 1px #e3e6f0",
  },
  tableTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
    marginLeft: "1.5rem",
    color: "#303f9f",
  },
  tableHead: {
    fontSize: "1rem",
    // fontWeight: "00",
    whiteSpace: "nowrap",
  },
  tableDataDiv: {
    height: "47vh",
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
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      // backgroundColor: "#98DED9",
    },
  },
  calenderDiv: {
    // backgroundColor: "red",
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
  const [date, setDate] = useState(new Date());

  const calenderOnChange = (date) => {
    setDate(date);
  };
  let d = new Date();
  let day = d.getDate();
  let month = d.toLocaleString("en-us", { month: "long" });

  //for table
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
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
              <div className={classes.jobs}    style={{ color: "#4e73df" }}
>
                <span className={classes.totalConstractingNumber}>1,400</span>
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
              <span className={classes.messageNumber}>20</span>
            </div>
            <div className={classes.totalJobs + " " + classes.totcalInernalJob}>
              <div className={classes.jobs}>
                <span className={classes.totalConstractingNumber}>1,200</span>
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
              <span className={classes.messageNumber}>20</span>
            </div>
            <div
              className={classes.totalJobs + " " + classes.totcalContractingJob}
            >
              <div className={classes.jobs}>
                <span className={classes.totalConstractingNumber}>1,400</span>
                <span style={{ color: "red" }} className={classes.totalText}>
                  Total Client Query
                </span>
              </div>
              <Icon
                icon={fileEarmarkRichtext}
                style={{ color: "red" }}
                className={classes.totolIcon}
              />
              <span className={classes.messageNumber}>20</span>
            </div>
            <div className={classes.totalJobs + " " + classes.totalAllJob}>
              <div className={classes.jobs}>
                <span className={classes.totalConstractingNumber}>1,400</span>
                <span
                  style={{ color: "#f6c23e" }}
                  className={classes.totalText}
                >
                  Total Internal Jobs
                </span>
              </div>
              <Icon
                icon={fileEarmarkRichtext}
                style={{ color: "#f6c23e" }}
                className={classes.totolIcon}
              />
              <span className={classes.messageNumber}>20</span>
            </div>
          </div>
          <div className={classes.tableContainer}>
            <div className={classes.tableCalenderDivMain}>
              <div className={classes.tableDiv}>
                <div className={classes.tableTitleBottonDiv}>
                  <span className={classes.tableTitle}>Recent Applicant</span>
                  <Link to="/allApplicant">
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
                      {allApplicantData.map((item) => (
                        <TableRow>
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
                          {/* <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell> */}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className={classes.calenderDiv}>
                {/* <div className={classes.viewDate}>
                  <span className={classes.day}>{day}</span>
                  <span className={classes.month}>{month}</span>
                </div> */}
                {/* <Calendar
                  className={classes.calender}
                  onChange={calenderOnChange}
                  value={date}
                /> */}
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
