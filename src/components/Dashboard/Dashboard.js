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
    backgroundColor: "#C4C4C4",
    // border: "solid 1px",

    height: "25vh",
    // border: "solid 1px",
    paddingTop: "3rem",
  },
  totalJobs: {
    backgroundColor: "#FFFFFF",
    float: "left",
    height: "12vh",
    width: "15%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    marginLeft: "1rem",
  },
  totcalContractingJob: {
    marginLeft: "2.4rem",
  },
  totalConstractingNumber: {
    // backgroundColor: "red",
    color: "#fffff",
    fontWeight: 500,
    fontSize: "1.5rem",
    marginLeft: "1rem",
    position: "relative",
    top: "1rem",
  },
  totalText: {
    // backgroundColor: "red",
    // marginTop: "1rem",
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "0.9rem",
    position: "relative",
    top: "2.4rem",
    left: "-3.5rem",
  },
  totolIcon: {
    fontSize: "2rem",
    marginLeft: "10rem",
    marginTop: "-1rem",
  },
  totcalInernalJob: {
    marginLeft: "2.4rem",
  },
  tableCalenderDivMain: {
    height: "67vh",
    // border: "solid 1px",
    backgroundColor: "#C4C4C4",
  },
  tableDiv: {
    backgroundColor: "#FFFFFF",
    float: "left",
    height: "60vh",
    marginLeft: "1rem",
    width: "50.5%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
  },
  tableTitleBottonDiv: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "1.5rem",
  },
  tableTitle: {
    fontWeight: "600",
    fontSize: "1.5rem",
    marginLeft: "1.5rem",
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
    backgroundColor: "#04A8F6",
    borderRadius: "20px",
    width: "13%",
    height: "3.9vh",
    fontSize: "0.7rem",
    marginRight: "1.5rem",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
  },
  calenderDiv: {
    // width: "50%",
    float: "left",
    // height: "60vh",
    width: "22%",
    // backgroundColor: "blue",
    marginLeft: "4rem",
    marginTop: "-2rem",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
  },
  viewDate: {
    height: "19vh",
    backgroundColor: "#E76B6B",
    paddingTop: "0.5rem",
  },
  day: {
    fontSize: "5rem",
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
            <div className={classes.totalJobs}>
              <span className={classes.totalConstractingNumber}>1,400</span>
              <span className={classes.totalText}>Total Contract Jobs</span>
              <Icon icon={fileEarmarkRichtext} className={classes.totolIcon} />
            </div>
            <div
              className={classes.totalJobs + " " + classes.totcalContractingJob}
            >
              <span className={classes.totalConstractingNumber}>1,400</span>
              <span className={classes.totalText}>Total Internal Job</span>
              <Icon icon={fileEarmarkRichtext} className={classes.totolIcon} />
            </div>
            <div className={classes.totalJobs + " " + classes.totcalInernalJob}>
              <span className={classes.totalConstractingNumber}>1,400</span>
              <span className={classes.totalText}>Total Client Query</span>
              <Icon icon={fileEarmarkRichtext} className={classes.totolIcon} />
            </div>
          </div>
          <div className={classes.tableCalenderDivMain}>
            <div className={classes.tableDiv}>
              <div className={classes.tableTitleBottonDiv}>
                <span className={classes.tableTitle}>Recent Applicant</span>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.viewAllButton}
                  onClick={() => {
                    window.location.pathname = "/allApplicant";
                  }}
                >
                  View All
                </Button>
              </div>
              <div className={classes.tableDataDiv}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHead}>
                        Dessert (100g serving)
                      </TableCell>
                      <TableCell className={classes.tableHead} align="right">
                        Calories
                      </TableCell>
                      <TableCell className={classes.tableHead} align="right">
                        Fat&nbsp;(g)
                      </TableCell>
                      <TableCell className={classes.tableHead} align="right">
                        Carbs&nbsp;(g)
                      </TableCell>
                      <TableCell className={classes.tableHead} align="right">
                        Protein&nbsp;(g)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
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
