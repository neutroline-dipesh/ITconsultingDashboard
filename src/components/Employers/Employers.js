import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import ViewDetail from "./ViewDetail";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import axios from "axios";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { RiDeleteBin6Fill } from "react-icons/ri";

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

const Employers = (props) => {
  const [data, setData] = useState([]);

  //getting data from database start

  useEffect(() => {
    setTimeout(() => {
      $("#example").DataTable().destroy();
      fetchContactData();
      console.log(data);
    }, 100);
  }, []);

  useEffect(() => {
    $("#example").DataTable();
  }, [data]);

  const classes = useStyle();
  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  });

  //alert message
  const fetchContactData = () => {
    axios.get("http://localhost:4000/requestTalent/").then((response) => {
      setData(response.data.data);
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
            .delete("http://localhost:4000/requestTalent/" + id, {
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
            <span className={classes.pageTabName}>Employers</span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <table
                  id="example"
                  data-ordering="false"
                  className={classes.dataTable + " " + "table"}
                >
                  <thead>
                    <tr>
                      {/* <th className={classes.tableHead}>ID</th> */}
                      <th className={classes.tableHead}>Name</th>

                      <th className={classes.tableHead}>Email</th>
                      <th className={classes.tableHead}>Phone</th>
                      <th className={classes.tableHead}>Company Name</th>
                      <th className={classes.tableHead}>Job Type</th>
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
                            {item.firstName} {item.lastName}
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
                            {item.companyName}
                          </td>
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
                              <ViewDetail data={item} />

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
                </table>
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
export default connect(mapStateToProps, mapDispatchToProps)(Employers);

// import React, { useEffect, useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Swal from "sweetalert2";
// import { withRouter } from "react-router-dom";
// //Bootstrap and jQuery libraries
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.min.js";
// //Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import $ from "jquery";
// import * as actions from "../../store/actions";
// import axios from "axios";
// // import EditJobs from "./EditJobs";
// import { connect } from "react-redux";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import { FaEdit } from "react-icons/fa";

// import Tooltip from "@material-ui/core/Tooltip";
// import Zoom from "@material-ui/core/Zoom";
// import { Link } from "react-router-dom";
// import ViewDetail from "./ViewDetail";
// const useStyle = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//     width: "100%",
//   },
//   maindiv: {
//     paddingTop: "8vh",
//   },
//   PageTabDiv: {
//     backgroundColor: "#f8f9fc",

//     height: "10vh",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   pageTabName: {
//     fontSize: "1.75rem",
//     fontWeight: "700",
//     marginLeft: "2.5rem",
//     color: "#3F51B5",
//   },
//   addJobButton: {
//     textDecoration: "none",
//     backgroundColor: "#2653d4",
//     borderRadius: "20px",
//     width: "7rem",
//     height: "3.9vh",
//     fontSize: "0.7rem",
//     marginRight: "1.5rem",
//     boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
//     "&:hover": {
//       // backgroundColor: "#98DED9",
//     },
//   },
//   addIcon: {
//     // color: "black !important",
//     fontSize: "1rem",
//     marginRight: "1rem",
//   },
//   MainContentDiv: {
//     height: "82vh",

//     backgroundColor: "#f8f9fc",
//   },

//   ContentDiv: {
//     backgroundColor: "#FFFFFF",
//     float: "left",
//     marginLeft: "1rem",
//     width: "81%",
//     boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
//   },
//   ContentDateDiv: {
//     overflow: "scroll",
//     maxHeight: "80vh",
//     paddingBottom: "2rem",
//     overflowX: "hidden",

//     [theme.breakpoints.down("lg")]: {
//       overflowX: "scroll",
//     },
//   },
//   dataTable: {
//     // maxHeight: "70vh",
//     paddingTop: "1rem",
//   },

//   tableHead: {
//     position: "sticky",
//     top: "0",
//     backgroundColor: "#4e73df !important",
//     color: "#fff",
//     fontWeight: "400 !important",
//     textAlign: "center",
//     whiteSpace: "nowrap",
//   },
//   tableBody: {
//     textAlign: "center",
//   },
//   buttomDiv: {
//     display: "flex",
//     justifyContent: "center",
//   },
//   editButton: {
//     height: "1.3rem",
//     width: "1.3rem",
//     marginLeft: "1rem",
//     marginTop: "0.4rem",
//     marginBottom: "0.4rem",
//     color: "#2eb82e",
//     "&:hover": {
//       color: "#1f7a1f",
//     },
//   },
//   viewButton: {
//     marginTop: "0.5rem",
//     marginBottom: "0.5rem",
//     height: "1.4rem",
//     width: "1.4rem",
//     color: "#04A8F6",
//     "&:hover": {
//       color: "#4e73df",
//     },
//   },
//   deleteButton: {
//     marginLeft: "1rem",
//     color: "#e60000",
//     height: "1.2rem",
//     width: "1.2rem",
//     borderRadius: "20px",
//     marginTop: "0.4rem",
//     marginBottom: "0.4rem",
//     "&:hover": {
//       color: "#b30000",
//     },
//   },
//   seenColor: {
//     backgroundColor: "#F5F7F7 ! important",
//     fontSize: "15px",

//     textAlign: "center",
//     whiteSpace: "nowrap",
//   },
//   noColor: {
//     // fontWeight: "500",
//     // color: "red",
//     fontSize: "15px",
//     textAlign: "center",
//     whiteSpace: "nowrap",
//   },
// }));
// const Employers = (props) => {
//   // console.log(props.jobs);
//   //getting data from database
//   const [data1, setData1] = useState([]);
//   const fetchAllData = () => {
//     axios.get("http://localhost:4000/requestTalent/").then((response) => {
//       if (response.data) {
//         setData1(response.data.data);
//       }
//     });
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       $("#example").DataTable().destroy();
//       fetchAllData();
//     }, 100);
//   }, []);

//   console.log(data1);
//   useEffect(() => {
//     $("#example").DataTable();
//   }, [data1]);

//   const classes = useStyle();
//   useEffect(() => {
//     $(document).ready(function () {
//       $("#example").DataTable();
//     });
//   });

//   //alert message

//   const deletFunction = (id) => {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: "btn btn-success mx-2",
//         cancelButton: "btn btn-danger mx-2",
//       },
//       buttonsStyling: false,
//     });

//     swalWithBootstrapButtons
//       .fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonText: "Yes, Delete it!",
//         cancelButtonText: "No, cancel!",
//         reverseButtons: true,
//       })
//       .then((result) => {
//         if (result.isConfirmed) {
//           axios
//             .delete("http://localhost:4000/requestTalent/" + id, {
//               headers: { Authorization: localStorage.getItem("token") },
//               data: {
//                 id: id,
//               },
//             })
//             .then((res) => {
//               console.log("deleted id" + id);
//               swalWithBootstrapButtons.fire(
//                 "Deleted!",
//                 "Your file has been deleted.",
//                 "success"
//               );
//               fetchAllData();
//             })
//             .catch((err) => {
//               console.log(err);
//               swalWithBootstrapButtons.fire(
//                 "Something Went Wrong!",
//                 "Job not deleted!",
//                 "fail"
//               );
//             });
//         } else if (
//           /* Read more about handling dismissals below */
//           result.dismiss === Swal.DismissReason.cancel
//         ) {
//           swalWithBootstrapButtons.fire(
//             "Cancelled",
//             "Your imaginary file is safe :)",
//             "error"
//           );
//         }
//       });
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className={classes.root}>
//         <div className={classes.maindiv}>
//           <div className={classes.PageTabDiv}>
//             <span className={classes.pageTabName}>Employers</span>
//           </div>
//           <div className={classes.MainContentDiv}>
//             <div className={classes.ContentDiv}>
//               <div className={classes.ContentDateDiv}>
//                 <table
//                   id="example"
//                   data-ordering="false"
//                   className={classes.dataTable + " " + "table"}
//                 >
//                   <thead>
//                     <tr>
//                       <th className={classes.tableHead}>Full Name</th>
//                       <th className={classes.tableHead}>Email</th>
//                       <th className={classes.tableHead}>Phone Number</th>
//                       <th className={classes.tableHead}>Address</th>
//                       <th className={classes.tableHead}>Company Name</th>
//                       <th className={classes.tableHead}>Job Title</th>
//                       <th className={classes.tableHead}>Posted Date</th>
//                       <th className={classes.tableHead}>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data1.map((item, key) => {
//                       return (
//                         <tr key={key}>
//                           <td>
//                             {item.firstName} {item.lastName}
//                           </td>
//                           <td className={classes.tableBody}>{item.email}</td>
//                           <td className={classes.tableBody}>{item.phone}</td>
//                           <td className={classes.tableBody}>
//                             {item.country},{item.city}
//                           </td>
//                           <td className={classes.tableBody}>
//                             {item.companyName}
//                           </td>
//                           <td className={classes.tableBody}>{item.jobTitle}</td>
//                           <td className={classes.tableBody}>
//                             {item.postedDate}
//                           </td>

//                           <td>
//                             <div className={classes.buttomDiv}>
//                               <ViewDetail data={item} />

//                               <Tooltip
//                                 title="Delete"
//                                 TransitionComponent={Zoom}
//                                 arrow
//                               >
//                                 <Link>
//                                   <RiDeleteBin6Fill
//                                     className={classes.deleteButton}
//                                     onClick={() => deletFunction(item.id)}
//                                   />
//                                 </Link>
//                               </Tooltip>
//                             </div>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// const mapStateToProps = (state) => {
//   return {
//     jobs: state.jobs.data,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onLoad: () => dispatch(actions.getAllJobs()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Employers);
