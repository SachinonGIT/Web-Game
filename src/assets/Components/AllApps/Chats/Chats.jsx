import React from "react";
import ChatHeader from "./ChatHeader";
import AllUserBox from "./AllUserBox";

function Chats() {

  
  return (
    <div className="bg-slate-600 w-full min-h-screen backdrop-blur-md">
      <div className="max-w-screen-sm m-auto text-center min-h-screen flex flex-col h-screen bg-gradient-to-tl from-slate-900 to-slate-800 text-slate-300">
        <ChatHeader />
        <div className="flex-1 overflow-hidden scrollbar-none">
          <AllUserBox />
        </div>
      </div>
    </div>
  );
}

export default Chats;
