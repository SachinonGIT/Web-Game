import React, { useRef, useState, useEffect, useMemo } from "react";
import kaushalImg from "../../../../Images/kaushal.jpg";
import priyanshuImg from "../../../../Images/priyanshu.jpg";
import SnapPost from "./SnapPost";
import { HiViewGrid } from "react-icons/hi";
import { useParams } from "react-router-dom";

const ShowPost = ({ postId, userData }) => {
  const [userPostImg, setUserPostImg] = useState("");
  const [caption, setCaption] = useState("");
  const [likes, setLikes] = useState(0);
  const [commentsCount, setCommentCount] = useState(0);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
  
    if (userData) {
      const findPost = userData.UploadedPosts?.find((e) => e.PostId === postId);
      
      if (findPost) {

        setUserPostImg(findPost.Image);
        setCaption(findPost.Caption);
        setLikes(findPost.Likes || 0);
        setCommentCount(findPost.Comments?.length || 0);
        setCommentData(findPost.Comments || []);
      }
    }
  }, [userData, postId]);
console.log(userData?.UserId)
  return (
    <SnapPost
      userName={userData?.UserName}
      userProfile={userData?.UserProfile}
      userPostImg={userPostImg}
      caption={caption}
      likesCount={likes}
      commentsCount={commentsCount}
      userProfileLink={`/snapster/${userData?.UserId}`}
      commentDataCompo={commentData}
    />
  );
};

function SnapUserProfile() {
  const paramData = useParams();
  const [userData, setUserData] = useState(null);
  const [isDialogBoxOpen, setIsDialogBoxOpen] = useState(false);
  const [postId, setPostId] = useState(null);
  const dialogBoxElem = useRef(null);

  // Memoize the fetch response to avoid redundant fetch calls
  const fetchUserData = useMemo(() => {
    return fetch("/AllImgData.json")
      .then((res) => res.json())
      .then((data) => {
        return data.find((e) => e.UserId === paramData.ParamId);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        return null;
      });
  }, [paramData.ParamId]);

  useEffect(() => {
    // Fetch data only once when the user profile is loaded
    fetchUserData.then((data) => {
      if (data) {
        setUserData(data);
      }
    });
  }, [fetchUserData]);

  const handleOpen = (e) => {
    setPostId(e.target.id);
    setIsDialogBoxOpen(true);
  };

  const handleCloseBox = (e) => {
    const dialogDiv = dialogBoxElem.current;
    const clickedDiv = e.target;
    dialogDiv === clickedDiv ? setIsDialogBoxOpen(false) : setIsDialogBoxOpen(true);
  };
// close dialogBox when url changes
  useEffect(()=>{
    setIsDialogBoxOpen(false)
  },[paramData.ParamId])


const [dataLoad, setDataLoad] = useState("Loading...");
  if (!userData) {
    setTimeout(() => {
      setDataLoad("Sorry, User Not Find. Please Try Again!!")
    }, 3000);
    return <div className="m-2 italic">{dataLoad}</div>;
  }

  return (
    <div className="flex flex-col h-full overflow-y-scroll scrollbar-none">
      <div className="uper  m-2 px-2 flex items-center justify-between ">
        <div className="left ">
          <div className="w-20 overflow-hidden flex justify-center items-center rounded-full border border-white">
            <img src={userData.UserProfile} alt="userProfile" />
          </div>
          <div className="userName m-2">{userData.UserName}</div>
        </div>
        <div className="right flex justify-evenly items-center w-full">
          <div>
            <div>{userData.UploadedPosts.length}</div>
            <div>Posts</div>
          </div>
          <div>
            <div>{userData.Followers}</div>
            <div>followers</div>
          </div>
          <div>
            <div>{userData.Following}</div>
            <div>following</div>
          </div>
        </div>
      </div>
      <div className="description text-left mx-2 px-5 text-sm">
        {userData.UserBio[0]} <br />
        {userData.UserBio[1]} <br />
        {userData.UserBio[2]}
      </div>
      <div className="seperato rounded-full bg-white/10 m-3 flex justify-center items-center h-2">
        <HiViewGrid className="w-9 h-9 rounded-full p-1 bg-slate-900 border border-white/10" />
      </div>
      <div className="down flex-1  m-2 ">
        <div className="grid grid-cols-3 sm:grid-cols-4 h-fit  ">
          {userData.UploadedPosts.map((user) => (
            <div
              key={user.PostId}
              className="overflow-hidden flex justify-center items-center border border-slate-900 cursor-pointer "
              onClick={handleOpen}
            >
              <img src={user.Image} alt="posts" id={user.PostId} className="w-full h-full object-cover" />
            </div>
          ))}

          {isDialogBoxOpen && (
            <div
            ref={dialogBoxElem}
            className="fixed inset-0 flex items-center justify-center bg-slate-900/30"
            onClick={handleCloseBox}
          >
            <div
              className="bg-white border max-w-screen-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ShowPost postId={postId} userData={userData} />
            </div>
          </div>
          
          )}
        </div>
      </div>
    </div>
  );
}

export default SnapUserProfile;
