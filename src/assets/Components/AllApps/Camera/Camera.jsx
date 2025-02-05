import React from "react";
import { useRef, useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const startCamera = async () => {
    try {
      // Access the user's front camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing the camera: ", err);
      alert("Could not access the camera. Please check permissions.");
    }
  };

  const capturePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      const imageData = canvasRef.current.toDataURL("image/png");
      setPhoto(imageData); // Save the captured photo
    }
  };

  return (
    <>
      <div className="box-border bg-slate-600 w-full h-screen">
        <div className="max-w-screen-sm m-auto text-center overflow-y-scroll scrollbar-none  h-screen bg-slate-900 text-slate-300">
            {/* camera component start */}
          <div className="camera-app flex flex-col h-screen">
              <div className="text-slate-200/70 font-semibold flex justify-center">
              <Link to="/">
            <div className=" hover:text-slate-200 p-2 text-slate-200/70 font-semibold flex justify-center items-center gap-2 " >Back to Home <IoChevronBackCircleOutline className="w-5 h-5" /></div></Link>
            </div>
           
            {/* Video Element to Display Camera Feed */}
            <div className="flex justify-center items-center flex-1 p-2">
              <video
                ref={videoRef}
                className=" rounded-xl h-full border border-white/20"
              />
            </div>

            {/* Buttons to Start Camera and Capture Photo */}
            <div className=" m-3">
            <h1 className="text-slate-200/50">Allow Access to the Camera</h1>
             <div className="p-5 flex justify-evenly items-center ">
             <button onClick={startCamera} className="bg-green-600 p-3 hover:bg-green-500 text-white rounded-lg">
                Start Camera
              </button>
              <button onClick={capturePhoto} className="bg-rose-600 p-3 hover:bg-rose-500 text-white rounded-lg">Capture Photo</button>
             </div>
             
            </div>

            {/* Canvas for Capturing Photo */}
            <canvas ref={canvasRef} style={{ display: "none" }} />

            {/* Display Captured Photo */}
            {photo && (
              <div className="flex justify-center items-center gap-3 p-3">
                <h3>You are Looking Good</h3>
                <img
                  src={photo}
                  alt="Captured"
                  className="w-52 rounded-lg shadow-xl shadow-white/10"
                />
              </div>
            )}
          </div>
            {/* camera component end */}

        </div>
      </div>
    </>
  );
}

export default Camera;
