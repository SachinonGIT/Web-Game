import React, { useState, useRef, useEffect } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import emergencyAud from "../Calls/sounds/emergency911.mp3";
import callEndedAud from "../Calls/sounds/endedCall.m4a";
import dailingAud from "../Calls/sounds/newDailing.mp3";
import { MdCallEnd } from "react-icons/md";

function CallDialer() {
  const [num, setNum] = useState("");
  const [displayNum, setDisplayNum] = useState("");
  const [dailing, setDailing] = useState("");
  const [reset, setReset] = useState(false);
  const [callConnected, setCallConnected] = useState(false);
  const [callTime, setCallTime] = useState(null); // Call timer for timestamp
  const callTimerRef = useRef(null); // Reference for the call timer interval
  const dialingTimeoutRef = useRef(null); // Reference for the dialing timeout

  // Audio Refs
  const dialingSound = useRef(new Audio(dailingAud));
  const callConnectedSound = useRef(new Audio(emergencyAud));
  const callEndedSound = useRef(new Audio(callEndedAud));

  const formatTime = (timeInSeconds) => {
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, "0");
    const seconds = String(timeInSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
// reset all the features
  const resetCallState = () => {
    // Stop all sounds
    dialingSound.current.pause();
    callConnectedSound.current.pause();
    callEndedSound.current.pause();
    dialingSound.current.currentTime = 0;
    callConnectedSound.current.currentTime = 0;
    callEndedSound.current.currentTime = 0;

    // Clear intervals and timeouts
    clearInterval(callTimerRef.current);
    clearTimeout(dialingTimeoutRef.current);

    // Reset state
    setNum("");
    setDisplayNum("");
    setDailing("");
    setCallTime(null);
    setReset(false);
    setCallConnected(false);
  };

  const handleNum = (e) => {
    const digit = e.target.innerText;
    setNum((prev) => prev + digit);
  };


// handling the working steps after clicking on call btn
  const handleDotRun = () => {
    setReset(true);
    setDailing("Dialing");
    dialingSound.current.play();
    let dotCount = 0;
  
    const interval = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      setDailing(`Dialing${".".repeat(dotCount)}`);
    }, 500);
  
    dialingTimeoutRef.current = setTimeout(() => {
      clearInterval(interval);
      dialingSound.current.pause();
      if (num === "911") {
        setDisplayNum("Emergency Call")//display 911 as "emergency call"
        setDailing(<span className="text-green-400">Call Connected</span>);
        setCallConnected(true);
        callConnectedSound.current.play();
  
        // Start call timer
        let secondsElapsed = 0;
        setCallTime(secondsElapsed);
        callTimerRef.current = setInterval(() => {
          secondsElapsed += 1;
          setCallTime(secondsElapsed);
  
          // Stop the timer at 01:01 (61 seconds) and show "Call Ended"
          if (secondsElapsed === 61) {
            clearInterval(callTimerRef.current); // Stop the timer
            setDailing(<span className="text-rose-500">Call Ended</span>);
            callEndedSound.current.play();
            setTimeout(() => {
              resetCallState()
              // Reset dialer text after a short delay
            }, 2000);
          }
        }, 1000);
      } else {
        setDisplayNum("");
        setDailing(<span className="text-rose-500">Call Ended</span>);
        callEndedSound.current.play();
        setTimeout(() => {
          setDailing("");
        }, 2000);
      }
    }, 6000);
  };
  
//call btn clicked handle
  const handleCalling = () => {
    if (num.length > 0) {
      setNum("");
      setDisplayNum(num);
      handleDotRun();
    } else {
      alert("Please enter a number.");
    }
  };
  const handleCallEnd = () => {
    resetCallState();
  }
// delete the number input
  const handleDel = (e) => {
    e.preventDefault();
    if (num.length > 0) {
      // resetCallState(); // Stop any ongoing call or audio
      setNum((prev) => prev.slice(0, -1));
    } else {
      alert("Please enter a number.");
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      resetCallState();
    };
  }, []);

  return (
    <>
      <div className="flex-1 flex flex-col">
        <div className="uper w-full flex items-center justify-center flex-1">
          <div className="uprDailingBox flex flex-col p-3 items-center">
            <div className="text-2xl font-semibold">{displayNum}</div>
            <div className="text-sm">
              {dailing}
              {callTime !== null && (
                <div className="text-green-500">{formatTime(callTime)}</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-t border-white/50 rounded-tl-xl rounded-tr-xl  px-10">
          <div className="inputNum w-full flex justify-between items-center px-3">
            <div className="outline-none text-2xl w-full bg-transparent text-center">
              {num}
            </div>
            <div
              className="p-3 cursor-pointer"
              onClick={handleDel}
              onMouseDown={(e) => e.preventDefault()}
            >
              <FaDeleteLeft className="w-7 h-7 text-white/50" />
            </div>
          </div>
          <div className="w-full dailpad grid grid-cols-3 gap-2 p-3">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
              (digit) => (
                <button
                  key={digit}
                  className="num  p-3 text-2xl rounded-md border border-transparent bg-slate-600/20 hover:bg-slate-500/30 hover:border-white/10"
                  onClick={handleNum}
                >
                  {digit}
                </button>
              )
            )}
          </div>
          <div className="w-full m-2">
            {callConnected ? (
              <button
                className="bg-rose-600 hover:bg-rose-500 rounded-full"
                onClick={handleCallEnd}
              >
                <MdCallEnd className="w-12 h-12 text-white p-3" />
              </button>
            ) : (
              <button
                className="bg-green-600 hover:bg-green-500 rounded-full"
                onClick={handleCalling}
              >
                <IoCall className="w-12 h-12 text-white p-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CallDialer;
