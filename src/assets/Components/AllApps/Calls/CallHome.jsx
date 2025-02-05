import React from 'react'
import { IoCall, IoCallSharp } from "react-icons/io5";
import { RiDeleteBack2Fill } from "react-icons/ri";
import CallHeader from "./CallHeader";
import { HiPhoneMissedCall } from "react-icons/hi";
import { MdPhoneCallback } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

// calldetails container component
const callDetailsArr = [
  {
    callName: "Zoey",
    callTime: "15h ago",
    callIcon: <HiPhoneMissedCall className="w-8 h-8 text-rose-600" />,
  },
  {
    callName: "Kaushal",
    callTime: "23h ago",
    callIcon: <IoCallSharp className="w-8 h-8 text-green-700" />,
  },
  {
    callName: "Zoey",
    callTime: "15h ago",
    callIcon: <MdPhoneCallback className="w-8 h-8 text-sky-600" />,
  },
  {
    callName: "Zoey",
    callTime: "15h ago",
    callIcon: <HiPhoneMissedCall className="w-8 h-8 text-rose-600" />,
  },
  {
    callName: "Kaushal",
    callTime: "23h ago",
    callIcon: <IoCallSharp className="w-8 h-8 text-green-700" />,
  },
  {
    callName: "Zoey",
    callTime: "15h ago",
    callIcon: <MdPhoneCallback className="w-8 h-8 text-sky-600" />,
  },
  {
    callName: "Zoey",
    callTime: "15h ago",
    callIcon: <HiPhoneMissedCall className="w-8 h-8 text-rose-600" />,
  },
  {
    callName: "Kaushal",
    callTime: "23h ago",
    callIcon: <IoCallSharp className="w-8 h-8 text-green-700" />,
  },
  {
    callName: "Zoey",
    callTime: "15h ago",
    callIcon: <MdPhoneCallback className="w-8 h-8 text-sky-600" />,
  },
];

const callDetails = ({
  callName = "Zoey",
  callTime = "15h ago",
  callIcon = <HiPhoneMissedCall className="w-8 h-8 text-rose-600" />,
}) => {
  return (
    <div className="flex items-center sm:p-3 py-4 px-3 gap-4 border-b border-white/10">
      <div className="callIcon">{callIcon}</div>
      <div className="left flex items-center w-full justify-between">
        <div className="callIcon text-left">
          <div className="name font-semibold text-xl">{callName}</div>
          <div className="name text-sm text-slate-400">Saved Contact</div>
        </div>
        <div className="callIcon text-sm text-slate-300 mx-4">{callTime}</div>
      </div>
    </div>
  );
};

function CallHome() {
  return (
    <><div>
    {callDetailsArr.map((callDetail, index) => (
      <div key={index}>
        {callDetails(callDetail)}
      </div>
    ))}
  </div></>
  )
}

export default CallHome