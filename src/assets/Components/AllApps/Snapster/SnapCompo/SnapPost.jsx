import React, { useRef, useState } from 'react'
import kaushalImg from '../../../../Images/kaushal.jpg'
import priyanshuImg from '../../../../Images/priyanshu.jpg'
import { GoHeartFill } from 'react-icons/go';
import { MdModeComment } from 'react-icons/md';

function SnapPost() {
     const [isLiked, setIsLiked] = useState(false);
      const [likeCount, setLikeCount] = useState();
      const cmtElement = useRef(null);
      const [commentElemVal, setCoomentElemVal] = useState("");
      const [commentCount, setCommentCount] = useState(5)
      const [commentData, setCommentData] = useState([{userProfile : priyanshuImg,
            userName : "Priyanshu",
            cmdText: "this is me",
            id : 0,
          },])
    
      // handle like color and like count
      const likeHandle = () => {
       if(!isLiked){
        console.log(isLiked)
        setIsLiked(true)
        setLikeCount(likeCount + 1)
        return;
       }
       if(isLiked){
        console.log(isLiked)
    
        setIsLiked(false)
        setLikeCount(likeCount - 1)
        return;
       }
      };
    
    
      const CmdCompo = ({cmdCompoImg,cmdCompoUsername,cmdCompoUserCmd }) => {
        return(
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
        )
      }
    
      // handle comment and comment count
      const handleComment = () => {
       cmtElement.current.focus()
      }
      const dropComment = (e) => {
       if(e.key === "Enter"){
        setCommentData((prev)=>[...prev, { cmdText: commentElemVal, userName: "kaushal Kishore", userProfile: kaushalImg, id: commentCount}])
        setCommentCount(commentCount + 1)
        setCoomentElemVal("")
        return;
       }
      }
  return (
    <div  className="postArea text-white">
                      <div className="header border border-white/10 bg-slate-800 flex gap-3 p-2 items-center">
                        <div className="dp max-w-8 overflow-hidden rounded-full border">
                          <img src={kaushalImg} />
                        </div>
                        <div className="username text-lg font-semibold">Your Name</div>
                      </div>
                      <div className="caption text-left p-2 bg-slate-800">this is caption</div>
                      <div className="image flex flex-1 px-10 bg-slate-100 items-center justify-center max-h-80  overflow-hidden">
                        <img src={priyanshuImg} alt="post" />
                      </div>
                      <div className="likeNCmd flex items-center gap-2 p-2 bg-slate-800 w-full">
                        <div className="likes flex items-center gap-2">
                          {" "}
                          <span className="cursor-pointer" onClick={likeHandle}>
                            <GoHeartFill className={`${isLiked ? "text-rose-500" : "text-white"} w-7 h-7`} />
                          </span>{" "}
                          <span className="font-semibold text-lg">{likeCount}</span>{" "}
                        </div>
                        <div className="likes flex items-center gap-2 w-full">
                          {" "}
                          <span className="cursor-pointer" onClick={handleComment}>
                            <MdModeComment className="text-white w-7 h-7" />
                          </span>{" "}
                          <span className="font-semibold text-lg">{commentCount}</span>{" "}
                          <div className=" flex justify-between items-center w-full px-2">
                            <input ref={cmtElement} value={commentElemVal} type="text" placeholder="add comment..." className={`p-1 px-3 outline-none rounded-full max-w-44 bg-transparent border border-white/20`} onChange={(e)=> setCoomentElemVal(e.target.value)} onKeyDown={dropComment} />
                            <div className="text-slate-500">postId</div>
                          </div>
                        </div>
                      </div>
                      {commentData.map((user)=> (
                        <div key={user.id}>
                          <CmdCompo cmdCompoImg={user.userProfile} cmdCompoUsername={user.userName} cmdCompoUserCmd={user.cmdText}/></div>
                      ))}
                      
                    </div>
  )
}

export default SnapPost