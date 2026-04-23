import React, { useContext } from "react";
import { valueContext } from "../../rootLayOut/RootLayOut";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  // console.log(children);
  const { user, loading } = useContext(valueContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return <div>Loading.....</div>;
  }

  if (!user || !user.email) {
    return (
      <Navigate state={{ from: location.pathname }} to="/signIn"></Navigate>
    );
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
