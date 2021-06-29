import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import FullEditor from "ckeditor5-build-full";

// import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
    // paddingTop: "1rem",
  },
  ContentDateDiv: {
    overflow: "scroll",
    maxHeight: "80vh",
    // paddingTop: "2rem",
  },
  form: {
    margin: "1rem",
    paddingTop: "1rem",
  },
  JobTitle: {
    // height: "0.5rem !important",
    // marginTop: "2rem",
    // marginBottom: "6rem",
  },
  JobSubtitle: {
    marginTop: "2rem",
  },
  DepartmentJobTypeDiv: {
    display: "flex",
  },
  Department: {
    marginTop: "2rem",
    width: "48%",
    // height: "6vh",
  },
  JobType: {
    // marginLeft: "35rem",
    // marginTop: "-2.4rem",
    marginTop: "2rem",
    marginLeft: "3rem",
    width: "48%",
    // height: "6vh",
  },
  CountryStateCityDiv: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
  },
  Country: {
    width: "30%",
  },
  State: {
    width: "30%",
  },
  City: {
    width: "30%",
  },
  DescriptionDiv: {
    marginTop: "1rem",
  },
  ckeditor: {
    // height: "50vh",
  },
  saveButtonDiv: {
    // display: "flex",
    // alignContent: "flex-end",
  },
  save: {
    backgroundColor: "#04A8F6",
    borderRadius: "20px",
    fontSize: "0.9rem",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",
    width: "11%",
    marginTop: "1rem",
    float: "right",
    marginBottom: "1rem",
  },
}));

const Addjobs = () => {
  const classes = useStyle();
  const editVariable = {
    // plugins: [ImageInsert],
    // toolbar: ["insertImage"],
  };

  return (
    <>
      <Sidebar />
      <div className={classes.root}>
        <div className={classes.maindiv}>
          <div className={classes.PageTabDiv}>
            <span className={classes.pageTabName}>Add Jobs</span>
          </div>
          <div className={classes.MainContentDiv}>
            <div className={classes.ContentDiv}>
              <div className={classes.ContentDateDiv}>
                <form className={classes.form}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Job title"
                    />
                    <input
                      type="text"
                      className={"form-control" + " " + classes.JobSubtitle}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Job Subtitle"
                    />
                    <div className={classes.DepartmentJobTypeDiv}>
                      <select
                        className={"form-select" + " " + classes.Department}
                        id="exampleFormControlSelect1"
                      >
                        <option value="" selected disabled>
                          Department
                        </option>
                        <option>Office Administration</option>
                        <option>Human Resource</option>
                        <option>Sales/Marketing</option>
                        <option>Technology</option>
                      </select>
                      <select
                        className={"form-select" + " " + classes.JobType}
                        id="exampleFormControlSelect1"
                      >
                        <option value="" selected disabled>
                          Job type
                        </option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Contract</option>
                      </select>
                    </div>
                    <div className={classes.CountryStateCityDiv}>
                      <select
                        className={"form-select" + " " + classes.Country}
                        id="exampleFormControlSelect1"
                      >
                        <option value="" selected disabled>
                          Country
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <select
                        className={"form-select" + " " + classes.State}
                        id="exampleFormControlSelect1"
                      >
                        <option value="" selected disabled>
                          State/Province
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <select
                        className={"form-select" + " " + classes.City}
                        id="exampleFormControlSelect1"
                      >
                        <option value="" selected disabled>
                          City
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className={classes.DescriptionDiv}>
                      <span>Description</span>
                      <CKEditor
                        className={classes.ckeditor}
                        id="editor1"
                        editor={FullEditor}
                        // config={editVariable}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log({ event, editor, data });
                        }}
                      />
                    </div>
                    <div className={classes.saveButtonDiv}>
                      <button
                        type="submit"
                        className={"btn btn-primary" + " " + classes.save}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addjobs;
