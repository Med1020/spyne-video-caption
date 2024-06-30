import { useState } from "react";
import "./App.css";

type CaptionProp = {
  id: string;
  caption: string;
  timestamp: number;
};

function App() {
  const [captions, setCaptions] = useState<CaptionProp[]>([]);
  const [videoURL, setVideoURL] = useState();

  const urlInput = videoURL;

  const handleAddURL = (e) => {
    setVideoURL(e.target.value);
  };
  const handleAddCaption = () => {};

  const handleCaptionInput = (e) => {
    setCaptions();
  };
  return (
    <>
      <form className="flex-col w-full">
        <p>
          Parse through the video to find timestamps where you want to display
          the captions and{" "}
        </p>
        <div className="flex items-center my-4">
          <label>
            Add video URL:
            <input
              className="border rounded-md mx-5 p-2"
              onChange={handleAddURL}
            ></input>
          </label>
          <button>Enter url</button>
        </div>
        {videoURL && (
          <video width="640" height="360" controls className="my-6">
            <source src={urlInput} type="video/mp4" />
            <source src={urlInput} type="video/ogg" />
          </video>
        )}
        <div className="flex items-center my-4">
          <label>
            Enter captions:
            <input
              className="border rounded-md mx-5 p-2"
              onChange={handleCaptionInput}
            ></input>
          </label>
          <button onClick={handleAddCaption}>Add Caption</button>
        </div>
        {captions.map((caption) => (
          <div>
            <input></input>
            <p>{caption}</p>
          </div>
        ))}
      </form>
    </>
  );
}

export default App;
