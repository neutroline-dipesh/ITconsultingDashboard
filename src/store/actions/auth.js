import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    user: user,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () =>{
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return{
    type: actionTypes.AUTH_LOGOUT
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/user/login", authData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user',response.data.name);
        dispatch(authSuccess(response.data.token, response.data.name));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.message));
      });
  };
};

export const authCheckState = () => {
  return dispatch =>{
    const token = localStorage.getItem('token');
    if(!token){
      dispatch(logout());
    }else{
      const user = localStorage.getItem('user');
      dispatch(authSuccess(token,user));
    }
  }
}