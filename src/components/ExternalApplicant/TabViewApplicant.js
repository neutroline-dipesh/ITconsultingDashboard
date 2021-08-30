import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  tabs: {
    backgroundColor: "#e6e6ff",
    color: "black",

    // height: "10vh",
    // width: "60%",
  },
  toogleButton: {
    // marginRight: "2rem",
    height: "4vh",
    // border: "solid 1px ",
    marginTop: "0.7rem",
    marginRight: "1.4rem",
  },
  acceptToggleBtn: {
    backgroundColor: "#28A745",
    fontSize: "0.7rem",

    color: "#fff",
    "&:hover": {
      backgroundColor: "#1f7a1f",
      color: "#fff",
    },
    "&:active": {
      backgroundColor: "#fff",
      color: "#ffff",
    },
  },
  rejectToggleBtn: {
    marginLeft: "15px",
    fontSize: "0.7rem",
    backgroundColor: "#DC3545",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#b30000",
      color: "#fff",
    },
  },
  blacklistToggleBtn: {
    backgroundColor: "#FFC107",
    fontSize: "0.7rem",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#b38f00",
      color: "#fff",
    },
  },
  ListItemLeft: {
    // width: "50%",
    textAlign: "justify",
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    // border: "solid 1px",
    // backgroundColor: "red",
    // marginRight: "1rem",
  },
  listItemTitle: {
    width: "10rem",
    // backgroundColor: "red",
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  // const theme = createMuiTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [approvelStatus, setApprovelStatus] = React.useState(" ");
  const applicantId = props.data.id;

  const handleAlignment = (event, newAlignment) => {
    setApprovelStatus(newAlignment);
    console.log(approvelStatus);
    console.log(applicantId);

    const data = {
      approvelStatus: newAlignment,
    };
    console.log(data);
    if (applicantId) {
      axios
        .patch(
          "http://localhost:4000/externalApplicant/status/approvel/" +
            applicantId,
          data,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#e6e6ff",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            className={classes.tabs}
          >
            <Tab label="Basic Details" {...a11yProps(0)} />
            <Tab label="Resume" {...a11yProps(1)} />
            <Tab label="Cover Letter" {...a11yProps(2)} />
          </Tabs>

          <ToggleButtonGroup
            className={classes.toogleButton}
            value={approvelStatus}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton
              className={classes.acceptToggleBtn}
              value="Accept"
              aria-label="left aligned"
            >
              Accept
            </ToggleButton>
            <ToggleButton
              className={classes.rejectToggleBtn}
              value="Reject"
              aria-label="centered"
            >
              Reject
            </ToggleButton>
            <ToggleButton
              className={classes.blacklistToggleBtn}
              value="Hold"
              aria-label="right aligned"
            >
              Hold
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </AppBar>

      <TabPanel value={value} index={0}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            {/* <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
              {/* <TableRow
                style={{ background: "#FFF", borderLeft: "3px solid blue" }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{ textAlign: "center" }}
                >
                  Applied Job:
                </TableCell>
                <TableCell align="left">{props.data.jobTitle}</TableCell>
              </TableRow> */}
              <TableRow style={{ background: "#F6F7FA" }}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ border: "none" }}
                ></TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ border: "none" }}
                ></TableCell>
              </TableRow>

              <TableRow
                style={{ background: "#FFF", borderLeft: "3px solid blue" }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    width: "40%",
                    marginBlockEnd: "20px",
                    marginTop: "-10px",
                    textAlign: "center",
                  }}
                >
                  Seniority Level:
                </TableCell>
                <TableCell align="left">{props.data.jobType}</TableCell>
              </TableRow>
              <TableRow style={{ background: "#F6F7FA" }}>
                <TableCell
                  height="1px"
                  component="th"
                  scope="row"
                  style={{ border: "none", height: "2px" }}
                ></TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  height="1px"
                  style={{ border: "none", height: "2px" }}
                ></TableCell>
              </TableRow>
              {/* <TableRow
                style={{ background: "#FFF", borderLeft: "3px solid blue" }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{ textAlign: "center" }}
                >
                  Expected Salary($):
                </TableCell>
                <TableCell align="left">{props.data.expectedSalary} </TableCell>
              </TableRow> */}
              {/* <TableRow style={{ background: "#F6F7FA" }}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ border: "none" }}
                ></TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ border: "none" }}
                ></TableCell>
              </TableRow> */}
              {/* <TableRow
                style={{ background: "#FFF", borderLeft: "3px solid blue" }}
              >
                <TableCell
                  style={{ textAlign: "center" }}
                  component="th"
                  scope="row"
                >
                  Salary Type:
                </TableCell>
                <TableCell align="left">{props.data.salaryType}</TableCell>
              </TableRow> */}

              <TableRow
                style={{ background: "#FFF", borderLeft: "3px solid blue" }}
              >
                <TableCell
                  style={{ textAlign: "center" }}
                  component="th"
                  scope="row"
                >
                  Message:
                </TableCell>
                <TableCell align="left">{props.data.message}</TableCell>
              </TableRow>
              <TableRow style={{ background: "#F6F7FA" }}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ border: "none" }}
                ></TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ border: "none" }}
                ></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <iframe
          src={props.data.resume}
          style={{
            width: "106.4%",
            height: "70.5vh",
            marginLeft: "-1.5rem",
            marginTop: "-1.5rem",
            marginBottom: "-2rem",
          }}
          allow="autoplay"
        ></iframe> */}
        <iframe
          style={{
            width: "106.4%",
            height: "70.5vh",
            marginLeft: "-1.5rem",
            marginTop: "-1.5rem",
            marginBottom: "-2rem",
          }}
          src={
            "https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?id=" +
            props.data.resume
          }
          // src="https://drive.google.com/file/d/1ho_-7kTqYLAg5frKL8JPCnWk9k-TlVcn/preview"
          //working link
          // src="https://docs.google.com/document/d/170w6GfHTr_G6oXkRoSbhungXWWGlNvU9/pub?embedded=true"
        ></iframe>
        {/* <a href={props.data.resume}>Resume</a> */}
        {/* <iframe
          src="https://drive.google.com/file/d/1cD_LdChxVf8e3qWA-BVrnFJDQ_dm_T3a/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <iframe
          style={{
            width: "106.4%",
            height: "70.5vh",
            marginLeft: "-1.5rem",
            marginTop: "-1.5rem",
            marginBottom: "-2rem",
          }}
          src={
            "https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?id=" +
            props.data.coverletter
          }
          // src="https://drive.google.com/file/d/1ho_-7kTqYLAg5frKL8JPCnWk9k-TlVcn/preview"
          //working link
          // src="https://docs.google.com/document/d/170w6GfHTr_G6oXkRoSbhungXWWGlNvU9/pub?embedded=true"
        ></iframe>
      </TabPanel>
    </div>
  );
}
