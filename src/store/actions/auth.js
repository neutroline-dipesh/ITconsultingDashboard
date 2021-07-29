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
  localStorage.removeItem('expirationDate');
  return{
    type: actionTypes.AUTH_LOGOUT
  };
};

export const setAuthRedirectPath = (path) =>{
  return{
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const checkAuthTimeout = (expirationTime) =>{
  console.log(expirationTime);
  return dispatch => {
    setTimeout(() =>{
      dispatch(logout());
    }, expirationTime * 3600000);
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
        console.log(response);
        const expirationDate = new Date(new Date().setHours(new Date().getHours() + parseInt(response.data.expHour)));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('user',response.data.name);
        dispatch(authSuccess(response.data.token, response.data.name));
        dispatch(checkAuthTimeout(response.data.expHour));
      })
      .catch((error) => {
        dispatch(authFail(error.response));
      });
  };
};


export const authCheckState = () => {
  return dispatch =>{
    const token = localStorage.getItem('token');
    if(!token){
      console.log('there is no token');
    }else{
      const user = localStorage.getItem('user');
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      console.log(expirationDate);
      if(expirationDate <= new Date()){
        console.log(expirationDate);
         dispatch(logout());
      } else{
          dispatch(authSuccess(token,user));
         dispatch(checkAuthTimeout(expirationDate.getHours() - new Date().getHours()));

      }
      
    }
  }
}