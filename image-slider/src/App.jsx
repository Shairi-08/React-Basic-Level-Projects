import React from 'react'
import Slider from './Components/Slider'
import './App.css'
const App = () => {
  return (
    <div>
      <Slider 
      url={"https://picsum.photos/v2/list"}
      page={"1"}
      limit={"10"}
      />
    </div>
  )
}

export default App