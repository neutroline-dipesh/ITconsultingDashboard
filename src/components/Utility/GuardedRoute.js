import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
  console.log("Component"+Component);
  console.log("Auth"+ auth);
  console.log(rest); 
  return(
  <Route
    {...rest}
    exact
    render={(props) =>
      auth === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
  )
  };

export default GuardedRoute;
