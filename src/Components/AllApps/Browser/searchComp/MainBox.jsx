import React from "react";

function MainBox({ boxTitle, boxUrl, boxMeta, boxImg }) {
  return (
    <>
      <div className="flex  justify-center items-center gap-3 sm:gap-5 bg-slate-700/50 px-3 sm:p-5 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-white/10 hover:translate-y-1">
        <div className="flex  w-fit h-fit ">
          <img
            className="rounded-xl w-32 max-w-screen-md"
            src={boxImg}
            alt="map-img"
          />
        </div>
        <div className="flex  text-left  flex-col py-5">
          <h1 className="text-lg sm:text-xl text-slate-200 sm:mb-1">
            {boxTitle}
          </h1>
          <p className="text-sm sm:text-xs text-slate-200/60 sm:mb-2">
            {boxUrl}
          </p>
          <p className="text-sm sm:text-sm text-slate-200/80">{boxMeta}</p>
        </div>
      </div>
    </>
  );
}

export default MainBox;
