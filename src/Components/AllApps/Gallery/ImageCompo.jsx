import React, {useRef, useState} from 'react'
import { CiZoomIn, CiZoomOut } from "react-icons/ci";
import { FaDailymotion } from 'react-icons/fa';
import { FaArrowRotateRight } from "react-icons/fa6";
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { IoIosCloseCircle } from "react-icons/io";

function ImageCompo({galImgUrl,dialogTitle}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [imageStyles, setImageStyles] = useState({
     filter: "none",
     transform: "none",
   });
   const [zoom, setZoom] = useState(1);
   const [rotate, setRotate] = useState(0);
 
   const openModal = () => {if(!isModalOpen) {setIsModalOpen(true)}};
   const closeModal = () => setIsModalOpen(false);
 
   const handleZoomIn = () => {
     setZoom(zoom + 0.1);
   };
 
   const handleZoomOut = () => {
     setZoom(zoom - 0.1);
   };
 
   const handleRotate = () => {
     setRotate(rotate + 90);
   };
 
   const handleBlur = () => {
     setImageStyles({
       ...imageStyles,
       filter: "blur(5px)",
     });
   };
 
   const handleClearEffects = () => {
     setImageStyles({
       filter: "none",
       transform: "none",
     });
     setZoom(1);
     setRotate(0);
   };

   const dialogBoxRef = useRef();

 
   return (
    <>
     {/* this is test ************************************ */}
     <div className="App cursor-pointer max-h-36 max-w-36 rounded overflow-hidden flex justify-center items-center">
            <img
              src={galImgUrl}
              alt="Sample"
              onClick={openModal}
              className="thumbnail"
            />

            {isModalOpen && (
              <dialog onClose={openModal} open className="absolute top-0 left-0 bottom-0 right-0 rounded-lg h-screen w-full bg-transparent ">
              <div className="p-5 max-w-screen-sm  border-green-500 m-auto bg-black/25 h-screen flex justify-center items-center">
              <div ref={dialogBoxRef} className='rounded-md bg-white max-w-80 h-fit'>
                <div className="modal-content flex flex-col p-3 gap-3">
                    <h1 className='m-0 p-0'>{dialogTitle}</h1>
                    
                  <div className="overflow-hidden border border-slate-500/50 rounded max-h-72 flex justify-center items-center">
                  <img
                  
                    src={galImgUrl}
                    alt="Sample"
                    className="modal-image h-full w-full "
                    style={{
                      transform: `scale(${zoom}) rotate(${rotate}deg)`,
                      filter: imageStyles.filter,
                    }}
                  /></div>
                  <div className="font-bold flex items-center justify-evenly controls">
                    <button onClick={handleZoomIn}><FiZoomIn className='w-6 h-6' /></button>
                    <button onClick={handleZoomOut}><FiZoomOut className='w-6 h-6' /></button>
                    <button onClick={handleRotate}><FaArrowRotateRight className='w-5 h-5' /></button>
                    <button onClick={handleBlur}>Blur</button>
                    <button onClick={handleClearEffects}>Reset</button>
                    <button onClick={closeModal}><IoIosCloseCircle className='w-8 h-8 text-rose-600 hover:text-rose-500' /></button>
                  </div>
                </div>
              </div></div></dialog>
            )}
          </div>
          {/* the test end here ******************************************* */}
    </>
  )
}

export default ImageCompo