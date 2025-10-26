import React from "react";
import UrlBar from "../UrlBar/UrlBar";

function Map() {
  return (
    <>
      <div className="   bg-slate-600 w-full  backdrop-blur-md min-h-screen ">
        <div className=" max-w-screen-sm m-auto text-center bg-slate-900 text-slate-300 py-2 min-h-screen">
          <UrlBar />
          <div className="p-3 ">
            <div className="m-3 p-3 flex justify-center items-center">
              <img className="rounded-md text-center sm:h-96" src="./map.webp" alt="map" />
            </div>
            <div className="text-left p-3 m-3">
              <h1 className="text-lg text-slate-200 font-bold">Area Map</h1>
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil tempora soluta architecto assumenda, similique pariatur. Vero porro assumenda officia excepturi nobis culpa laudantium numquam, ratione a voluptas quod doloremque.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
