import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import kaushalImg from "../../../Images/kaushal.jpg";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowRoundBack } from "react-icons/io";

function Snapster() {
  const mainUrl = useParams()
   // Check localStorage for saved state or default to true
   const [backBtn, setBackBtn] = useState(false);

   useEffect(()=>{
   
    if(mainUrl.ParamId === undefined){
      setBackBtn(true)
    }
    else{
      setBackBtn(false)
    }
   },[mainUrl,mainUrl.ParamId])
  
 
  return (
    <>
      <div className="box-border bg-slate-600 w-full h-screen">
        <div className="max-w-screen-sm m-auto text-center h-screen bg-slate-900 text-slate-300 flex flex-col overflow-hidden">
          <header className="border-b border-white/20 flex justify-between items-center p-2 px-5">
            <div className="w-9 rounded-full overflow-hidden">
              {backBtn ? (
                <Link to="/snapster/kishortokaushal">
                  <img src={kaushalImg} alt="dp" />
                </Link>
              ) : (
                <Link to="/snapster">
                  <IoMdArrowRoundBack className="w-9 h-9"  />
                </Link>
              )}
            </div>
            <div>
              <p className="font-semibold">Snapster - The Social App</p>
            </div>
            <div>
              <Link to="/">
                <RxCross2 className="w-9 h-9 hover:text-slate-200" />
              </Link>
            </div>
          </header>

          <div className=" flex flex-col overflow-hidden flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )};

export default Snapster;
