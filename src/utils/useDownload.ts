import { FileProp } from "./Types";

export default function useDownload(file: FileProp) {
  const saveImg = document.createElement("a");
  saveImg.href = URL.createObjectURL(file.blob);
  saveImg.download = file.fileName;
  saveImg.click();
  saveImg.parentNode?.removeChild(saveImg);
}
