import axios from "axios";
import React,{  useState } from "react";

export const ConnectToBackend = () =>{
    const [studentDetails, setstudentDetails] = useState({firstname: '', lastname: '', email:'', password:''})
    const handleDetails = (e)=>{
        let name = e.target.name
        let value = e.target.value 
        setstudentDetails({...studentDetails, [name]:value})
        // console.log(studentDetails);
    }
    const URL="http://localhost:4000/signup"
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(studentDetails);
    axios.post(URL, studentDetails)
    .then(res=>{
        console.log(res);
    })
} 
return (
    <>
    <div className="col-7 mx-auto shadow-sm">
            <form onSubmit={handleSubmit}>
                <input className="form-control my-2" type="text" placeholder="First Name" name="firstname"  value={studentDetails.firstname} onChange={handleDetails}/>
                <input className="form-control my-2" type="text" placeholder="Last Name" name="lastname" value={studentDetails.lastname} onChange={handleDetails}/>
                <input className="form-control my-2" type="text" placeholder="Email" name="email" value={studentDetails.email} onChange={handleDetails}/>
                <input className="form-control my-2" type="text" placeholder="Password" name="password" value={studentDetails.password} onChange={handleDetails}/>
                {/* <input type="text" className=""/> */}
                <button className="btn btn-info w-100 my-2" type="submit">Submit</button>

            </form>
        </div>
    </>
)
}

export default ConnectToBackend


