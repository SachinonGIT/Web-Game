import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import UrlBar from "./UrlBar/UrlBar";
import MainBox from "./searchComp/MainBox";

function Browser() {
  
  
  return (
    <>
    
      <div className="   bg-slate-600 w-full  backdrop-blur-md min-h-screen ">
        <div className=" max-w-screen-sm m-auto text-center bg-slate-900 text-slate-300 py-2 min-h-screen">
        <UrlBar/>
        
        
          <div className="m-2 sm:m-4 p-2 flex flex-col gap-7">
            {/* map div start */}
            <Link to ="/browser/map" > <MainBox boxImg='./map.webp' boxTitle={"Area Map"} boxMeta={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ex maxime hic, nam consectetur in eius illum voluptates sit recusandae? `} boxUrl={"https://www.map.com//"}/>
            </Link>
            {/* map div end */}
           
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Browser;
