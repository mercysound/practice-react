import axios from 'axios'
import React, { useState, useEffect} from 'react'

const Weatherapp = () => {
  const weatherUrl = "https://jsonplaceholder.typicode.com/users"
  const [weatherArr, setweatherArr] = useState([])
  useEffect(() => {
    callEffect()
  },
   [])
  
  const callEffect = () =>{
    axios.get(weatherUrl).then((res) => {setweatherArr(res.data)})
  }
  
  console.log(weatherArr);
  return (
    <>
    <div className="row">
      {weatherArr.map((user, index) => (
      <div className="col-sm-3 col-md-4 col-xl-4" key={user.id}>
        {user.name}
      </div>
      ))}
    </div> 
    </>
  )
}
export default Weatherapp;