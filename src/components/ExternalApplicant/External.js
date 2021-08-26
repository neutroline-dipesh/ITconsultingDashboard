import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import MaterialTable from "material-table";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
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

const External = () => {
  const history = useHistory();
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(false);

  //getting data from database
  const fetchData = () => {
    setLoading(true);
    axios.get("http://localhost:4000/externalApplicant/").then((response) => {
      if (response.data) {
        setData1(response.data.data);
        setLoading(false);
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data1);
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
            .delete("http://localhost:4000/externalApplicant/" + id, {
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
            <span className={classes.pageTabName}>Applicant / External</span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <MaterialTable
                  title="External Applicants"
                  columns={[
                    { title: "Job Title", field: "jobTitle" },
                    { title: "Name", field: "firstName" },
                    { title: "Email", field: "gmail" },
                    { title: "Applied Date", field: "postedDate" },
                    { title: "Approval Status", field: "approvelStatus" },
                  ]}
                  data={data1}
                  options={{
                    headerStyle: {
                      backgroundColor: "#4e73df",
                      color: "#fff",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      position: "sticky",
                    },
                    actionsColumnIndex: -1
                  }} 
      isLoading={loading}    
      actions={[
        {
          icon:() => <VisibilityIcon/>,
          tooltip: 'View Job',
          onClick: (event, rowData) => history.push(`/external-viewDetail/${rowData.id}`)
        },
        {
          icon: 'delete',
          tooltip: 'Delete Job',
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
                      <th className={classes.tableHead}>Name</th>

                      <th className={classes.tableHead}>Email</th>
                      <th className={classes.tableHead}>Phone</th>
                      <th className={classes.tableHead}>Job Type</th>

                      <th className={classes.tableHead}>Applied Date</th>

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
                            {item.fullName}
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
                            {item.jobType}
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
                              <Tooltip
                                title="View"
                                TransitionComponent={Zoom}
                                arrow
                              >
                                <Link to={`/external-viewDetail/${item.id}`}>
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

export default External;

// import React, { useEffect, useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Swal from "sweetalert2";

// //Bootstrap and jQuery libraries
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.min.js";
// //Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import $ from "jquery";

// import { RiDeleteBin6Fill } from "react-icons/ri";
// import { AiOutlineFundView } from "react-icons/ai";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import Tooltip from "@material-ui/core/Tooltip";
// import Zoom from "@material-ui/core/Zoom";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

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
//     alignItems: "center",
//   },
//   pageTabName: {
//     fontSize: "1.75rem",
//     fontWeight: "700",
//     marginLeft: "2.5rem",
//     color: "#3F51B5",
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
//     [theme.breakpoints.down("md")]: {
//       width: "74.5%",
//     },
//   },
//   ContentDateDiv: {
//     overflow: "scroll",
//     maxHeight: "80vh",
//     paddingBottom: "2rem",
//     overflowX: "hidden",
//     [theme.breakpoints.down("md")]: {
//       overflowX: "scroll",
//     },
//   },
//   dataTable: {
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

//   buttomDiv: {
//     display: "flex",
//     justifyContent: "center",
//   },

//   viewButton: {
//     marginTop: "0.3rem",
//     marginBottom: "0.3rem",
//     height: "1.3rem",
//     width: "1.3rem",
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
//       color: "#ff0000",
//     },
//   },
//   confirmBtn: {
//     marginLeft: "1rem",
//   },
//   text: {
//     backgroundColor: "yellow",
//   },
//   seenColor: {
//     backgroundColor: "#F5F7F7 ! important",
//     fontSize: "15px",
//     textAlign: "center",
//     whiteSpace: "nowrap",
//   },
//   noColor: {
//     color: "#000",
//     fontSize: "15px",
//     textAlign: "center",
//     whiteSpace: "nowrap",
//   },
// }));

// const External = () => {
//   const [data1, setData1] = useState([]);

//   //getting data from database
//   const fetchData = () => {
//     axios.get("http://localhost:4000/externalApplicant/").then((response) => {
//       if (response.data) {
//         setData1(response.data.data);
//       }
//     });
//   };
//   useEffect(() => {
//     setTimeout(() => {
//       $("#example").DataTable().destroy();
//       fetchData();
//     }, 100);
//   }, []);
//   // console.log(data1);
//   useEffect(() => {
//     $("#example").DataTable();
//   }, [data1]);

//   const classes = useStyle();

//   useEffect(() => {
//     $(document).ready(function () {
//       $("#example").DataTable();
//     });
//   });

//   //delete confirmation message
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
//         confirmButtonText: "Yes, delete it!",

//         cancelButtonText: "No, cancel!",
//         reverseButtons: true,
//       })
//       .then((result) => {
//         if (result.isConfirmed) {
//           axios
//             .delete("http://localhost:4000/externalApplicant/" + id, {
//               headers: { Authorization: localStorage.getItem("token") },
//               data: {
//                 id: id,
//               },
//             })
//             .then((res) => {
//               // console.log("deleted id" + id);
//               swalWithBootstrapButtons.fire(
//                 "Deleted!",
//                 "Your file has been deleted.",
//                 "success"
//               );
//               fetchData();
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
//             <span className={classes.pageTabName}>Applicant / External</span>
//           </div>
//           <div className={classes.MainContentDiv}>
//             <div className={classes.ContentDiv}>
//               <div className={classes.ContentDateDiv}>
//                 <Table id="example" className={classes.dataTable}>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell className={classes.tableHead}>Name</TableCell>
//                       <TableCell className={classes.tableHead} align="center">
//                         Email
//                       </TableCell>
//                       <TableCell className={classes.tableHead} align="center">
//                         Approval Status
//                       </TableCell>
//                       <TableCell className={classes.tableHead} align="center">
//                         Action
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {data1.map((item, index) => (
//                       <TableRow>
//                         <TableCell
//                           component="th"
//                           scope="row"
//                           style={{ whiteSpace: "nowrap" }}
//                           className={
//                             item.status == "seen"
//                               ? classes.seenColor
//                               : classes.noColor
//                           }
//                         >
//                           {item.fullName}
//                         </TableCell>
//                         <TableCell
//                           align="center"
//                           style={{ whiteSpace: "nowrap" }}
//                           className={
//                             item.status == "seen"
//                               ? classes.seenColor
//                               : classes.noColor
//                           }
//                         >
//                           {item.gmail}
//                         </TableCell>
//                         <TableCell
//                           align="center"
//                           style={{
//                             color:
//                               item.approvelStatus === "Accept"
//                                 ? "#24803c"
//                                 : item.approvelStatus === "Reject"
//                                 ? "#e60000"
//                                 : item.approvelStatus === "Hold"
//                                 ? "#FFC107"
//                                 : "black",
//                             fontWeight: "500",
//                           }}
//                           className={
//                             item.status == "seen"
//                               ? classes.seenColor
//                               : classes.noColor
//                           }
//                         >
//                           {item.approvelStatus}
//                         </TableCell>
//                         <TableCell
//                           align="center"
//                           style={{ whiteSpace: "nowrap" }}
//                           className={
//                             item.status == "seen"
//                               ? classes.seenColor
//                               : classes.noColor
//                           }
//                         >
//                           <div className={classes.buttomDiv}>
//                             <Tooltip
//                               title="View"
//                               TransitionComponent={Zoom}
//                               arrow
//                             >
//                               <Link to={`/applicant-detail/${item.id}`}>
//                                 <VisibilityIcon
//                                   className={classes.viewButton}
//                                 />
//                               </Link>
//                             </Tooltip>

//                             <Tooltip
//                               title="Detete"
//                               TransitionComponent={Zoom}
//                               arrow
//                             >
//                               <Link>
//                                 <RiDeleteBin6Fill
//                                   className={classes.deleteButton}
//                                   onClick={() => deletFunction(item.id)}
//                                 />
//                               </Link>
//                             </Tooltip>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//                 {/* <table
//                   id="example"
//                   data-ordering="false"
//                   className={classes.dataTable + " " + "table "}
//                 >
//                   <thead>
//                     <tr>
//                       <th className={classes.tableHead}>Name</th>

//                       <th className={classes.tableHead}>Email</th>
//                       <th className={classes.tableHead}>Phone</th>
//                       <th className={classes.tableHead}>Job Type</th>

//                       <th className={classes.tableHead}>Applied Date</th>

//                       <th className={classes.tableHead}>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data1.map((item, key) => {
//                       return (
//                         <tr>
//                           <td
//                             className={
//                               item.status == "seen"
//                                 ? classes.seenColor
//                                 : classes.noColor
//                             }
//                           >
//                             {item.fullName}
//                           </td>

//                           <td
//                             className={
//                               item.status == "seen"
//                                 ? classes.seenColor
//                                 : classes.noColor
//                             }
//                           >
//                             {item.gmail}
//                           </td>
//                           <td
//                             className={
//                               item.status == "seen"
//                                 ? classes.seenColor
//                                 : classes.noColor
//                             }
//                           >
//                             {item.phone}
//                           </td>
//                           <td
//                             className={
//                               item.status == "seen"
//                                 ? classes.seenColor
//                                 : classes.noColor
//                             }
//                           >
//                             {item.jobType}
//                           </td>

//                           <td
//                             className={
//                               item.status == "seen"
//                                 ? classes.seenColor
//                                 : classes.noColor
//                             }
//                           >
//                             {item.postedDate}
//                           </td>

//                           <td
//                             className={
//                               item.status == "seen"
//                                 ? classes.seenColor
//                                 : classes.noColor
//                             }
//                           >
//                             <div className={classes.buttomDiv}>
//                               <Tooltip
//                                 title="View"
//                                 TransitionComponent={Zoom}
//                                 arrow
//                               >
//                                 <Link to={`/applicant-detail/${item.id}`}>
//                                   <VisibilityIcon
//                                     className={classes.viewButton}
//                                   />
//                                 </Link>
//                               </Tooltip>

//                               <Tooltip
//                                 title="Detete"
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
//                 </table> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default External;
