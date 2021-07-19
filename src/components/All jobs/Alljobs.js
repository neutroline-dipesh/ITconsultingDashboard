import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import axios from "axios";

import { allJobsData } from "./alljobsData";
const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
  maindiv: {
    paddingTop: "8vh",
  },
  PageTabDiv: {
    backgroundColor: "#C4C4C4",

    height: "10vh",
    // border: "solid 1px",
    paddingTop: "1rem",
  },
  pageTabName: {
    // fontFamily: "Roboto",
    fontSize: "2rem",
    fontWeight: "600",
    marginLeft: "1rem",
    color: "#062837",
  },
  MainContentDiv: {
    height: "82vh",

    backgroundColor: "#C4C4C4",
  },

  ContentDiv: {
    backgroundColor: "#FFFFFF",
    float: "left",
    // height: "80vh",
    marginLeft: "1rem",
    width: "82%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
  },
  ContentDateDiv: {
    overflow: "scroll",
    maxHeight: "80vh",
  },
  dataTable: {
    // maxHeight: "70vh",
    paddingTop: "1rem",
  },
  tableHead: {
    backgroundColor: "#4487A9 !important",
    color: "#fff",
    height: "3vh !important",
    textAlign: "center",
  },
  buttomDiv: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
  },
  editButton: {
    fontSize: "0.7rem",
    // borderRadius: "20px",
    backgroundColor: "#04A8F6",
    marginLeft: "0.5rem",
    height: "3.9vh",
    "&:hover": {
      color: "#fff",
    },
  },
  viewButton: {
    fontSize: "0.7rem",
    // borderRadius: "20px",
    backgroundColor: "#00264d",

    height: "3.9vh",
    "&:hover": {
      color: "#fff",
    },
  },
  deleteButton: {
    fontSize: "0.7rem",
    // borderRadius: "20px",
    marginLeft: "0.5rem",

    backgroundColor: "#b30000",
    height: "3.9vh",
    "&:hover": {
      color: "#fff",
    },
  },
  seenColor: {
    color: "#24803c",
    fontWeight: "bold",
  },
}));

const Alljobs = (props) => {
  const [data, setData] = useState({
    allJobsData: [
      {
        id: "1",
        jobId: "1000ID",
        jobTitle: "Java Developer",
        jobSubtitle: "Web Development",
        department: "Technology",
        jobType: "Full Time",
        country: "Nepal",
        state: "Provience-1",
        city: "damak-6",
        description: "Requirement",
        publishBy: "Dipesh shrestha",
        visibility: "Publish",
        postedDate: "1/2/2021",
      },
    ],
  });

  //getting data from database
  const [data1, setData1] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      $("#example").DataTable().destroy();
      axios.get("http://localhost:4000/allJobs/").then((response) => {
        if (response.data) {
          // value = response.data.data;
          setData1(response.data.data);
        }
      });
    }, 100);
  }, []);

  useEffect(() => {
    $("#example").DataTable();
  }, [data1]);

  const classes = useStyle();
  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  });

  //alert message

  const deletFunction = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mx-2",
        cancelButton: "btn btn-danger mx-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <>
      <Sidebar />
      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>All Jobs</span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <table
                  id="example"
                  //   class="table table-striped table-bordered"
                  className={
                    classes.dataTable +
                    " " +
                    "table table-striped table-bordered"
                  }
                >
                  <thead>
                    <tr>
                      {/* <th className={classes.tableHead}>SN</th> */}
                      <th className={classes.tableHead}>Job ID</th>
                      <th className={classes.tableHead}>Job Title</th>
                      <th className={classes.tableHead}>Department</th>
                      <th className={classes.tableHead}>Job Type</th>
                      {/* <th className={classes.tableHead}>Country</th> */}
                      <th className={classes.tableHead}>Address</th>
                      <th className={classes.tableHead}>Published By</th>
                      <th className={classes.tableHead}>Action</th>
                      <th className={classes.tableHead}>Visibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data1.map((item, key) => {
                      return (
                        <tr key={key}>
                          {/* <td>1</td> */}
                          <td>{item.jobId}</td>
                          <td>{item.jobTitle}</td>
                          <td>{item.department}</td>
                          <td>{item.jobType}</td>
                          {/* <td>{item.country}</td> */}
                          <td>
                            {item.country}, {item.state} , {item.city}
                          </td>
                          <td>{item.publishBy}</td>
                          <td>
                            <div className={classes.buttomDiv}>
                              <Button
                                className={classes.viewButton}
                                variant="contained"
                                color="primary"
                                href="#contained-buttons"
                                onClick={() => {
                                  // window.location.pathname = "/viewApplicatnDetail";
                                  window.open("/viewJobDetail", "_blank");
                                }}
                              >
                                View
                              </Button>
                              <Button
                                className={classes.editButton}
                                variant="contained"
                                color="primary"
                                href="#contained-buttons"
                                onClick={() => {
                                  window.location.pathname =
                                    "/alljobs/editJobs";
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                className={classes.deleteButton}
                                variant="contained"
                                color="primary"
                                href="#contained-buttons"
                                onClick={() => deletFunction()}
                              >
                                delete
                              </Button>
                            </div>
                          </td>
                          <td
                            className={
                              item.visibility == "Publish"
                                ? classes.seenColor
                                : classes.notColor
                            }
                          >
                            {item.visibility}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alljobs;
