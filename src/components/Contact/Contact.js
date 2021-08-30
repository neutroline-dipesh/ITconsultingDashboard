import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import Swal from "sweetalert2";
import ViewDetail from "./ViewDetail";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
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
    // height: "80vh",
    marginLeft: "1rem",
    width: "82%",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    // borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "72.5%",
    },
  },
  ContentDateDiv: {
    overflow: "scroll",
    maxHeight: "80vh",
    paddingBottom: "2rem",
    overflowX: "hidden",
  },
  dataTable: {
    // maxHeight: "70vh",
    paddingTop: "1rem",
  },
  tableHead: {
    // position: "sticky",
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
    // color: "red",
    fontSize: "15px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
}));

const Contact = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState();
  const [seen, setSeen] = useState(false);
  const handState = () => {
    setSeen(!seen);
    fetchContactData();
    // console.log(seen);
  };
  useEffect(() => {
      fetchContactData();
  }, []);
  const classes = useStyle();

  //alert message
  const fetchContactData = () => {
    setLoading(true);
    axios.get("http://localhost:4000/allQueries").then((response) => {
    console.log(response.data.data);  
    setData(response.data.data);
      setLoading(false);
      var newArray = response.data.data.map(function(val){
        return{
          id: val.id,
          fullName: val.fullName,
          email: val.email,
          phone: val.phone,
          address: val.city + ", "+ val.country,
          postedDate: val.postedDate,
          message: val.message,
          status: val.status,
          attachment: val.attachment
        }
      })
      setTableData(newArray);
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
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete("http://localhost:4000/allQueries/" + id, {
              headers: { Authorization: localStorage.getItem("token") },
              data: {
                id: id,
              },
            })
            .then((res) => {
              console.log("deleted id" + id);
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "Selected item has been deleted",
                "success"
              );
              fetchContactData();
            })
            .catch((err) => {
              console.log(err);
              swalWithBootstrapButtons.fire(
                "Something Went Wrong!",
                "Not deleted!",
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
  //for viewButton
  const [openViewTable, setOpenViewTable] = React.useState(false);

  // const handleClickOpenViewTable = () => {
  //   setOpenViewTable(true);
  //   console.log(openViewTable);
  // };

  return (
    <>
      <Sidebar />
      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>All Query</span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <MaterialTable
                    title="Contact"
                      columns={[
                            { title: 'Name', field: 'fullName'},
                            { title: 'Email', field: 'email' },
                            { title: 'Phone', field: 'phone'},
                            { title: 'Address', field: 'address' },
                            { title: 'Date', field: 'postedDate' },
                      ]}
                  data={tableData}
      options={{
                              cellStyle: {
                              padding: "6px",
                              textAlign: "center"
                       },
          rowStyle: (rowData) => ({
          backgroundColor: (rowData.status !== "seen") ? "#F2F2F2" : "#FFF",
          fontWeight: (rowData.status !== "seen") ? "600" : ""
        }),
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
        (rowData) => ({
          tooltip: '',
          icon:() =>                
          <ViewDetail
                data={rowData}
                handleState={handState}
          />,
        }),
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
                  className={classes.dataTable + " " + "table"}
                >
                  <thead>
                    <tr>
                      <th className={classes.tableHead}>Name</th>

                      <th className={classes.tableHead}>Email</th>
                      <th className={classes.tableHead}>Phone</th>
                      <th className={classes.tableHead}>Address</th>
                      <th className={classes.tableHead}>Date</th>

                      <th className={classes.tableHead}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td
                            className={
                              item.status == "seen"
                                ? classes.seenColor
                                : classes.noColor
                            }
                          >
                            {item.fullName}
                          </td>

                          <td
                            className={
                              item.status == "seen"
                                ? classes.seenColor
                                : classes.noColor
                            }
                          >
                            {item.email}
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
                            {item.city + " , " + item.country}
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
                            <div className={classes.buttomDiv}>
                              <ViewDetail
                                data={item}
                                handleState={handState}
                                // fetchData={fetchContactData}
                              />

                              <RiDeleteBin6Fill
                                className={classes.deleteButton}
                                onClick={() => deletFunction(item.id)}
                              />
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
const mapStateToProps = (state) => {
  return {
    data: state.allqueries.allQueriesData,
    error: state.allqueries.error,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(actions.getAllQueries()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
