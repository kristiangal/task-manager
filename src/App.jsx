import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="font-sans h-screen">
      <Nav />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default App;
