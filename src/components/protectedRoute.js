import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  if (auth.isLoggedIn) {
    return (
      <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    );
  } else return <Redirect to={"/"}></Redirect>;
};

export default ProtectedRoute;
