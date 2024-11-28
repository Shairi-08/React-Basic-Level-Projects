import React, { useEffect, useState } from "react";

const Color = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color , setColor] = useState('#000000')
  const handleCreateHexColor = () =>{
    const hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
    let hexColor  = '#'
    for(let i = 0 ; i<6 ;i++){
      hexColor += hex[randomColorGenerator(hex.length)]
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  const handleCreateRgbColor = () =>{
    const r =  randomColorGenerator(256)
    const g =  randomColorGenerator(256)
    const b =  randomColorGenerator(256)
    setColor(`rgb(${r} , ${g} , ${b})`)
  }
  const randomColorGenerator = (length) =>{
      return Math.floor(Math.random()*length)
  }
  useEffect(()=>{
    if(typeOfColor == 'rgb') handleCreateRgbColor();
    else handleCreateHexColor()
  },[typeOfColor])
  return (
    <div 
    style={{
      width : '100vw',
      height : '100vh',
      background : color,

    }}
    >
      <button onClick={()=>setTypeOfColor('hex')}> Create HEX Color</button>
      <button onClick={()=>setTypeOfColor('rgb')}> Create RGB Color</button>
      <button onClick={typeOfColor == 'hex' ? handleCreateHexColor : handleCreateRgbColor}> Generate Random Color</button>
    <div
    style={{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      color : "white",
      fontSize : '60px',
      marginTop : '50px',
      flexDirection : "column",
      gap : '10px'
    }}
    >
      <h3>{typeOfColor == 'rgb'? "RGB Color" : "Hex Color" }</h3>
      <h1>{color}</h1>
    </div>
    </div>
  );
};

export default Color;
