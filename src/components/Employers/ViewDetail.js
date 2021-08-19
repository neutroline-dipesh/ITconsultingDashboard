import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import { ColorLensOutlined } from "@material-ui/icons";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import adimImage from "../../assets/images/profile.png";

import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import styled from "styled-components";
import { AiOutlineFileText } from "react-icons/ai";
import PersonIcon from "@material-ui/icons/Person";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import axios from "axios";
import ViewAttectment from "./viewAttechment";
const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: transparent;
    backdrop-filter: blur(0.9px);
  }
`;

const useStyle = makeStyles((theme) => ({
  DialogTitle: {
    display: "flex",
    backgroundColor: "#e6e6ff",
    borderBottom: "solid 1px #e3e6f0",
  },
  phoneAddressDiv: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "8rem",
  },
  message: {
    marginTop: "1.5rem",
    fontSize: "0.9rem",
    textAlign: "justify",
    border: "1px solid #e3e6f0",
    borderRadius: "5px",
    padding: "1rem",
    color: "black",
    // backgroundCoslor: "#F8F9FC",
    width: "32rem",
  },

  iconBodyDiv: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.8rem",
  },
  avatar: {
    backgroundColor: "#fff",
    color: "#4e73df",
    border: "1px solid #4e73df",
    height: "1.9rem",
    width: "1.9rem",
    marginRight: "0.5rem",
  },
  icon: {
    fontSize: "1.3rem",
  },
  dialogBody: {
    color: "black",
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "18%",
    position: "absolute",
    top: "3.5rem",
  },

  topDiv: {
    height: "10vh",
    backgroundColor: "#e6e6ff",
    deisplay: "flex",
  },
  nameMailDiv: {
    // width: "45vw",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    height: "5rem",
    paddingTop: "3rem",
    paddingLeft: "8rem",
  },
  Name: {
    color: "black",
    fontSize: "1rem",
  },
  mail: {
    color: "#3385ff",
    fontSize: "0.8rem",
  },
  messageTitle: {
    position: "absolute",
    marginTop: "9px",
    marginLeft: "10px",
    color: "#fffff",
    backgroundColor: "#b3c6ff",
    borderRadius: "10px",
    padding: "2px 10px",
  },
  attectmentBtn: {
    fontSize: "0.7rem",
  },
  attechmentIcon: {
    fontSize: "1rem",
    marginRight: "0.4rem",
  },
  doneButton: {
    color: "#fff",
    backgroundColor: "#2653d4",
    borderRadius: "20px",
    width: "5rem",
    height: "3.9vh",
    fontSize: "0.7rem",
    marginRight: "1.5rem",
    // boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      backgroundColor: "#2929a3",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // console.log(props);
  const seenFunction = (id) => {
    console.log(id);
    if (id) {
      axios
        .patch("http://localhost:4000/requestTalent/status/" + id, id, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data) {
            props.handleState();
          }

          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Tooltip title="View" TransitionComponent={Zoom} arrow>
        <Link>
          <VisibilityIcon
            className={classes.viewButton}
            onClick={handleClickOpen}
          />
        </Link>
      </Tooltip>
      <StyledDialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        className={classes.dialog}
      >
        <DialogTitle className={classes.DialogTitle}>
          <img src={adimImage} className={classes.image} />
          <div className={classes.nameMailDiv}>
            <span className={classes.Name}>
              {props.data.firstName + " " + props.data.lastName}
            </span>
            <span className={classes.mail}> {props.data.email}</span>
          </div>
        </DialogTitle>

        <DialogContent>
          <div className={classes.phoneAddressDiv}>
            <DialogContentText
              className={classes.iconBodyDiv}
              style={{ minWidth: "50%" }}
            >
              <span className={classes.dialogBody}>
                <Avatar className={classes.avatar}>
                  <HiOutlineOfficeBuilding className={classes.icon} />
                </Avatar>
                {props.data.companyName}
              </span>
            </DialogContentText>
            <DialogContentText
              className={classes.iconBodyDiv}
              style={{ marginLeft: "-2.5rem" }}
            >
              <span className={classes.dialogBody}>
                <Avatar className={classes.avatar}>
                  <WorkOutlineIcon className={classes.icon} />
                </Avatar>{" "}
                {props.data.jobTitle}
              </span>
            </DialogContentText>
          </div>
          <div className={classes.phoneAddressDiv}>
            <DialogContentText
              className={classes.iconBodyDiv}
              style={{ minWidth: "50%" }}
            >
              <span className={classes.dialogBody}>
                <Avatar className={classes.avatar}>
                  <FiPhoneCall className={classes.icon} />
                </Avatar>
                {props.data.phone}
              </span>
            </DialogContentText>
            <DialogContentText
              className={classes.iconBodyDiv}
              style={{ marginLeft: "-2.5rem" }}
            >
              <span className={classes.dialogBody}>
                <Avatar className={classes.avatar}>
                  <FaRegAddressCard className={classes.icon} />
                </Avatar>{" "}
                {props.data.city + " , " + props.data.country}
              </span>
            </DialogContentText>
          </div>

          <div className={classes.messageTitle}>Message</div>
          <DialogContentText className={classes.message}>
            {props.data.message}
          </DialogContentText>

          {props.data.attachment ? (
            <ViewAttectment attechmnet={props.data.attachment} />
          ) : (
            ""
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              seenFunction(props.data.id);
              handleClose();
            }}
            color="primary"
            className={classes.doneButton}
          >
            Done
          </Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Slide from "@material-ui/core/Slide";
// import CloseIcon from "@material-ui/icons/Close";
// import { ColorLensOutlined } from "@material-ui/icons";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import Tooltip from "@material-ui/core/Tooltip";
// import Zoom from "@material-ui/core/Zoom";
// import IconButton from "@material-ui/core/IconButton";
// import adimImage from "../../assets/images/admin2.png";

// import { Link } from "react-router-dom";
// import Avatar from "@material-ui/core/Avatar";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaAddressCard } from "react-icons/fa";
// import styled from "styled-components";
// import { AiOutlineFileText } from "react-icons/ai";
// const StyledDialog = styled(Dialog)`
//   .MuiBackdrop-root {
//     background-color: transparent;
//     backdrop-filter: blur(0.9px);
//   }
// `;

// const useStyle = makeStyles((theme) => ({
//   DialogTitle: {
//     display: "flex",
//     backgroundColor: "#e6e6ff",
//     borderBottom: "solid 1px #e3e6f0",
//   },
//   phoneAddressDiv: {
//     display: "flex",
//     flexDirection: "column",
//     paddingLeft: "10rem",
//   },
//   message: {
//     // marginTop: "1rem",
//     fontSize: "0.9rem",
//     textAlign: "justify",
//     border: "1px solid #e3e6f0",
//     borderRadius: "5px",
//     padding: "1rem",
//     color: "black",
//     // backgroundCoslor: "#F8F9FC",
//     width: "32rem",
//   },

//   // viewButton: {
//   //   marginTop: "0.3rem",
//   //   marginBottom: "0.3rem",
//   //   height: "1.3rem",
//   //   width: "1.3rem",
//   //   color: "#04A8F6",
//   //   "&:hover": {
//   //     color: "#4e73df",
//   //   },
//   // },

//   iconBodyDiv: {
//     display: "flex",
//     alignItems: "center",
//     fontSize: "0.8rem",
//   },
//   // avatar: {
//   //   backgroundColor: "#fff",
//   //   color: "#4e73df",
//   //   border: "1px solid #4e73df",
//   //   height: "2rem",
//   //   width: "2rem",
//   // },
//   // icon: {
//   //   fontSize: "1rem",
//   // },
//   dialogBody: {
//     color: "black",
//   },
//   image: {
//     width: "25%",
//     position: "absolute",
//     top: "2.5rem",
//   },

//   topDiv: {
//     height: "10vh",
//     backgroundColor: "#e6e6ff",
//     deisplay: "flex",
//   },
//   nameMailDiv: {
//     // width: "45vw",
//     // backgroundColor: "red",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     // alignItems: "center",
//     height: "5rem",
//     paddingTop: "3rem",
//     paddingLeft: "10rem",
//   },
//   Name: {
//     color: "black",
//     fontSize: "1rem",
//   },
//   mail: {
//     color: "#3385ff",
//     fontSize: "0.8rem",
//   },
//   attectmentBtn: {
//     fontSize: "0.7rem",
//   },
//   attechmentIcon: {
//     fontSize: "1rem",
//     marginRight: "0.4rem",
//   },
//   doneButton: {
//     color: "#fff",
//     backgroundColor: "#2653d4",
//     borderRadius: "20px",
//     width: "5rem",
//     height: "3.9vh",
//     fontSize: "0.7rem",
//     marginRight: "1.5rem",
//     // boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
//     "&:hover": {
//       backgroundColor: "#2929a3",
//     },
//   },
// }));

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function AlertDialogSlide(props) {
//   const classes = useStyle();
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   // console.log(props);
//   return (
//     <div>
//       <Tooltip title="View" TransitionComponent={Zoom} arrow>
//         <Link>
//           <VisibilityIcon
//             className={classes.viewButton}
//             onClick={handleClickOpen}
//           />
//         </Link>
//       </Tooltip>
//       <StyledDialog
//         onClose={handleClose}
//         aria-labelledby="simple-dialog-title"
//         open={open}
//         className={classes.dialog}
//       >
//         <DialogTitle className={classes.DialogTitle}>
//           <img src={adimImage} className={classes.image} />
//           <div className={classes.nameMailDiv}>
//             <span className={classes.Name}>
//               {" "}
//               {props.data.firstName + " " + props.data.lastName}
//             </span>
//             <span className={classes.mail}> {props.data.email}</span>
//           </div>
//         </DialogTitle>

//         <DialogContent>
//           <div className={classes.phoneAddressDiv}>
//             <DialogContentText className={classes.iconBodyDiv}>
//               <span className={classes.dialogBody}>
//                 Company Name: {props.data.companyName}
//               </span>
//             </DialogContentText>
//             <DialogContentText className={classes.iconBodyDiv}>
//               <span className={classes.dialogBody}>
//                 Job Title: {props.data.jobTitle}
//               </span>
//             </DialogContentText>
//             <DialogContentText
//               className={classes.iconBodyDiv}
//               style={{ minWidth: "50%" }}
//             >
//               <span className={classes.dialogBody}>
//                 Phone: {props.data.phone}
//               </span>
//             </DialogContentText>

//             <DialogContentText className={classes.iconBodyDiv}>
//               <span className={classes.dialogBody}>
//                 Address: {props.data.city + " , " + props.data.country}
//               </span>
//             </DialogContentText>
//           </div>

//           <span>Message</span>
//           <DialogContentText className={classes.message}>
//             {props.data.message}
//           </DialogContentText>
//           {props.data.attachment ? (
//             <Button
//               variant="outlined"
//               color="primary"
//               href="#outlined-buttons"
//               size="small"
//               className={classes.attectmentBtn}
//             >
//               <AiOutlineFileText className={classes.attechmentIcon} />
//               Attechment
//             </Button>
//           ) : (
//             ""
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button
//             onClick={handleClose}
//             color="primary"
//             className={classes.doneButton}
//           >
//             Done
//           </Button>
//         </DialogActions>
//       </StyledDialog>
//     </div>
//   );
// }
