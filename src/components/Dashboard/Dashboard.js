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

import "react-calendar/dist/Calendar.css";
import { allApplicantData } from "../allApplicant/allApplicantData";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    // top: "30",
    // position: "absolute",
    // top: "8vh",
  },
  maindiv: {
    // backgroundColor: "red",
    paddingTop: "8vh",
  },
  smallBoxMainDiv: {
    // color: "red",
    backgroundColor: "#f8f9fc",
    display: "flex",
    justifyContent: "space-evenly",

    height: "25vh",
    // border: "solid 1px",
    paddingTop: "3rem",
    marginRight: "2rem",
    marginLeft: "3rem",
  },
  totalJobs: {
    backgroundColor: "#FFFFFF",
display:'flex',
alignItems:'center',
justifyContent:'space-between',
    height: "12vh",
    width: "20%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
  },
  totcalContactJob: {
    borderLeft: "4px solid #4e73df",
  },

  totcalContractingJob: {
   
    borderLeft: "4px solid red",
  },
  totalConstractingNumber: {
    // backgroundColor: "red",
    color: "#fffff",
    fontWeight: 500,
    fontSize: "1.5rem",
    
    top: "1rem",
  },
  totalText: {
    // backgroundColor: "red",
    // marginTop: "1rem",
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "0.9rem",
  
  },
  totolIcon: {
    fontSize: "2rem",
  marginRight:'0.5rem',
  },
  totcalInernalJob: {
   
    borderLeft: "4px solid #1cc88a",
  },
  totalAllJob: {
   
    borderLeft: "4px solid #f6c23e",
  },
  tableCalenderDivMain: {
    height: "67vh",
    // border: "solid 1px",
    backgroundColor: "#f8f9fc",
  },
  tableDiv: {
    backgroundColor: "#FFFFFF",
    float: "left",
    height: "60vh",
    marginLeft: "3rem",
    width: "50.5%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
  },
  tableTitleBottonDiv: {
    display: "flex",
    justifyContent: "space-between",

    paddingTop: "1rem",
    paddingBottom: "1rem",
    alignItems: "center",
    backgroundColor: "#F8F9FC",
  },
  tableTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
    marginLeft: "1.5rem",
    color: "#303f9f",
  },
  tableHead: {
    fontSize: "1rem",
    fontWeight: "600",
  },
  tableDataDiv: {
    height: "51vh",
    // backgroundColor: "blue",
    paddingTop: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  table: {
    minWidth: 650,
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
    // width: "50%",
    float: "left",
    // height: "60vh",
    width: "22%",
    // backgroundColor: "blue",
    marginLeft: "4rem",
    // marginTop: "-2rem",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
  },
  viewDate: {
    height: "15vh",
    backgroundColor: "#4e73df",
    // paddingTop: "0.5rem",
  },
  day: {
    fontSize: "4rem",
    fontWeight: "600",
    color: "#fff",
    marginLeft: "2rem",
  },
  month: {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#fff",
  },

  calender: {
    // height: "30vh",
    // width: "10%",
  },

  jobs: 
  {
    display:'flex',
    flexDirection:"column",
    paddingLeft:'0.5rem',
  }
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
          <div className={classes.smallBoxMainDiv}>
            <div className={classes.totalJobs + " " + classes.totcalContactJob}>
              <div className={classes.jobs}>
              <span className={classes.totalConstractingNumber}>1,400</span>
              <span style={{ color: "#4e73df" }} className={classes.totalText}>
                Total Contract Jobs
              </span>
              </div>
              <Icon
                icon={fileEarmarkRichtext}
                style={{ color: "#4e73df" }}
                className={classes.totolIcon}
              />
            </div>
            <div className={classes.totalJobs + " " + classes.totcalInernalJob}>
            <div className={classes.jobs}>
              <span className={classes.totalConstractingNumber}>1,400</span>
              <span style={{ color: "#1cc88a" }} className={classes.totalText}>
                Total Internal Jobs
              </span>
              </div>
              <Icon
                icon={fileEarmarkRichtext}
                style={{ color: "#1cc88a" }}
                className={classes.totolIcon}
              />
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
            </div>
            <div className={classes.totalJobs + " " + classes.totalAllJob}>
            <div className={classes.jobs}>
              <span className={classes.totalConstractingNumber}>1,400</span>
              <span style={{ color: "#f6c23e" }} className={classes.totalText}>
                Total Internal Jobs
              </span>
              </div>
              <Icon
                icon={fileEarmarkRichtext}
                style={{ color: "#f6c23e" }}
                className={classes.totolIcon}
              />
            </div>
          </div>
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
                        Applid Date
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allApplicantData.slice(0, 5).map((item) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {item.jobTitle}
                        </TableCell>
                        <TableCell align="center">
                          {item.firstName + " " + item.lastName}
                        </TableCell>
                        <TableCell align="center">{item.postedDate}</TableCell>
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
              <div className={classes.viewDate}>
                <span className={classes.day}>{day}</span>
                <span className={classes.month}>{month}</span>
              </div>
              <Calendar
                className={classes.calender}
                onChange={calenderOnChange}
                value={date}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
