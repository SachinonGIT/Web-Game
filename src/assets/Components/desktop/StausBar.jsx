import React, { useEffect, useState } from 'react'
import { AiFillSignal } from 'react-icons/ai'
import { FaLightbulb } from 'react-icons/fa'
import { IoBatteryFullOutline } from 'react-icons/io5'

function StausBar({handleOpen}) {
    const [hintColor, setHintColor] = useState("text-yellow-400");
    const [hint, setHint] = useState("");
    const [hintBoxBorder, setHintBoxBorder] = useState("hidden");
    const [stausBarDisplay, setStatusBarDisplay] = useState(false);
    // const [statusBar, setStatusBar] = useState("Open")

    useEffect(()=>{
        setStatusBarDisplay(handleOpen)
    },[handleOpen])

    

    const handleHint = () => {
        setHintColor("text-slate-300")
        setHintBoxBorder("block")
        setHint("This is a sample Hint")
    }
    const handleClose = () => {
        setStatusBarDisplay(!stausBarDisplay)
        // setStatusBar("Close")
    }
    console.log(stausBarDisplay)
    
  return (
    <>
    <div className={`${stausBarDisplay ? "h-screen bg-black/70" : "h-10"} flex flex-col fixed rounded-lg backdrop-blur-md  max-w-screen-sm w-full px-4 overflow-hidden sm:px-6 p-2`} >
            <div className="flex justify-between items-center border-b pb-2 border-white/20">
              <div className="flex justify-center items-center gap-2">3:49</div>
              <div className="bg-slate-800 sm:hover:bg-slate-400 sm:hover:text-slate-900 cursor-pointer rounded-full px-3 text-slate-400 capitalize " onClick={handleClose}>{stausBarDisplay ? "Close" : "Open"} Status Bar</div>
              <div className="flex justify-center items-center gap-2">
                <AiFillSignal />
                <IoBatteryFullOutline className="text-2xl" />
              </div>{" "}
            </div>
            <div className="date flex justify-between items-center px-3 mt-2">
              <div className="left">
                <div>Thu, Feb 6</div>
                <div className="text-white font-semibold text-xl">03:49 PM</div>
              </div>
              <div className="icons ">
                <div className="cursor-pointer flex justify-center items-center flex-col" onClick={handleHint}>
                  <FaLightbulb className={`w-6 h-6 ${hintColor}`} />
                  <span>Hint!</span>
                </div>
              </div>
            </div>
            <div className="switchDisplay flex justify-evenly items-center border rounded-full text-slate-400 p-2 font-semibold border-slate-400 my-5">
              <div>Desk</div>
              <div className="text-white">Detective</div>
              <div>lost Person</div>
            </div>
            <div className="AllNotification px-3 flex-1 ">
              <div className={`border border-slate-400 rounded-md p-2 text-left ${hintBoxBorder} text-sm text-slate-400`}>
                {hint}
              </div>
            </div>
            
          </div>
    </>
  )
}

export default StausBar