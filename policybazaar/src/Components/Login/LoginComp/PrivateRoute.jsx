import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuth } = useSelector((store) => store);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
export default PrivateRoute;
