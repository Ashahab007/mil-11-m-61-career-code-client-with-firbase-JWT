import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router";
import { useLocation } from "react-router";


const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  console.log(location); //in console u will find (pathname: /jobsapply/6834a62b328bd6a7f870489a)
  console.log(location.pathname);

  if (loading) {
    return <span className="loading loading-spinner text-warning"></span>;
  }
 
  if (!user) {
    return <Navigate to="/signin" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
