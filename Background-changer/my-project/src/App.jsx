import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("purple");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center fixed bottom-12 px-2 inset-x-0 ">
        <div className="bg-white flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'olive' }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'gray' }}
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'pink' }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'purple' }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: 'white' }}
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'black' }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'orange' }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
