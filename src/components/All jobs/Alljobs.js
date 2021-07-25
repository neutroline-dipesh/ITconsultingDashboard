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

import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineFundView } from "react-icons/ai";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { FaEdit } from "react-icons/fa";

import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";

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
    backgroundColor: "#f8f9fc",

    height: "10vh",
    display: "flex",
    alignItems: "center",
  },
  pageTabName: {
    // fontFamily: "Roboto",
    fontSize: "2rem",
    fontWeight: "400",
    marginLeft: "1rem",
    color: "#fffff",
  },
  MainContentDiv: {
    height: "82vh",

    backgroundColor: "#f8f9fc",
  },

  ContentDiv: {
    backgroundColor: "#FFFFFF",
    float: "left",
    // height: "80vh",
    marginLeft: "1rem",
    width: "82%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    // borderRadius: "5px",
  },
  ContentDateDiv: {
    overflow: "scroll",
    maxHeight: "80vh",
    paddingBottom: "2rem",
  },
  dataTable: {
    // maxHeight: "70vh",
    paddingTop: "1rem",
  },

  tableHead: {
    backgroundColor: "#4e73df !important",
    color: "#fff",
    fontWeight: "400 !important",
    // height: "3vh !important",
    textAlign: "center",
  },
  tableBody: {
    textAlign: "center",
    // fontWeight: "200 !important",
  },
  buttomDiv: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
  },
  editButton: {
    height: "1.3rem",
    width: "1.3rem",
    marginLeft: "1rem",
    marginTop: "0.4rem",
    marginBottom: "0.4rem",
    color: "#2eb82e",

    // fontSize: "0.7rem",
    // // borderRadius: "20px",
    // backgroundColor: "#04A8F6",
    // marginLeft: "0.5rem",
    // height: "3.9vh",
    "&:hover": {
      color: "#1f7a1f",
    },
  },
  viewButton: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    height: "1.4rem",
    width: "1.4rem",
    color: "#04A8F6",
    "&:hover": {
      color: "#4e73df",
    },
  },
  deleteButton: {
    marginLeft: "1rem",
    color: "#e60000",
    height: "1.2rem",
    width: "1.2rem",
    borderRadius: "20px",
    marginTop: "0.4rem",
    marginBottom: "0.4rem",
    "&:hover": {
      color: "#b30000",
    },
  },
  seenColor: {
    color: "#24803c",
    fontWeight: "500",
    textAlign: "center",
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
  // const [data1, setData1] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     $("#example").DataTable().destroy();
  //     axios.get("http://localhost:4000/allJobs/").then((response) => {
  //       if (response.data) {
  //         // value = response.data.data;
  //         setData1(response.data.data);
  //       }
  //     });
  //   }, 100);
  // }, []);

  // useEffect(() => {
  //   $("#example").DataTable();
  // }, [data1]);

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
            <span className={classes.pageTabName}>Job / Jobs List</span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <table
                  id="example"
                  //   class="table table-striped table-bordered"
                  className={classes.dataTable + " " + "table"}
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
                      <th className={classes.tableHead}>Visibility</th>
                      <th className={classes.tableHead}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allJobsData.map((item, key) => {
                      return (
                        <tr key={key}>
                          {/* <td>1</td> */}
                          <td className={classes.tableBody}>{item.jobId}</td>
                          <td className={classes.tableBody}>{item.jobTitle}</td>
                          <td className={classes.tableBody}>
                            {item.department}
                          </td>
                          <td className={classes.tableBody}>{item.jobType}</td>
                          {/* <td>{item.country}</td> */}
                          <td className={classes.tableBody}>
                            {item.country}, {item.state} , {item.city}
                          </td>
                          <td className={classes.tableBody}>
                            {item.publishBy}
                          </td>
                          <td
                            className={
                              item.visibility == "Publish"
                                ? classes.seenColor
                                : classes.notColor + " " + classes.tableBody
                            }
                          >
                            {item.visibility}
                          </td>
                          <td>
                            <div className={classes.buttomDiv}>
                              <Tooltip
                                title="View"
                                TransitionComponent={Zoom}
                                arrow
                              >
                                <Link to="/viewJobDetail">
                                  <VisibilityIcon
                                    className={classes.viewButton}
                                  />
                                </Link>
                              </Tooltip>

                              <Tooltip
                                title="Edit"
                                TransitionComponent={Zoom}
                                arrow
                              >
                                <Link to="/alljobs/editJobs">
                                  <FaEdit className={classes.editButton} />
                                </Link>
                              </Tooltip>

                              <Tooltip
                                title="Delete"
                                TransitionComponent={Zoom}
                                arrow
                              >
                                <Link>
                                  <RiDeleteBin6Fill
                                    className={classes.deleteButton}
                                    onClick={() => deletFunction()}
                                  />
                                </Link>
                              </Tooltip>
                              {/* <Button
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
                              </Button> */}
                            </div>
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
