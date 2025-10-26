import React, { useEffect, useRef, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { MdModeComment } from "react-icons/md";
import { Link } from "react-router-dom";

function SnapPost({
  userName,
  userProfile,
  userPostImg,
  caption,
  likesCount = 0,
  commentsCount = 0,
  userProfileLink,
  commentDataCompo = [],
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likesCount);
  const [commentCount, setCommentCount] = useState(commentsCount);
  const [commentData, setCommentData] = useState(commentDataCompo);
  const [commentElemVal, setCommentElemVal] = useState("");
  const cmtElement = useRef(null);

  const likeHandle = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleComment = () => {
    cmtElement.current.focus();
  };

  const dropComment = (e) => {
    if (e.key === "Enter" && commentElemVal.trim()) {
      setCommentData((prev) => [
        ...prev,
        {
          id: commentCount,
          userProfile: "./kaushal.webp",
          userName: "Kaushal",
          userCmd: commentElemVal,
        },
      ]);
      setCommentCount((prev) => prev + 1);
      setCommentElemVal("");
    }
  };
  useEffect(() => {
    setLikeCount(likesCount);
    setCommentCount(commentsCount);
    setCommentData(commentDataCompo);
  }, [likesCount, commentsCount, commentDataCompo]); // Re-run when these props change
  

  return (
    <div className="postArea text-white bg-slate-900">
        <Link to={userProfileLink}>
      <div className="header border border-white/15 flex gap-3 p-2 items-center">
        <div className="dp max-w-8 overflow-hidden rounded-full border border-rose-500/80">
          <img src={userProfile} alt="profile" />
        </div>
        <div className="username text-lg font-semibold">{userName}</div>
      </div>
        </Link>
      <div className="caption text-left p-2 bg-slate-800">{caption}</div>
      <div className="image flex flex-1 px-10 bg-slate-100 items-center justify-center max-h-80 overflow-hidden">
        <img src={userPostImg} alt="post" />
      </div>
      <div className="likeNCmd flex items-center gap-2 p-2 bg-slate-800 w-full">
        <div className="likes flex items-center gap-2">
          <span className="cursor-pointer" onClick={likeHandle}>
            <GoHeartFill
              className={`${isLiked ? "text-rose-500" : "text-slate-200"} w-7 h-7`}
            />
          </span>
          <span className="font-semibold text-lg">{likeCount}</span>
        </div>
        <div className="likes flex items-center gap-2 w-full">
          <span className="cursor-pointer" onClick={handleComment}>
            <MdModeComment className="text-slate-200 w-7 h-7" />
          </span>
          <span className="font-semibold text-lg">{commentCount}</span>
          <div className="flex justify-between items-center w-full px-2">
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent form submission reload
                dropComment({ key: "Enter" }); // Trigger dropComment manually
              }}
            >
              <input
                ref={cmtElement}
                value={commentElemVal}
                type="text"
                placeholder="Add comment..."
                className="p-1 px-3 outline-none rounded-full max-w-44 bg-transparent border border-white/20"
                onChange={(e) => setCommentElemVal(e.target.value)}
              />
            </form>
            
            <div className="text-slate-500">postId</div>
          </div>
        </div>
      </div>
      {commentData.map((user) => (
        <div key={user.id} className="commentArea bg-slate-800 p-1 px-2">
          <div className="oneCmd flex items-center gap-3 px-2 rounded-xl">
            <Link to={`/snapster/${user.userId}`}>
            <div className="dp p-1 flex items-center gap-2">
              <div className="w-6 min-w-6 rounded-full overflow-hidden">
                <img src={user.userProfile} alt="dp" />
              </div>
              <div className="text-sm text-slate-300">{user.userName}</div>
            </div>
            </Link>
            <div className="cmd text-sm text-slate-200 text-left">{user.userCmd}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SnapPost;
