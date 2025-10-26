import React, { useEffect, useRef, useState } from "react";
import Container from "../../uniCompo/Container";
import { IoClose, IoPlayBack, IoPlayForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosPlayCircle } from "react-icons/io";
import { FaPauseCircle } from "react-icons/fa";

function Music() {
  const [bgImg, setBgImg] = useState("chotaSaFasana");
  const [songTitle, setSongTitle] = useState("chota sa fasana");
  const [songSinger, setSongSinger] = useState("arijit singh");
  const [audioPlay, setAudioPlay] = useState(false);
  const [musicPath, setMusicPath] = useState("");
  const [arrIndex, setArrIndex] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const songPlay = useRef(null);
  const songLegth = useRef(null);

  const bgClass = {
    weDontTalk: "bg-weDontTalk",
    dieWithSmile: "bg-dieWithSmile",
    chotaSaFasana: "bg-chotaSaFasana",
    gulabiSong: "bg-gulabiSong",
    badBoy: "bg-badBoy",
    yeTereDoNaina: "bg-yeTereDoNaina",
  };

  // Handle audio initialization when song changes
  useEffect(() => {
    if (musicPath) {
      if (songPlay.current) {
        songPlay.current.pause();
        songPlay.current = null;
      }

      songPlay.current = new Audio(musicPath);

      songPlay.current.addEventListener("timeupdate", () => {
        setCurrentTime(songPlay.current.currentTime);
      });

      songPlay.current.addEventListener("loadedmetadata", () => {
        setDuration(songPlay.current.duration);
      });

      // Add 'ended' event listener for auto-playing the next song
      songPlay.current.addEventListener("ended", () => {
        nextPlay(); // Call nextPlay() when the song ends
      });

      if (audioPlay) {
        songPlay.current.play();
      }
    }

    return () => {
      if (songPlay.current) {
        songPlay.current.pause();
        songPlay.current = null;
      }
    };
  }, [musicPath]);

  const togglePlay = () => {
    if (songPlay.current) {
      if (songPlay.current.paused) {
        songPlay.current.play();
        setAudioPlay(true);
      }
    } else {
      fetchSongData(1);
      setAudioPlay(true);
      songPlay.current.play();
    }
  };

  const togglePause = () => {
    if (songPlay.current) {
      songPlay.current.pause();
      setAudioPlay(false);
    }
  };

  const fetchSongData = (newIndex) => {
    fetch("/musicData.json")
      .then((res) => res.json())
      .then((data) => {
        setBgImg(data[newIndex].poster);
        setSongTitle(data[newIndex].title);
        setSongSinger(data[newIndex].singer);
        setMusicPath(data[newIndex].musicPath);
      });
  };

  const backPlay = () => {
    const newIndex = arrIndex === 0 ? 5 : arrIndex - 1;
    setArrIndex(newIndex);
    setAudioPlay(true);
    fetchSongData(newIndex);
  };

  const nextPlay = () => {
    const newIndex = arrIndex === 5 ? 0 : arrIndex + 1;
    setArrIndex(newIndex);
    setAudioPlay(true);
    fetchSongData(newIndex);
  };

  const handleRangeChange = (e) => {
    const newTime = e.target.value;
    if (songPlay.current) {
      songPlay.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Container>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="border border-white/20 shadow-lg shadow-white/20 sm:w-5/6 sm:h-[91%] h-full w-full p-2 rounded-lg sm:p-3 flex  flex-col justify-between">
          <div className="flex justify-between items-center p-3 px-5 border bg-slate-800 border-white/10 backdrop-blur-sm hover:backdrop-blur-md rounded-full">
            <div className="font-bold uppercase">Music Player</div>
            <div>
              <Link to="/">
                <IoClose className="w-8 h-8" />
              </Link>
            </div>
          </div>
          <div className="thought m-3">"The will of man is his happiness."</div>
          <div
            className={`img flex-1 rounded-lg border border-white/10 sm:mx-8 overflow-hidden flex items-end ${
              bgImg && bgClass[bgImg]
            } bg-cover`}
          >
            <div className="flex-col-reverse bg-black/30 backdrop-blur-md m-3 p-2 px-3 sm:w-fit w-full border border-white/20 rounded-md text-left">
              <div className="p-2 border-l-4 border-rose-600 rounded-sm">
                <div className="text-lg font-bold capitalize flex items-center gap-2 text-slate-100">
                  {songTitle}
                </div>
                <div className="text-sm flex items-center gap-3 text-slate-200 capitalize">
                  {songSinger}
                </div>
              </div>
            </div>
          </div>
          <div className="center sm:m-3 mt-3 p-3 rounded-xl flex items-center gap-3">
            <div
              className={`hidden sm:block disk max-w-32 h-fit transform ${
                audioPlay ? "animate-rotateDisk" : ""
              }`}
            >
              <img src="./Disk.png" alt="disk" />
            </div>
            <div className="w-full h-fit text-left border border-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="songTitle text-lg font-bold capitalize">
                {songTitle}
              </div>
              <div className="songS text-slate-300 text-sm capitalize mb-2">
                {songSinger}
              </div>
              <div className="flex flex-col justify-center items-center sm:mx-3">
                <div className="range w-full flex items-center gap-2">
                  <span>{formatTime(currentTime)}</span>
                  <input
                    ref={songLegth}
                    type="range"
                    className="w-full cursor-pointer h-1 accent-rose-600 hover:accent-rose-500"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleRangeChange}
                  />
                  <span>{formatTime(duration)}</span>
                </div>
                <div className="musicBtn flex justify-evenly items-center gap-2 w-full p-2 px-0 rounded-full text-slate-800">
                  <div className="cursor-pointer" onClick={backPlay}>
                    <IoPlayBack className="w-8 h-8 text-white" />
                  </div>
                  {audioPlay ? (
                    <div className="cursor-pointer" onClick={togglePause}>
                      <FaPauseCircle className="w-7 h-7 text-white" />
                    </div>
                  ) : (
                    <div className="cursor-pointer" onClick={togglePlay}>
                      <IoIosPlayCircle className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <div className="cursor-pointer" onClick={nextPlay}>
                    <IoPlayForward className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Music;
