import React from 'react'
import UrlBar from '../UrlBar/UrlBar'
import { useLocation } from 'react-router-dom';

function ResultNotFound() {
    const location = useLocation();
    const searchTerm = location.state?.searchTerm || "Unknown URL";  // Get the search term passed in state
  

  return (
    <>
     <div className="   bg-slate-600 w-full  backdrop-blur-md min-h-screen ">
        <div className=" max-w-screen-sm m-auto text-center bg-slate-900 text-slate-300 py-2 min-h-screen">
          <UrlBar />
          <h1 className="text-xl font-bold text-red-500">Result Not Found</h1>
        <p className="text-lg text-white mt-4">
          Sorry, we couldn't find any results for <strong>{searchTerm}</strong>.
        </p>
          </div>
          </div>
    </>
  )
}

export default ResultNotFound