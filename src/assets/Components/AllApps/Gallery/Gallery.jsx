import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import GallImg from "../../../Images/map.webp";
import sachinImg from "../../../Images/sachin.jpg";
import kuashalImg from "../../../Images/kaushal.jpg";
import priyanshuImg from "../../../Images/priyanshu.jpg";

import ImageCompo from "./ImageCompo";

function Gallery() {
  const navigate = useNavigate();

  const backToDesktop = () => {
    navigate("/");
  };



  return (
    <>
      <div className="box-border bg-slate-600 w-full min-h-screen backdrop-blur-md ">
        <div className="pb-3 max-w-screen-sm m-auto text-center  min-h-screen bg-slate-900 text-slate-300">
          {/* gallery code start */}
          <header
            className="h-16 border-b-2 justify-between
     border-white/10 flex gap-5 items-center p-3  px-5"
          >
            <div>
              <IoHomeSharp
                className="w-7 h-7 cursor-pointer"
                onClick={backToDesktop}
              />
            </div>
            <div className="text-xl font-bold">Gallery</div>
            <div>
              <MdDelete className="w-7 h-7 cursor-pointer" />
            </div>
          </header>
         
          <div className="m-3 p-3 flex-1 ">
            {/* recent photos Components start */}
            <div>
              <div className="text-left">Recent Photos</div>

              <div className="flex gap-1 flex-wrap py-2 overflow-y-scroll scrollbar-none">
              <ImageCompo galImgUrl={GallImg} dialogTitle={"This is Photo"} />
              <ImageCompo galImgUrl={sachinImg} dialogTitle={"This is Me"}/>
              <ImageCompo galImgUrl={GallImg} />
              <ImageCompo galImgUrl={kuashalImg} dialogTitle={"My Best Friend"} />
              <ImageCompo galImgUrl={priyanshuImg} dialogTitle={"My Childhood Friend"} />
                </div>
            </div>
            {/* recent photos Components */}
            {/* recent photos Components start */}
            <div>
              <div className="text-left">Favourites</div>

              <div className="flex gap-1 flex-wrap py-2">
                <img src={GallImg} alt="img" className="max-h-36 rounded" />
                <img src={GallImg} alt="img" className="max-h-36 rounded" />
                <img src={GallImg} alt="img" className="max-h-36 rounded" />
              </div>
            </div>
            {/* recent photos Components */}
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
