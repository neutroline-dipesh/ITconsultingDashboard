import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getAllQueries = (allQueriesData) => {
  return {
    type: actionTypes.GET_ALLQUERIES,
    allQueriesData: allQueriesData,
  }; 
};

export const getAllQueriesFail = (error) => {
  return {
    type: actionTypes.GET_ALLQUERIES_FAIL,
    error: error,
  };
};

export const allQueries = () => {
  return (dispatch) => {
    // dispatch(getAllQueries());
    axios
      .get("http://localhost:4000/allQueries/")
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          dispatch(getAllQueries(response.data.data));
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch(getAllQueriesFail(error.response.data.message));
      });
  };
};
