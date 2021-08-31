import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import axios from "axios";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { useHistory } from "react-router-dom";
import { internalData } from "./internalData";

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
    // height: "80vh",
    marginLeft: "1rem",
    width: "81%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    // borderRadius: "5px",
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
    // maxHeight: "70vh",
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
    // backgroundColor: "red",
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
  seenColor: {
    backgroundColor: "#F5F7F7 ! important",
    fontSize: "15px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  noColor: {
    // fontWeight: "500",
    color: "#000",
    fontSize: "15px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
}));

const Internal = (props) => {
  const history = useHistory();
    const classes = useStyle();

  // getting data from database
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(false);
    const [applicantTable, setApplicantTable] = useState();


  useEffect(() => {
      fetchData();
  }, []);
  console.log(data1);


  const fetchData = () => {
    setLoading(true);
    axios
      .get("http://localhost:4000/allApplicant/internal/")
      .then((response) => {
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
            approvelStatus: val.approvelStatus
          }
        });
        setApplicantTable(newArray);
        }
      });
  };

  const deletFunction = (id) => {
    console.log(id);
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
            <span className={classes.pageTabName}>Applicant / Internal</span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <MaterialTable
                    title="Internal Applicants"
                      columns={[
                            { title: 'Job Title', field: 'jobTitle' },
                            { title: 'Name', field: 'name'},
                            { title: 'Email', field: 'gmail' },
                            { title: 'Applied Date', field: 'postedDate' },
                            { title: 'Approval Status', field: 'approvelStatus' },
                      ]}
                  data={applicantTable}
                  options={{
                            cellStyle: {
                              padding: "6px",
                              textAlign: "center"
                       },
                  rowStyle: (rowData) => {
          if(rowData.approvelStatus !== "notSeen"){
            if(rowData.approvelStatus === "Reject"){
              return{
                backgroundColor: '#FF7F7F'
              }
          };
            if(rowData.approvelStatus === "Accept"){
            return {
              backgroundColor: '#90ee90'
            }
          };
            if(rowData.approvelStatus === "Hold"){
              return{
                backgroundColor: '#cdcdcd'
              }
            };
            return{
                backgroundColor: '#f5f9ff'
            }
          }
          else{
            return{
              backgroundColor: '#f5f9ff',
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
                    textAlign: "center"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Internal);
