import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const passRef = useRef(null)
  const copyPass = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
    setTimeout(() => {
      window.getSelection().removeAllRanges()
    }, 2000)
  }
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_-={}<>?/|,.;`~:";
    }
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      //   pass += str[char]
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className=" text-gray-200 mx-auto mt-20 max-w-2xl px-4 bg-[#ffffff11] border border-[#ffffff4f] p-4 rounded-3xl">
      <h2 className="text-center text-xl font-semibold">
        This is a testing app for generating Passwords using useState,
        useCallback, useEffect, useRef from{" "}
        <span className="font-bold text-2xl text-gray-100"> ReactJs</span>
      </h2>
      <div className="text-center mt-10">
        <input
          className="outline-none py-1 pl-3 w-[350px] text-black rounded-l-md"
          type="text"
          value={password}
          readOnly
          ref={passRef}
        />
        <button
        onClick={copyPass}
        className="outline-none py-1 px-2 bg-gray-500 rounded-r-md font-semibold text-black transition-all duration-200 hover:bg-gray-600 active:bg-gray-700 overflow-hidden">
          <span className="inline-block transition-transform duration-200 hover:scale-110 hover:font-bold">
            Copy
          </span>
        </button>
      </div>
      <div className="flex items-center justify-around mt-10">
        <div className="flex items-center gap-3">
          <input
            type="range"
            value={length}
            min={6}
            max={32}
            className="w-[150px] h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gray-400"
            onChange={(e) => setLength(e.target.value)}
          />
          <p>Length: {length}</p>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="numbers" className="cursor-pointer">
            use Numbers
          </label>
          <input
            type="checkbox"
            id="numbers"
            defaultChecked={numberAllowed}
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
            className="cursor-pointer accent-gray-300"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="symbol" className="cursor-pointer">
            use Symbols
          </label>
          <input
            type="checkbox"
            id="sybmol"
            defaultChecked={charAllowed}
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
            className="cursor-pointer accent-gray-300"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
