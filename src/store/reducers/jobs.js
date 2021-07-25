import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const getAllJobsStart = (state) =>{
    return{
        ...state,
        loading: true,
    };
};

const getAllJobsSuccess = (state, action) =>{
    return{
        ...state,
        data: action.data,
        loading: false,
    };
};

const getAllJobsFail = (state, action) =>{
    return{
        ...state,
        error: action.err,
        loading: false,
    }
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_ALLJOBS_START:
            return getAllJobsStart(state);
        case actionTypes.GET_ALLJOBS_SUCCESS:
            return getAllJobsSuccess(state,action);
        case actionTypes.GET_ALLJOBS_FAIL:
            return getAllJobsFail(state,action);
        default:
            return state;
    }
};

export default reducer;
