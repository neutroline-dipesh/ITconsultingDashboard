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
    marginLeft: "5rem",
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

// const theme = createMuiTheme({
//   overrides: {
//     MuiTable: {
//       root: {
//         borderCollapse: "separate",
//         borderSpacing: "0 10px",
//         marginTop: "-10px",
//       },
//     },
//     MuiTableRow: {
//       root: {
//         borderRadius: 40,
//         border: "2px solid",
//         backgroundColor: "green",
//       },
//     },
//   },
// });

export default function SimpleTabs(props) {
  const classes = useStyles();
  // const theme = createMuiTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [alignment, setAlignment] = React.useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className={classes.tabs}
        >
          <Tab label="Basic Details" {...a11yProps(0)} />
          <Tab label="Resume" {...a11yProps(1)} />
          <Tab label="Cover Letter" {...a11yProps(2)} />
          <ToggleButtonGroup
            className={classes.toogleButton}
            value={alignment}
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
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            aria-label="simple table"

            // style={{ borderCollapse: "separate", borderSpacing: "0px 10px" }}
          >
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
              <TableRow
                style={{ background: "#FFF", borderLeft: "3px solid blue" }}
              >
                <TableCell component="th" scope="row"  style={{textAlign:"center"}}>
                  Applied Job:
                </TableCell>
                <TableCell  align="left">{props.data.jobTitle}</TableCell>
              </TableRow>
              <TableRow style={{ background: "#F6F7FA", }}>
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
                  style={{ width: "40%", marginBlockEnd: "20px" , marginTop:"-10px", textAlign:"center"}}
                >
                  Seniority Level:
                </TableCell>
                <TableCell  align="left">{props.data.senioritylevel}</TableCell>
              </TableRow>
              <TableRow style={{ background: "#F6F7FA",  }}>
                <TableCell
                                  height="1px"

                  component="th"
                  scope="row"
                  style={{ border: "none", height:"2px" }}
                ></TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  height="1px"
                  style={{ border: "none", height:"2px" }}
                ></TableCell>
              </TableRow>
              <TableRow
                style={{ background: "#FFF", borderLeft: "3px solid blue",  }}
              >
                <TableCell component="th" scope="row" style={{textAlign:"center"}}>
                  Expected Salary($):
                </TableCell>
                <TableCell align="left" >{props.data.expectedSalary} </TableCell>
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
              <TableRow
                style={{ background: "#FFF", borderLeft: "3px solid blue" }}
              >
                <TableCell  style={{textAlign:"center"}} component="th" scope="row">
                  Salary Type:
                </TableCell>
                <TableCell  align="left">{props.data.salaryType}</TableCell>
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
              <TableRow
                style={{ background: "#FFF", borderLeft: "3px solid blue" }}
              >
                <TableCell  style={{textAlign:"center"}}component="th" scope="row">
                  Message:
                </TableCell>
                <TableCell  align="left">{props.data.message}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <iframe
          src={props.data.resume}
          style={{
            width: "106.4%",
            height: "70.5vh",
            marginLeft: "-1.5rem",
            marginTop: "-1.5rem",
            marginBottom: "-2rem",
          }}
        ></iframe>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <iframe
          src={props.data.coverletter}
          style={{
            width: "106.4%",
            height: "70.5vh",
            marginLeft: "-1.5rem",
            marginTop: "-1.5rem",
            marginBottom: "-2rem",
          }}
        >
          {" "}
        </iframe>
      </TabPanel>
    </div>
  );
}
