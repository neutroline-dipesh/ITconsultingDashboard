import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import Swal from "sweetalert2";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
    fontSize: "1.75rem",
    fontWeight: "700",
    marginLeft: "2.5rem",
    color: "#3F51B5",
  },
  MainContentDiv: {
    height: "82vh",

    backgroundColor: "#f8f9fc",
  },

  ContentDiv: {
    backgroundColor: "#FFFFFF",
    float: "left",
    marginLeft: "1rem",
    width: "81%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("md")]: {
      width: "74.5%",
    },
  },
  ContentDateDiv: {
    overflow: "scroll",
    maxHeight: "80vh",
    paddingBottom: "2rem",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      overflowX: "scroll",
    },
  },
  dataTable: {
    paddingTop: "1rem",
  },
  tableHead: {
    position: "sticky",
    top: "0",
    backgroundColor: "#4e73df !important",
    color: "#fff",
    fontWeight: "400 !important",
    textAlign: "center",
    whiteSpace: "nowrap",
  },

  buttomDiv: {
    display: "flex",
    justifyContent: "center",
  },

  viewButton: {
    marginTop: "0.3rem",
    marginBottom: "0.3rem",
    height: "1.3rem",
    width: "1.3rem",
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
      color: "#ff0000",
    },
  },
  confirmBtn: {
    marginLeft: "1rem",
  },
  text: {
    backgroundColor: "yellow",
  },
  seenColor: {
    backgroundColor: "#F5F7F7 ! important",
    fontSize: "15px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  noColor: {
    color: "#000",
    fontSize: "15px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
}));

const Allapplicant = () => {
  const history = useHistory();
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(false);
  const [applicantTable, setApplicantTable] = useState();

  //getting data from database
  const fetchData = () => {
    setLoading(true);
    axios.get("http://localhost:4000/allApplicant/").then((response) => {
      if (response.data) {
        setData1(response.data.data);
        setLoading(false);
        var newArray = response.data.data.map(function(val){
          return{
            id: val.id,
            jobTitle: val.jobTitle,
            name: val.firstName + ' '+val.lastName,
            gmail: val.gmail,
            postedDate: val.postedDate,
            approvelStatus: val.approvelStatus,
            
          }
        });
        setApplicantTable(newArray);
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyle();
  //delete confirmation message
  const deletFunction = (id) => {
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
        confirmButtonText: "Yes, delete it!",

        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete("http://localhost:4000/allApplicant/" + id, {
              headers: { Authorization: localStorage.getItem("token") },
              data: {
                id: id,
              },
            })
            .then((res) => {
              // console.log("deleted id" + id);
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
              fetchData();
            })
            .catch((err) => {
              console.log(err);
              swalWithBootstrapButtons.fire(
                "Something Went Wrong!",
                "Job not deleted!",
                "fail"
              );
            });
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
            <span className={classes.pageTabName}>
              Applicant / All Applicant
            </span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <MaterialTable
                    title="Applicants Lists"
                      columns={[
                            { title: 'Job Title', field: 'jobTitle' },
                            { title: 'Name', field: 'name'},
                            { title: 'Email', field: 'gmail' },
                            { title: 'Applied Date', field: 'postedDate' },
                            { title: 'Approval Status', field: 'approvelStatus' },                      ]}
                  data={applicantTable}
      options={{
          rowStyle: (rowData) => {
          if(rowData.approvelStatus !== "notSeen"){
            if(rowData.approvelStatus === "Reject"){
              return{
                backgroundColor: "#DC3545",
                color: '#fff'
              }
          };
            if(rowData.approvelStatus === "Accept"){
            return {
              backgroundColor: "#28A745",
              color: '#fff'
            }
          };
            if(rowData.approvelStatus === "Hold"){
              return{
                backgroundColor: "#ffc107",
                color: '#fff'
              }
            };
          }
          else{
            return{
              backgroundColor: '#f2f2f2',
              fontWeight: "600"
            }
          }
        },
        headerStyle: {
              backgroundColor: "#4e73df",
              color: "#fff",
              fontWeight: "400",
              whiteSpace: "nowrap",
              position: "sticky",
              padding: "6px",
              width: "100%"
        },
        actionsColumnIndex: -1
      }} 
      isLoading={loading}    
      actions={[
        {
          icon:() => <VisibilityIcon/>,
          tooltip: 'View Applicant',
          onClick: (event, rowData) => history.push(`/applicant/detail/${rowData.id}`)
        },
        {
          icon: 'delete',
          tooltip: 'Delete Applicant',
          onClick: (event, rowData) => deletFunction(rowData.id)
        }
      ]}
    />
                {/* <table
                  id="example"
                  data-ordering="false"
                  className={classes.dataTable + " " + "table "}
                >
                  <thead>
                    <tr>
                      <th className={classes.tableHead}>Job Title</th>

                      <th className={classes.tableHead}>Name</th>

                      <th className={classes.tableHead}>Email</th>
                      <th className={classes.tableHead}>Applied Date</th>

                      <th className={classes.tableHead}>Approval Status</th>
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
                            {item.firstName + " " + item.lastName}
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
                            {item.postedDate}
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
                                  ? "#e60000"
                                  : item.approvelStatus === "Hold"
                                  ? "#FFC107"
                                  : "black",
                              fontWeight: "500",
                            }}
                          >
                            {item.approvelStatus}
                          </td>
                          <td
                            className={
                              item.status == "seen"
                                ? classes.seenColor
                                : classes.noColor
                            }
                          >
                            <div className={classes.buttomDiv}>
                              <Tooltip
                                title="View"
                                TransitionComponent={Zoom}
                                arrow
                              >
                                <Link to={`/applicant-detail/${item.id}`}>
                                  <VisibilityIcon
                                    className={classes.viewButton}
                                  />
                                </Link>
                              </Tooltip>

                              <Tooltip
                                title="Detete"
                                TransitionComponent={Zoom}
                                arrow
                              >
                                <Link>
                                  <RiDeleteBin6Fill
                                    className={classes.deleteButton}
                                    onClick={() => deletFunction(item.id)}
                                  />
                                </Link>
                              </Tooltip>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table> */}
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Allapplicant;
