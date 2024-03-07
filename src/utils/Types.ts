import { Dispatch, SetStateAction } from "react";

export interface FileProp {
  blob: Blob;
  fileName: string;
}

export interface ResultProps {
  isAvailable: boolean;
  file: FileProp;
}

export interface InputProp {
  setIsAvailable: Dispatch<SetStateAction<boolean>>;
}
