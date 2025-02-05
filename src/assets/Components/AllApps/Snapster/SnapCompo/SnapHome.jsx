import React, { useEffect, useState } from "react";
import SnapPost from "./SnapPost";  // Assuming SnapPost is a component to display individual posts
import {  useParams } from "react-router-dom";

const PostArea = ({ userData }) => {
 
  
  const currentPost = userData?.UploadedPosts?.[0]; // Getting the first post for the user
// `/assets/Images${userData.UserProfile.replace("./src", "")}`
  const userProfile = userData?.UserProfile
  ? userData.UserProfile
  : "/assets/Images/defaultProfile.jpg"; // Default profile image if no profile exists

  const userPostImg = currentPost?.Image
    ? currentPost?.Image
    : "/assets/Images/defaultPost.jpg"; // Default post image if no post exists

  return (
    <>
      {currentPost ? (
        <SnapPost
          userName={userData?.UserName || "Unknown"}
          userProfile={userProfile}
          caption={currentPost?.Caption || ""}
          userPostImg={userPostImg}
          likesCount={Number(currentPost?.Likes) || 0}
          commentsCount={currentPost?.Comments?.length || 0}
          userProfileLink={userData?.UserId}
          commentDataCompo={currentPost?.Comments}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

const SnapHome = () => {
  const [postData, setPostData] = useState([]);

  // Fetching data on component mount
  useEffect(() => {
    fetch("/AllImgData.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setPostData(data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="text-white overflow-hidden ">
     

      {/* Map through users and render PostArea for each */}
      {/* you can change where the uploaded post will be shown top or bottom by giving the class flex flex-col-reverse below */}
     
      <div className="postAreas overflow-y-scroll scrollbar-none h-full flex-1">
        {postData.length > 0 &&
          postData.map((userData, index) => (
            <PostArea key={userData.UserId} userData={userData} />
          ))}
      </div>
    </div>
  );
};

export default SnapHome;
