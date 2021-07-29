import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getAllQueriesStart= () =>{
    return{
        type: actionTypes.GET_ALLQUERIES_START,
    }
}
export const getAllQueriesSuccess = (data) =>{
    return{
        type: actionTypes.GET_ALLQUERIES_SUCCESS,
        data: data,
    };
};

export const getAllQueriesFail = (err) =>{
    return{
        type: actionTypes.GET_ALLQUERIES_FAIL,
        err: err,
    };
};

export const getAllQueries = () => {
    return(dispatch) => {
        dispatch(getAllQueriesStart());
        axios.get("http://localhost:4000/allQueries/")
        .then(response =>{
            if(response.data){
                dispatch(getAllQueriesSuccess(response.data.data));
            }
        }).catch(err => {
            console.log(err);
            dispatch(getAllQueriesFail(err));
        })
    }
}
