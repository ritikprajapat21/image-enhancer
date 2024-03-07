import Input from "./components/Input";
import "./App.css";
import Result from "./components/Result";
import { useEffect, useState } from "react";
import useSubmit from "./utils/useSumbit";
import { FileProp } from "./utils/Types";

function App() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [file, setFile] = useState({} as FileProp);

  useEffect(() => {
    (async () => {
      const result = isAvailable ? await useSubmit() : null;
      result ? setFile(result) : null;
    })();
  }, [isAvailable]);

  return (
    <>
      <h1>AI Image Enhancer</h1>
      <Input setIsAvailable={setIsAvailable} />
      <Result isAvailable={isAvailable} file={file} />
    </>
  );
}

export default App;
