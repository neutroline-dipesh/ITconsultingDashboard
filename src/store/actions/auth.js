import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, name) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userName: name
    };
};

export const authFail = (error) =>{
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) =>{
    return dispatch =>{
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        };
        axios.post('http://localhost:4000/user/login', authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.token, response.data.name));
        })
        .catch(error =>{
            console.log(error);
            dispatch(authFail(error.message));
        })
    };
};