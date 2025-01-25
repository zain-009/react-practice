import { useState } from "react";
import Button from "./components/Button";

function App() {
  let [color, setColor] = useState("gray");
  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-end"
        style={{ backgroundColor: color }}
      >
        <div className="m-5 bg-white flex gap-x-10 p-3 rounded-lg w-min self-center">
          <Button onClick={() => setColor("red")} btnName={"red"} />
          <Button onClick={() => setColor("blue")} btnName={"blue"} />
          <Button onClick={() => setColor("green")} btnName={"green"} />
          <Button onClick={() => setColor("olive")} btnName={"olive"} />
          <Button onClick={() => setColor("purple")} btnName={"purple"} />
          <Button onClick={() => setColor("brown")} btnName={"brown"} />
        </div>
      </div>
    </>
  );
}

export default App;
