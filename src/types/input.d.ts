type CaptionType = {
  caption: string;
  timestamp: string;
};

interface UrlInputProps {
  videoURL: {
    url: string;
    isValidURL: boolean;
  };
  setVideoURL: (...videoURL) => void;
}
