import React from "react";
import CallHeader from "./CallHeader";
import {Outlet } from "react-router-dom";



function Calls() {
  return (
    <>
      <div className=" bg-slate-600 w-full h-screen scrollbar-none overflow-hidden ">
        <div className="max-w-screen-sm m-auto text-center  h-full bg-slate-900 text-slate-300 flex flex-col ">
          
          <CallHeader />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Calls;
