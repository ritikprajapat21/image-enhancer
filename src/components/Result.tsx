import { ResultProps } from "../utils/Types";
import useDownload from "../utils/useDownload";
import Image from "./Image";

export default function Result({ isAvailable, file }: ResultProps) {
  if (!isAvailable) {
    return (
      <div>
        <p>Upload an image to enhace it.</p>
      </div>
    );
  }

  return (
    <div className="result-wrapper">
      <div className="result">
        <Image desc="Uploaded Image" id="uploadedImage" />
        <Image desc="Enhanced Image" id="enhancedImage" />
      </div>
      <button id="btn" onClick={() => useDownload(file)}>
        Download
      </button>
    </div>
  );
}
