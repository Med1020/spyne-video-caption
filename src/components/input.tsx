import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { closestTime, secondsTohms } from "../utils/timestampConversion";
import { IconTrash } from "@tabler/icons-react";
import UrlInput from "./urlInput";

const Input = () => {
  const [newCaption, setNewCaption] = useState("");
  const [currentCaption, setCurrentCaption] = useState("");
  const [captions, setCaptions] = useState<CaptionProp[]>([]);
  const [videoURL, setVideoURL] = useState<string>("");
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [error, setError] = useState("");

  const handleCaptionInput = (e) => {
    setError("");
    setNewCaption(e.target.value);
  };

  const handleAddCaption = () => {
    if (newCaption) {
      setCaptions([
        ...captions.filter(({ timestamp }) => timestamp !== currentTime),
        { timestamp: currentTime, caption: newCaption },
      ]);
      setNewCaption("");
    } else {
      setError("Enter caption before proceeding");
    }
  };

  const handleUpdateCaption = (timestamp: string) => {
    captions.filter((caption) => caption.timestamp === timestamp);
    setCaptions([...captions]);
  };

  const handleDeleteCaption = (timestamp: string) => {
    setCaptions(captions.filter((caption) => caption.timestamp !== timestamp));
  };

  const handleProgress = ({ playedSeconds }) => {
    const [h, m, s] = secondsTohms(playedSeconds);
    setCurrentTime(`${h}:${m}:${s}`);

    const match = captions.find(
      ({ timestamp }) =>
        closestTime(currentTime, timestamp) === 1 || timestamp === currentTime
    );
    if (match) {
      console.log(match);
      setCurrentCaption(match.caption);
    } else {
      setCurrentCaption("");
    }
  };

  return (
    <>
      <UrlInput videoURL={videoURL} setVideoURL={setVideoURL} />
      <div className="flex justify-between">
        <div className="border-r mr-10">
          <p>Your video will be displayed here</p>
          <ReactPlayer
            url={videoURL}
            controls
            width="512px"
            height="288px"
            className="my-6"
            onProgress={handleProgress}
          />
          <p>{currentCaption}</p>
        </div>
        <div className="border-r flex-1 pr-10 last:end-0">
          <header className="font-bold mt-4 ">
            {" "}
            Add caption with current timestamp
          </header>
          <p className="flex mt-5">Current time: {currentTime} </p>
          <p className="flex mt-5">Current caption: {currentCaption}</p>
          <p className="font-extralight italic">
            Note that only one caption can be added for each timestamp
          </p>
          <input
            className="border rounded-md  mt-5 mr-5  p-2 w-full"
            onChange={handleCaptionInput}
            value={newCaption}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddCaption();
            }}
          ></input>
          <p className="font-thin italic text-red-500 mb-5">{error}</p>
          <button onClick={handleAddCaption}>Add Caption</button>
        </div>
        <div className="flex-1 ml-10">
          <header className="font-bold">List of Captions</header>
          {captions.map(({ timestamp, caption }) => (
            <div className="my-4 flex text-center">
              <input
                value={timestamp}
                onChange={() => handleUpdateCaption(timestamp)}
                className="p-2 rounded-md w-20"
              />
              <span className="mx-4"> - </span>
              <input value={caption} className="p-2 rounded-md md:w-full" />
              <button
                className="mx-4"
                onClick={() => handleDeleteCaption(timestamp)}
              >
                <IconTrash stroke={2} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Input;
