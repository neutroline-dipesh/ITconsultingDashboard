import * as actionTypes from './actionTypes';
import axios from 'axios';
const getContractApplicantStart= () =>{
    return{
        type: actionTypes.GET_CONTRACTAPPLICANT_START,
    };
};

const getContractApplicantSuccess= (data) =>{
    console.log(data);
    return{
        type: actionTypes.GET_CONTRACTAPPLICANT_SUCCESS,
        payload: data,
    };
};

const getContractApplicantFail= (error) =>{
    return{
        type: actionTypes.GET_CONTRACTAPPLICANT_FAIL,
        payload: error,
    };
};

export const getContractApplicant = () =>{
    return (dispatch) =>{
        dispatch(getContractApplicantStart());
        axios.get("http://localhost:4000/internal")
        .then(response =>{
            console.log(response.data);
            dispatch(getContractApplicantSuccess(response.data.data));
        }).catch(err => {
            // console.log(err);
            dispatch(getContractApplicantFail(err));
        })
    }
}


