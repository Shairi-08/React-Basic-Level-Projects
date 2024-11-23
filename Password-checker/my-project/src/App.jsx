import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react"


const App = () => {
  const [length , setLength] = useState(8);
  const [number,setNumber] = useState(false)
  const [character,setCharacter] = useState(false)
  const [password , setPassword] = useState('')
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number)  str += "1234567890"
    if(character) str += "!£$%^&*()#"
    for (let i = 0;i<length;i++){
      let char = Math.floor(Math.random()*str.length)
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length,character,number])
  useEffect(()=>{
    passwordGenerator();
  },[length,number,passwordGenerator,character])

  const passRef = useRef(null)
  const CopyPassword = useCallback(()=>{
    passRef.current?.select()
      window.navigator.clipboard.writeText(password)
  },[password])
   return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input 
          type="text"
          value={password}
          placeholder="Password"
          className="outline-none w-full py-1 px-3 "
          readOnly
          ref={passRef}
          />
          <button
          onClick={CopyPassword}
          className="outline-none bg-blue-700 text-white px-3 py-0.5">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
          <input
          type="range"
          min={6}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e) =>setLength(e.target.value)}
          />
          <label >Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={number}
            onChange={()=>{
              setNumber((prev)=>!prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={character}
            onChange={()=>{
              setCharacter((prev)=>!prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>
    </div>
  )
}

export default App