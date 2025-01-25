import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  let [length, setLength] = useState(8);
  let [numAllowed, setNumAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [pwd, setPwd] = useState("");
  const pwdRef = useRef(null);

  const pwdGenerator = useCallback(() => {
    let pwd = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%";

    for (let i = 1; i <= length; i++) {
      let charPosition = Math.floor(Math.random() * str.length + 1);
      pwd += str.charAt(charPosition);
    }
    setPwd(pwd);
  }, [length, numAllowed, charAllowed, setPwd]);

  useEffect(() => {
    pwdGenerator();
  }, [length, numAllowed, charAllowed, setPwd]);

  const copypwd = useCallback(() => {
    window.navigator.clipboard.writeText(pwd);
  }, [pwd]);

  return (
    <>
      <div className="flex flex-col justify-center align-middle w-full h-screen bg-black gap-10 text-white">
        <h1 className="text-white text-4xl text-center">Password Generator</h1>
        <div className="bg-slate-800 rounded-lg flex flex-col gap-y-5 p-5 self-center">
          <div className="flex">
            <input
              readOnly
              value={pwd}
              className="rounded-s-lg w-96 text-black ps-2"
              ref={pwdRef}
            />
            <button
              onClick={copypwd}
              className="bg-blue-500 rounded-e-lg p-2 hover:bg-blue-700"
            >
              Copy
            </button>
          </div>
          <div className="flex gap-x-5">
            <input
              max={100}
              min={0}
              value={length}
              type="range"
              onChange={(e) => setLength(e.target.value)}
            />
            <span>Length({length})</span>
            <div className="flex gap-x-1">
              <input
                onChange={() => setNumAllowed((prev) => !prev)}
                id="number"
                type="checkbox"
              />
              <label htmlFor="number">Numbers</label>
            </div>
            <div className="flex gap-x-1">
              <input
                onChange={() => setCharAllowed((prev) => !prev)}
                id="character"
                type="checkbox"
              />
              <label htmlFor="character">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
