import React, { useEffect, useState, useRef } from "react";
import Container from "../../../uniCompo/Container";
import { RiCloseLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { IoCaretBack } from "react-icons/io5";
import useCurrentTime from "../../Clock/useCurrentTime";
import MsgBoxCompo from "./MsgBoxCompo";
import { TbPointFilled } from "react-icons/tb";

// Message Box Component

// Chats Component
function AllUserIdCompo() {
  const [msg, setMsg] = useState("");
  const [innerMsg, setinnerMsg] = useState("User is Offline");
  const [msgIndex, setMsgIndex] = useState(0);
  const currentTime = useCurrentTime();
  const [renderingMsg, setRenderingMsg] = useState([]);
  const param = useParams();
  const [chatUserName, setchatUserName] = useState("");
  const [chatUserDp, setchatUserDp] = useState("");
  const [chatUserBio, setchatUserBio] = useState("");
  const [chatUserNum, setchatUserNum] = useState("");
  const [chatUserMsg, setchatUserMsg] = useState([
    { msgtxt: "User is Offline" },
  ]);
  const [isUserOnline, setIsUserOnline] = useState("text-slate-500");

  useEffect(() => {
    const sachinMsg = [
      {
        msgtxt: "Hey Sachin, Are you there?",
        response: "Hey, I am here. How are you?",
        nextMsg: "I am fine, How about you?",
      },
      {
        msgtxt: "I am fine, How about you?",
        response: "I am also fine. Thanks for asking.",
        nextMsg: "broo! let's go for a walk",
      },
      {
        msgtxt: "broo! let's go for a walk",
        response: "Sure, I am ready. Let's go.",
        nextMsg: "ok, let's meet at 5:00 PM",
      },
      {
        msgtxt: "ok, let's meet at 5:00 PM",
        response: "Sure, I will be there.",
        nextMsg: "Sachin is Offline",
      },
    ];
    const kauhsalMsg = [
      {
        msgtxt: "Hey Kaushal, What are you doing?",
        response: "Nothing Bro as usual I'm Free😁",
        nextMsg: "Ok let's go for a walk.",
      },
      {
        msgtxt: "Ok let's go for a walk.",
        response: "Naah bro, I'm tired",
        nextMsg: "broo! Sachin is also coming",
      },
      {
        msgtxt: "broo! Sachin is also coming",
        response: "But broo🤔, Ok I'm Coming ",
        nextMsg: "ok, let's meet at 5:00 PM",
      },
      {
        msgtxt: "ok, let's meet at 5:00 PM",
        response: "Sure, I will be there.",
        nextMsg: "Kaushal is Offline",
      },
    ];

    if (param.userId === "sachin") {
      setchatUserMsg(sachinMsg);
      setinnerMsg(sachinMsg[0].msgtxt);
      setchatUserName("Sachin Kumar");
      setchatUserDp("/sachin.webp");
      setchatUserBio("isn't the Moon Beautiful");
      setchatUserNum("+91 xxxx xx90");
      return;
    }
    if (param.userId === "kaushal") {
      setchatUserMsg(kauhsalMsg);
      setinnerMsg(kauhsalMsg[0].msgtxt);
      setchatUserName("Kaushal Kishore");
      setchatUserDp("/kaushal.webp");
      setchatUserBio("Bio of Kaushal");
      setchatUserNum("+91 xxxx xx71");
      return;
    }
    if (param.userId === "priyanshu") {
      setchatUserName("Priyanshu Kumar");
      setchatUserDp("/priyanshu.webp");
      setchatUserBio("This is priyanshu bio");
      setchatUserNum("+91 xxxx xx89");
    } else {
      alert("user not found");
    }
  }, [param.userId]);

  // Use Ref to scroll to the last message
  const messagesEndRef = useRef(null);

  // Scroll to the bottom whenever renderingMsg changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [renderingMsg]);

  // Handle message response
  const handleMsgResponse = () => {
    if (innerMsg === chatUserMsg[msgIndex].msgtxt) {
      setIsUserOnline("text-green-400");
      // setRenderingMsg((prevMsgs)=> [...prevMsgs, "..."])
      setTimeout(() => {
        const response = chatUserMsg[msgIndex].response;

        // Append the response message

        setRenderingMsg((prevMsgs) => [...prevMsgs, response]);

        // Move to next message interaction
        setMsgIndex((prevIndex) => prevIndex + 1);
        const nextMsg = chatUserMsg[msgIndex].nextMsg;
        setinnerMsg(nextMsg);
        if (nextMsg.includes("is Offline")) {
          setIsUserOnline("text-slate-500");
        }
      }, 1000);
      return;
    }
  };

  // Send message function
  const sendMsg = (e) => {
    if (innerMsg.includes("is Offline") || innerMsg.includes("typing...")) {
      e.preventDefault();
      console.log("user is Offline");
    } else {
      // Handle the response after sending the message
      const sendMsg = innerMsg;

      // Append user's message
      setRenderingMsg((prevMsgs) => [...prevMsgs, sendMsg]);

      setinnerMsg(`${chatUserName} is typing...`);

      // Display user's message
      setMsg(
        MsgBoxCompo({
          msgText: sendMsg,
          bgColor: "bg-green-900",
          currentTime: currentTime,
        })
      );
      handleMsgResponse();
    }
  };

  // Handle Dialog Box
  const [dialogBox, setDialogBox] = useState(false);
  const dialogRef = useRef();
  const handleDialogBox = () => {
    setDialogBox(true);
  };

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        setDialogBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [dialogBox]);

  return (
    <Container className="bg-slate-600 w-full h-screen backdrop-blur-md">
      <div className="flex flex-col h-screen bg-gradient-to-tl from-slate-900 to-slate-800 text-slate-300">
        {/* Header */}
        <div className="flex justify-between items-center p-3 bg-slate-900 text-slate-300 border-b-2 border-white/10">
          <div>
            <Link to="/chats">
              <IoCaretBack className="w-7 h-7" />
            </Link>
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleDialogBox}
          >
            <div className="dp max-h-12 rounded-full max-w-12 flex justify-center items-center overflow-hidden border">
              <img src={chatUserDp} alt="dp" />
            </div>
            <div className="usedata text-left">
              <div className="usename font-semibold  flex items-center gap-1">
                <span>{chatUserName}</span>{" "}
                <span>
                  <TbPointFilled className={isUserOnline} />
                </span>
              </div>
              <div className="usename italic text-xs text-slate-400">
                {chatUserBio}
              </div>
            </div>
          </div>
          <div>
            <Link to="/">
              <RiCloseLine className="w-8 h-8" />
            </Link>
          </div>
        </div>

        {/* Message Container */}
        <div className="flex-1 overflow-hidden">
          <div className="allTextArea h-full overflow-y-scroll scrollbar-none p-3">
            <div className="overflow-y-scroll scrollbar-none  h-full">
              {/* date component start */}
              <div className="m-2 flex justify-center items-center">
                <div className="border border-white/10 w-fit p-2 py-1 text-xs rounded-sm bg-slate-600/30">
                  24 February, 2023
                </div>
              </div>
              {/* date component end */}
              {/* Message Render */}
              {renderingMsg.map((msg, index) => (
                <div
                  key={index}
                  className={` flex items-end msgArea p-2 ${
                    index % 2 === 0 ? "justify-end" : ""
                  }`}
                >
                  <div
                    className={`msgContLeft border border-white/10 w-fit rounded-xl  flex gap-2 ${
                      index % 2 === 0
                        ? "bg-green-900 rounded-tr-none"
                        : "bg-zinc-500/25 rounded-tl-none"
                    }`}
                  >
                    <div className="p-2 pr-0 text-sm text-white text-left">
                      {msg}
                    </div>
                    <div className="text-xs text-white/50 flex justify-end items-end p-1">
                      {currentTime}
                    </div>
                  </div>
                </div>
              ))}
              {/* This ref ensures that we scroll to the last message */}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
        {/* dailog box */}
        {dialogBox && (
          <dialog
            open
            className="dialogBox h-screen w-full flex bg-transparent "
          >
            <div className="flex justify-center w-full h-screen items-end max-w-screen-sm m-auto bg-slate-600/10 text-slate-300 ">
              <div
                ref={dialogRef}
                className="bg-slate-900 p-3 w-full border border-b-0 border-white/20 m-2 mb-0 rounded-t-xl flex justify-center"
              >
                <div className="flex justify- items-center gap-4 m-2">
                  <div className="max-h-20 max-w-20 border overflow-hidden flex justify-center items-center rounded-full">
                    <img src={chatUserDp} alt="dp" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg">{chatUserName}</div>
                    <div className="text-slate-400">{chatUserBio}</div>
                    <div>
                      <span className="text-sky-500 font-semibold">
                        Contact
                      </span>
                      <span className="px-2">{chatUserNum}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}
        {/* dailog box */}

        {/* Typing Area */}
        <div className="mstTypingArea w-full border flex justify-center items-center flex-col p-5 bg-gray-900 border-t-2 border-white/10">
          <div
            className="text-xl w-full text-center cursor-pointer p-3"
            onClick={sendMsg}
          >
            {innerMsg}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AllUserIdCompo;
