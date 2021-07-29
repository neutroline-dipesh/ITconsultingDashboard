import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allQueriesData: null,
  error: null,
};

const getAllQueries = (state, action) => {
  return {
    ...state,
    allQueriesData: action.allQueriesData,
  };
};

const getAllQueriesFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALLQUERIES:
      return getAllQueries(state, action);

    case actionTypes.GET_ALLQUERIES_FAIL:
      return getAllQueriesFail(state, action);

    default:
      return state;
  }
};

export default reducer;
