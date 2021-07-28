import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data:null,
    error: null,
    loading: false,
};

const getContractApplicantStart= (state,action) =>{
    return{
        ...state,
        loading: true,
    };
};

const getContractApplicantSuccess = (state, action) =>{
    return{
        ...state,
        data: action.payload,
        loading: false,
    };
};

const getContractApplicantFail = (state, action) =>{
    return{
        ...state,
        error: action.payload,
        loading: false,
    };
};


const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_CONTRACTAPPLICANT_START:
            return getContractApplicantStart(state, action);
        case actionTypes.GET_CONTRACTAPPLICANT_SUCCESS:
            return getContractApplicantSuccess(state,action);
        case actionTypes.GET_CONTRACTAPPLICANT_FAIL:
            return getContractApplicantFail(action,state);
        default:
            return state;
    }
}
export default reducer;