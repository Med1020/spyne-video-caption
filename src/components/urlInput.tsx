import { ChangeEvent } from "react";
import { urlPatternValidation } from "../utils/urlValidation";

const UrlInput = ({ videoURL, setVideoURL }: UrlInputProps) => {
  const handleAddURL = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoURL({
      url: e.target.value,
      isValidURL: urlPatternValidation(e.target.value),
    });
  };
  return (
    <>
      <div>
        <label className="mr-2">Add video URL:</label>

        <input
          className="border rounded-md my-5 mr-5 p-2 w-1/2"
          onChange={handleAddURL}
          value={videoURL.url}
          type="url"
        ></input>
        <button className="mx-4">Enter url</button>
        <button onClick={() => setVideoURL("")}>Clear url</button>
      </div>
      {!videoURL.isValidURL && (
        <p className="font-thin italic text-red-500 mb-5">
          Please enter valid url
        </p>
      )}
    </>
  );
};

export default UrlInput;
