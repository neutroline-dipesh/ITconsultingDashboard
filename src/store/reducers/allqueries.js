import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const getAllQueriesStart = (state) =>{
    return{
        ...state,
        loading: true,
    };
};

const getAllQueriesSuccess = (state, action) =>{
    return{
        ...state,
        data: action.data,
        loading: false,
    };
};

const getAllQueriesFail = (state, action) =>{
    return{
        ...state,
        error: action.err,
        loading: false,
    }
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_ALLQUERIES_START:
            return getAllQueriesStart(state);
        case actionTypes.GET_ALLQUERIES_SUCCESS:
            return getAllQueriesSuccess(state,action);
        case actionTypes.GET_ALLQUERIES_FAIL:
            return getAllQueriesFail(state,action);
        default:
            return state;
    }
};

export default reducer;
