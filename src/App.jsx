import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import Mobile_Nav from "./Pages/Mobile_Nav/Mobile_Nav";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow overflow-auto pb-16">
        {" "}
        {/* Add padding at the bottom */}
        <Outlet />
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Mobile_Nav />
      </div>
    </div>
  );
}

export default App;
