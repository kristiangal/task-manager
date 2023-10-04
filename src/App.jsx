import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="font-sans h-screen">
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
