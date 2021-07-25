import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getAllJobsStart = () =>{
    return{
        type: actionTypes.GET_ALLJOBS_START,
    }
}
export const getAllJobsSuccess = (data) =>{
    return{
        type: actionTypes.GET_ALLJOBS_SUCCESS,
        data: data,
    };
};

export const getAllJobsFail = (err) =>{
    return{
        type: actionTypes.GET_ALLJOBS_FAIL,
        err: err,
    };
};

export const getAllJobs = () => {
    return(dispatch) => {
        dispatch(getAllJobsStart());
        axios.get("http://localhost:4000/allJobs/")
        .then(response =>{
            if(response.data){
                dispatch(getAllJobsSuccess(response.data.data));
            }
        }).catch(err => {
            console.log(err);
            dispatch(getAllJobsFail(err));
        })
    }
}
