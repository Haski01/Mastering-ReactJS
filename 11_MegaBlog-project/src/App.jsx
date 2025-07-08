// import "./App.css";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import authService from "./appwrite/authenticationService";
import { Header, Footer } from "./components";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        // userData ? dispatch(login(userData)) : dispatch(logout);

        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  // condiotional rendering
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-300">
      <div className="w-full block">
        <Header />
        <main>TODO: {/* <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="text-center text-3xl bg-black text-white">
      ......Loading
    </div>
  );
}

export default App;
