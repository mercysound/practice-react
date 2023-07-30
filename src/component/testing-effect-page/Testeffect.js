// import { useState } from "react"

// import { useState } from "react"

// import { useState } from "react" 
import React, { useState } from "react"

const Testeffect = () => {
  const [firstname, setfirstname] = useState("henry")
  console.log(firstname)
  const handleEvent = (event) =>{
    setfirstname(event.target.value)
  }
  // use state can be declare this manner in local
  const state = useState()
  console.log(state);
  // destructure my array for index to give me variable
  const myArray = ["poju", "joy", "peace"]
  // to destructure this below array use this method
  const [name0, name1, name2] = myArray;
  // to pull those destructure index out as variable, we can do
   console.log({name0,  name1, name2});
  return (
    <div>
      <form action="hand">
      <h1>New thing done {firstname}</h1>
      <input type="text" name="" id="" onChange={handleEvent} />
      </form>
    </div>
  )
}

export default Testeffect;