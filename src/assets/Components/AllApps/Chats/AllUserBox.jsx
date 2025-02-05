import React from "react";
import { Link } from "react-router-dom";
import sachinImg from "../../../images/sachin.jpg";
import kaushalImg from "../../../images/kaushal.jpg";
import priyanshuImg from "../../../images/priyanshu.jpg";

const UserChatBoxOpener = ({chatUserId, yourName, lastMsg, unreadMsg, imgSRC }) => {
  return (
    <>
    <Link to={`${chatUserId}`}>
      <div className="useMsgCont cursor-pointer rounded flex p-2 px-4 items-center hover:bg-gray-900">
        <div className="py-3 max-h-14 max-w-14 rounded-full flex justify-center items-center overflow-hidden border-2 border-white">
          <img src={imgSRC} alt="dp" />
        </div>
        <div className="time  w-full">
          <div className="flex justify-between items-center p-3">
            <div className="centerdetails text-left">
              <div className="userName text-lg">
                {yourName}
              </div>
              <div className="userLastMsg text-sm">{lastMsg}</div>
            </div>
            <div className="rounded-full w-5 flex items-center justify-center p-0 bg-white text-sm text-green-900 font-semibold">
              {unreadMsg}
            </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

function AllUserBox() {

  const usersData = [
    {
      id: 1,
      chatUserDataId: "sachin",
      userName: "Sachin kumar",
      imgSrc:  sachinImg,
      lastMsg: "your last msg goes here...",
      unreadMsg: "2",
    },
    {
      id: 2,
      chatUserDataId: "priyanshu",
      userName: "Priyanshu Shakya",
      imgSrc: priyanshuImg,
      lastMsg: "Priyanshu's last msg goes here...",
      unreadMsg: "3",
    },
    {
      id: 3,
      chatUserDataId: "kaushal",
      userName: "Kaushal Kishore",
      imgSrc: kaushalImg,
      lastMsg: "Kaushal's last msg goes here...",
      unreadMsg: "3",
    },
  ];

  return (
    <>
      <div className="allUserBox h-full overflow-y-scroll scrollbar-none m-2 mx-3">
      {usersData.map((user) => (
          <span key={user.id}>
            <UserChatBoxOpener
              yourName={user.userName}
              imgSRC= {user.imgSrc}
              unreadMsg={user.unreadMsg}
              lastMsg={user.lastMsg}
              chatUserId={user.chatUserDataId}
            />
          </span>
        ))}
      </div>
    </>
  );
}

export default AllUserBox;
