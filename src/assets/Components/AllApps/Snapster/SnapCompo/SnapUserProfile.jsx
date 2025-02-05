import React, { useRef, useState, useEffect } from "react";
import kaushalImg from "../../../../Images/kaushal.jpg";
import priyanshuImg from "../../../../Images/priyanshu.jpg";
import SnapHome from "./SnapHome";
import { GoHeartFill } from "react-icons/go";
import { MdModeComment } from "react-icons/md";
import SnapPost from "./SnapPost";
import { HiViewGrid } from "react-icons/hi";

function SnapUserProfile() {
  //testing
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(8);
  const cmtElement = useRef(null);
  const [commentElemVal, setCoomentElemVal] = useState("");
  const [commentCount, setCommentCount] = useState(5);
  const [commentData, setCommentData] = useState([
    {
      userProfile: kaushalImg,
      userName: "Kaushal Kishor",
      cmdText: "sample comment",
      id: 0,
    },
    {
      userProfile: priyanshuImg,
      userName: "Priyanshu Kumar",
      cmdText: "sample comment two",
      id: 1,
    },
  ]);

  // handle like color and like count
  const likeHandle = () => {
    if (!isLiked) {
      console.log(isLiked);
      setIsLiked(true);
      setLikeCount(likeCount + 1);
      return;
    }
    if (isLiked) {
      console.log(isLiked);

      setIsLiked(false);
      setLikeCount(likeCount - 1);
      return;
    }
  };

  const CmdCompo = ({ cmdCompoImg, cmdCompoUsername, cmdCompoUserCmd }) => {
    return (
      <div className="commentArea bg-slate-800  p-1">
        <div className="oneCmd flex items-center gap-3 px-2 rounded-xl">
          <div className="dp p-1 flex items-center gap-2">
            <div className="max-w-7 rounded-full overflow-hidden">
              <img src={cmdCompoImg} alt="dp" />
            </div>
            <div className="text-sm">{cmdCompoUsername}</div>
          </div>
          <div className="cmd">{cmdCompoUserCmd}</div>
        </div>
      </div>
    );
  };

  // handle comment and comment count
  const handleComment = () => {
    cmtElement.current.focus();
  };
  const dropComment = (e) => {
    if (e.key === "Enter") {
      setCommentData((prev) => [
        ...prev,
        {
          cmdText: commentElemVal,
          userName: "kaushal Kishore",
          userProfile: kaushalImg,
          id: commentCount,
        },
      ]);
      setCommentCount(commentCount + 1);
      setCoomentElemVal("");
      return;
    }
  };
  //testing
  
  

  const [userPosts, setUserPosts] = useState([
    {
      imgUrl: kaushalImg,
      altTxt: "img",
      id: 0,
    },
    {
      imgUrl: priyanshuImg,
      altTxt: "img",
      id: 1,
    }
  ]);

  useEffect(() => {
   console.log("user")
   fetch("../src/assets/Components/AllApps/Snapster/SnapsterImgData.json").then((res)=> res.json()).then((data)=> console.log(data[0].UserName))
  }, [])

  const [userProfile, setUserProfile] = useState(kaushalImg);
  const [isDialogBoxOpen, setIsDialogBoxOpen] = useState(false);
  const dialogBoxElem = useRef(null);

  const [userId, setuserId] = useState();
  

  const handleOpen = (e) => {
    setuserId(e.target.id);
    setIsDialogBoxOpen(true)
  };

  const handleCloseBox = (e) => {
    const dialogDiv = dialogBoxElem.current;
    const clickedDiv = e.target;
    dialogDiv === clickedDiv
      ? setIsDialogBoxOpen(false)
      : setIsDialogBoxOpen(true);
  };

  return (
    <div className="flex flex-col h-full overflow-y-scroll scrollbar-none">
      <div className="uper  m-2 px-2 flex items-center justify-between ">
        <div className="left ">
          <div className="w-20 overflow-hidden flex justify-center items-center rounded-full border border-white">
            <img src={userProfile} alt="userProfile" />
          </div>
          <div className="userName m-2">Kaushal</div>
        </div>
        <div className="right flex justify-evenly items-center w-full">
          <div>
            <div>112</div>
            <div>Posts</div>
          </div>
          <div>
            <div>2,300</div>
            <div>followers</div>
          </div>
          <div>
            <div>43</div>
            <div>following</div>
          </div>
        </div>
      </div>
      <div className="description text-left mx-2 px-5 text-sm">
        Blogger <br />
        Web Developer <br />
        Technology MERN Stack
      </div>
      {/* separator */}
      <div className="seperato rounded-full bg-white/10 m-3 flex justify-center items-center h-2"><HiViewGrid className="w-9 h-9 rounded-full p-1 bg-slate-900 border border-white/10" /></div>
      {/* Uploaded posts goes here */}
      <div className="down flex-1  m-2 ">
        <div className="grid grid-cols-3 sm:grid-cols-4 h-fit ">
          {userPosts.map((user) => (
            <div
              key={user.id}
              className="overflow-hidden flex justify-center items-center border border-slate-900 cursor-pointer"
              onClick={handleOpen}
            >
              <img src={user.imgUrl} alt={user.altTxt} id={user.id} />
            </div>
          ))}

          {isDialogBoxOpen && (
            <div
              ref={dialogBoxElem}
              className="fixed top-0  max-w-screen-sm w-full h-screen bg-slate-900/30 flex justify-center items-center text-black"
              onClick={handleCloseBox}
            >
              <div className="bg-white">
                <div>{userId}</div>
                {/* i have to create a new json for evry post  */}
                {/* [{}] */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SnapUserProfile;
