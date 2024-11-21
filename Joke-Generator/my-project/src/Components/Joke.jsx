
import { useState } from 'react'
import Button from './Button'
import './Joke.css'
const Joke = () => {
    const [data , setData] = useState('')
    const fetchJoke = () =>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res)=>res.json())
        .then((data) =>setData(data.joke))
        .catch((error) => {
          console.error("Error fetching joke:", error);
          setData("Failed to fetch a joke. Please try again.");
      });
    }
  return (
    <div className='joke'>
        <Button callApi= {fetchJoke}/>
        <p>{data}</p>
    </div>
  )
}

export default Joke
