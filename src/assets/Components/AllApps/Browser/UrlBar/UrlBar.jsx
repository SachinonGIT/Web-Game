import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function UrlBar() {
  const navigate = useNavigate();
  const [urlbarVal, seturlbarVal] = useState("");

  const handleUrlbarval = () => {
    const trimmedUrl = urlbarVal.trim();

    if (trimmedUrl == "") {
      alert("Please Type Something");
      return;
    }

    if (trimmedUrl == "blogwebsite.com") {
      console.log(trimmedUrl);
      navigate("/browser/blogwebsite");
    } else {
      navigate("/browser/resultnotfound", {
        state: { searchTerm: trimmedUrl },
        replace: true, // Prevent the page from being added to history
      });
       // Remove the ResultNotFound entry from history manually
    setTimeout(() => {
      window.history.replaceState(null, "", "/browser");
    }, 100);
    }
  };

  const backToDesktop = () => {
    navigate("/");
  };

  return (
    <>
      {/* brower urlBar code start */}
      <div
        className="h-16 border-b-2 justify-evenly
     border-white/10 flex gap-5 items-center p-3 "
      >
        <div>
          <IoHomeSharp
            className="w-7 h-7 cursor-pointer"
            onClick={backToDesktop}
          />
        </div>
        <div className="w-3/4">
          <input
            value={urlbarVal}
            type="text"
            placeholder="https://example.com//..."
            className="placeholder:text-white/40 w-full rounded-xl p-2 bg-slate-700/50 "
            onChange={(e) => seturlbarVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUrlbarval(); // Handle Enter key press
            }}
          />
        </div>
        <div>
          <FaUserCircle className="w-7 h-7  " />
        </div>
      </div>
      {/* brower urlBar code end */}
    </>
  );
}

export default UrlBar;
