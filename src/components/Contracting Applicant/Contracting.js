import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import axios from "axios";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { contractData } from "./contractData";

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
  confirmBtn: {
    marginLeft: "1rem",
  },
  text: {
    backgroundColor: "yellow",
  },
  seenColor: {
    // backgroundColor: "#F5F7F7 ! important",
    fontSize: "15px",
  },
  noColor: {
    fontWeight: "bold",
    // backgroundColor: "#fff ! important",
    fontSize: "15px",
  },
}));

const Contracting = () => {
  //getting data from database
  const [data1, setData1] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      $("#example").DataTable().destroy();
      axios.get("http://localhost:4000/contract/").then((response) => {
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
        // confirmButtonText: `<div style="background-color : red">hello</div>`,
        confirmButtonText: "Yes, delete it!",

        cancelButtonText: "No, cancel!",
        reverseButtons: true,
        // buttons: {
        //   confirm: { style: "margin-left:1rem" },
        //   // cancel: "Batalkan",
        // },
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
            <span className={classes.pageTabName}>Applicant / Contract</span>
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
                      <th className={classes.tableHead}>Job Title</th>

                      <th className={classes.tableHead}>Name</th>

                      <th className={classes.tableHead}>Email</th>
                      <th className={classes.tableHead}>Phone</th>
                      <th className={classes.tableHead}>Applied Date</th>

                      <th className={classes.tableHead}>Status</th>
                      <th className={classes.tableHead}>Approvel Status</th>

                      <th className={classes.tableHead}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data1.map((item, key) => {
                      return (
                        <tr>
                          <td
                            className={
                              item.status == "seen"
                                ? classes.seenColor
                                : classes.noColor
                            }
                          >
                            {item.jobTitle}
                          </td>
                          <td
                            className={
                              item.status == "seen"
                                ? classes.seenColor
                                : classes.noColor
                            }
                          >
                            {" "}
                            {item.firstName +
                              " " +
                              item.middleName +
                              " " +
                              item.lastName}
                          </td>

                          <td
                            className={
                              item.status == "seen"
                                ? classes.seenColor
                                : classes.noColor
                            }
                          >
                            {item.gmail}
                          </td>

                          <td
                            className={
                              item.status == "seen"
                                ? classes.seenColor
                                : classes.noColor
                            }
                          >
                            {item.phone}
                          </td>
                          <td
                            className={
                              item.status == "seen"
                                ? classes.seenColor
                                : classes.noColor
                            }
                          >
                            {item.postedDate}
                          </td>
                          <td
                            className={
                              item.status == "seen"
                                ? classes.seenColor
                                : classes.noColor
                            }
                          >
                            <select>
                              <option
                                value="notSeen"
                                selected={item.status == "notSeen"}
                              >
                                Not Seen
                              </option>
                              <option
                                value="seen"
                                selected={item.status == "seen"}
                              >
                                Seen
                              </option>
                            </select>
                          </td>
                          <td
                            className={
                              item.status == "seen"
                                ? classes.seenColor
                                : classes.noColor
                            }
                            style={{
                              color:
                                item.approvelStatus === "Accept"
                                  ? "#24803c"
                                  : item.approvelStatus === "Reject"
                                  ? "#FFC107"
                                  : item.approvelStatus === "Hold"
                                  ? "#660000"
                                  : "black",
                              fontWeight: "bold",
                            }}
                          >
                            {item.approvelStatus}
                          </td>

                          <td>
                            <div className={classes.buttomDiv}>
                              <Button
                                className={classes.viewButton}
                                variant="contained"
                                color="primary"
                                href="#contained-buttons"
                                onClick={() => {
                                  window.open("/viewApplicatnDetail", "_blank");
                                }}
                              >
                                View
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

export default Contracting;
