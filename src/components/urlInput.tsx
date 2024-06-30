import { ChangeEvent } from "react";

const UrlInput = ({ videoURL, setVideoURL }) => {
  const handleAddURL = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoURL(e.target.value);
  };
  return (
    <div>
      <label className="mr-2">Add video URL:</label>

      <input
        className="border rounded-md my-5 mr-5 p-2 w-1/2"
        onChange={handleAddURL}
        value={videoURL}
        type="url"
      ></input>
      <button className="mx-4">Enter url</button>
      <button onClick={() => setVideoURL("")}>Clear url</button>
    </div>
  );
};

export default UrlInput;
