import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoBatteryFullOutline } from "react-icons/io5";
import { AiFillSignal } from "react-icons/ai";
import { FaCamera, FaLightbulb, FaMusic } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdImage } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { IoMdBookmarks } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import StausBar from "./StausBar";

function Desktop() {
  const [isStatusBarOpen, setIsStatusBarOpen] = useState(false);
  const handleStatusBar = () => {
    setIsStatusBarOpen(true)
  }
  console.log(isStatusBarOpen)
  return (
    <>
      <div className=" bg-slate-600 w-full h-screen backdrop-blur-md overflow-y-scroll scrollbar-none">
        <div className="max-w-screen-sm m-auto text-center overflow-y-scroll scrollbar-none h-screen bg-slate-900 text-slate-300 flex flex-col">
          {/* this is status bar startCode */}
          <div className="shadow-sm shadow-white/10 rounded-lg h-10 flex justify-between  items-center px-4 cursor-pointer" >
            {/* <div className="flex justify-center items-center gap-2">2:30</div>
            <div className="flex justify-center items-center gap-2">
              <AiFillSignal />
              <IoBatteryFullOutline className="text-2xl" />
            </div> */}
          </div>

          {/* this is status bar endCode and App Area start */}
         <StausBar handleOpen={isStatusBarOpen} />
          <div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 p-4  w-full h-fit">
              <Link
                to="/chats"
                className="flex flex-col items-center gap-2 p-2 cursor-pointer"
              >
                <IoMdChatbubbles className="bg-cyan-800 hover:bg-cyan-700 p-4 h-16 w-16 rounded-md" />
                <span>Chats</span>
              </Link>
              <Link
                to="/call"
                className="flex flex-col items-center gap-2 p-2 cursor-pointer"
              >
                <IoCall className="bg-gray-700 hover:bg-gray-600 p-4 h-16 w-16 rounded-md" />
                <span>Call</span>
              </Link>
              <Link
                to="/gallery"
                className="flex flex-col items-center gap-2 p-2 cursor-pointer"
              >
                <MdImage className="bg-fuchsia-900 hover:bg-fuchsia-800 p-4 h-16 w-16 rounded-md" />
                <span>Gallery</span>
              </Link>
              <Link
                to="/snapster"
                className="flex flex-col items-center gap-2 p-2 cursor-pointer"
              >
                <RiInstagramFill className="bg-rose-800 hover:bg-rose-700 p-4 h-16 w-16 rounded-md" />
                <span>Snapster</span>
              </Link>
              <Link
                to="/mail"
                className="flex flex-col items-center gap-2 p-2 cursor-pointer"
              >
                <IoMdMail className="bg-emerald-900 hover:bg-emerald-800 p-4 h-16 w-16 rounded-md" />
                <span>Mail</span>
              </Link>
              <Link
                to="/diary"
                className="flex flex-col items-center gap-2 p-2 cursor-pointer"
              >
                <IoMdBookmarks className="bg-stone-700 hover:bg-stone-600 p-4 h-16 w-16 rounded-md" />
                <span>Diary</span>
              </Link>
              <Link
                to="/browser"
                className="flex flex-col items-center gap-2 p-2 cursor-pointer"
              >
                <FaGlobe className="bg-sky-900 hover:bg-sky-800 p-4 h-16 w-16 rounded-md" />
                <span>Browser</span>
              </Link>
              <Link
                to="/camera"
                className="flex flex-col items-center gap-2 p-2 cursor-pointer"
              >
                <FaCamera className="bg-violet-900 hover:bg-violet-800 p-4 h-16 w-16 rounded-md" />
                <span>Camera</span>
              </Link>
              <Link
                to="/music"
                className="flex flex-col items-center gap-2 p-2 cursor-pointer"
              >
                <FaMusic className="bg-teal-700 hover:bg-teal-600 p-4 h-16 w-16 rounded-md" />
                <span>Music</span>
              </Link>
            </div>
          </div>

          {/* the app area code end here */}
        </div>
      </div>
    </>
  );
}

export default Desktop;
