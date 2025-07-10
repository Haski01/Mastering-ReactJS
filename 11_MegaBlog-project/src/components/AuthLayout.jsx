// this file is for protecting pages/routes

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // easy method of below code

    /*
    if (authStatus ===true){
        navigate("/")
    } else if (authStatus === false) {
        navigate("/login")
     }
    */

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
  }, [authStatus, navigate, authentication]);

  return loader ? (
    <h1 className="bg-black text-white text-3xl text-center">Loading...</h1>
  ) : (
    { children }
  );
}

export default AuthLayout;
