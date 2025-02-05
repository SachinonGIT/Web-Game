import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";



function Snapster() {
  
  return (
    <>
      <div className="box-border bg-slate-600 w-full h-screen">
        <div className="max-w-screen-sm m-auto text-center h-screen bg-slate-900 text-slate-300 flex flex-col overflow-hidden">
          <div className="p-2 text-slate-200/80 block sm:hidden border-b border-white/10">Snapster - The Social App</div>
          <div className="overflow-y-scroll scrollbar-none flex-1">
          <Outlet />
          
          </div>
          
          <header className="border-t border-white/20 flex justify-evenly items-center p-3">
            <div><Link to="/"><IoHome className="w-7 h-7 hover:text-slate-200" /></Link></div>
            <div><FaPlus className="w-8 h-8" /></div>
            <div><Link to="snapuser"><FaCircleUser className="w-7 h-7 hover:text-slate-200" /></Link></div>
          </header>
        </div>
      </div>
    </>
  );
}

export default Snapster;
