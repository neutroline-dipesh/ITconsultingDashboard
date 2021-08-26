import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import MaterialTable from "material-table";
import * as actions from "../../store/actions";
import axios from "axios";
import { connect } from "react-redux";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link, useHistory } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
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
  addJobButton: {
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
  addIcon: {
    fontSize: "1rem",
    marginRight: "1rem",
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
  tableBody: {
    textAlign: "center",
  },
  buttomDiv: {
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
    whiteSpace: "nowrap",
  },
}));
const Alljobs = (props) => {
  //getting data from database
  const history = useHistory();
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState();
  useEffect(() => {
    fetchAllData();
    console.log(data1);
  }, []);
  console.log(data1);

  const classes = useStyle();
  //alert message
  const fetchAllData = () => {
    setLoading(true);
    axios
      .get("http://localhost:4000/allJobs/")
      .then((response) => {
        if (response.data) {
          setData1(response.data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

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
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete("http://localhost:4000/allJobs/" + id, {
              headers: { Authorization: localStorage.getItem("token") },
              data: {
                id: id,
              },
            })
            .then((res) => {
              console.log("deleted id" + id);
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
              fetchAllData();
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
            <span className={classes.pageTabName}>Job / Jobs List</span>
            <Tooltip title="Add Jobs" TransitionComponent={Zoom} arrow>
              <Link to="/addjobs" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.addJobButton}
                >
                  <IoMdAdd className={classes.addIcon} /> Add Job
                </Button>
              </Link>
            </Tooltip>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <MaterialTable
                  title="Job Lists"
                  columns={[
                    { title: "Job Id", field: "jobId" },
                    { title: "Job Title", field: "jobTitle" },
                    { title: "Department", field: "department" },
                    { title: "Job Type", field: "jobType" },
                    { title: "Address", field: "country" },
                    { title: "Published By", field: "publishBy" },
                    { title: "Visibility", field: "visibility" },
                    { title: "id", field: "id", hidden: true },
                    // { title: 'Action', field: 'action' }
                  ]}
                  data={data1}
                  options={{
                    headerStyle: {
                      backgroundColor: "#4e73df",
                      color: "#fff",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      position: "sticky",
                      left: 0,
                    },
                    actionsColumnIndex: -1,
                  }}
                  isLoading={loading}
                  actions={[
                    {
                      icon: () => <VisibilityIcon />,
                      tooltip: "View Job",
                      onClick: (event, rowData) =>
                        history.push(`/job-detail/${rowData.id}`),
                    },
                    {
                      icon: "edit",
                      tooltip: "Edit Job",
                      onClick: (event, rowData) =>
                        history.push(`/alljobs/edit-job/${rowData.id}`),
                    },
                    {
                      icon: "delete",
                      tooltip: "Delete Job",
                      onClick: (event, rowData) => deletFunction(rowData.id),
                    },
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
    jobs: state.jobs.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(actions.getAllJobs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alljobs);
