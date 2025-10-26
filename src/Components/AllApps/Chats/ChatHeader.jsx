import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function ChatHeader({ headerCenter = "Chats The Messenger", backBtn = null }) {
  return (
    
    <div className="flex justify-between items-center p-3 bg-slate-900 text-slate-300 border-b-2 border-white/10">
      <div>{backBtn}</div>
      <div className="text-xl">{headerCenter}</div>
      <div>
        <Link to="/">
          <RiCloseLine className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}

export default ChatHeader;
