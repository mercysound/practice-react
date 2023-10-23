import React from 'react'
import { io } from "socket.io-client";

const socket = io("http:localhost:4000");

const ConnectToBackend2 = () => {
    useEffect(() => {
    socket.on("user-sent", (res) =>{
        console.log(res);
    });
    socket.on('received', (res)=>{
        console.log(res);
    });
    }, []);

    const [isloggedIn, setisloggedIn] = useState(false);
    const [profile, setProfile] = useState(null);
    const [loginDetails, setLoginDetails] = useState({
        email:"",
        password: "",
    });

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    useEffect(() => {
      axios
      .get(`http://localhost:4000/get_profile`, {
        headers: {
            authorization: localStorage.token,
        },
      })
      .then((res) => {
        console.log(res);
        if(res.data.data){
            setProfile(res.data.data);
        }
      })
    }, [isloggedIn]);

    const handleLoginDetails = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginDetails({...loginDetails, [name]: value});
    };

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value});
    };
    
    const handleRegister = () =>{
        console.log(user);
        axios.post(`http://localhost:4000/new-user`, user).then((res) =>{
            console.log(res);
        })
    };

    const handleLogin = () =>{
        axios.post(`http://localhost4000/login`, loginDetails).then((res) => {
            console.log(res);
            if(res.data.token){
                setisloggedIn(true)
                localStorage.setItem("token", `Bearer ${res.data.token}`);
            }else{
                localStorage.removeItem("token");
            }
        });
    };

    // const joinGroup = 

    const handleSubmit =()=>{
        axios.post("http://localhost3200/newTodo", {name:nameRef.current.value})
    } 
    const joinGroup = (name)=>{
        socket.emit("join-group", name)
    }  

    const sendMessage = (group, message) =>{
        socket.emit("msg-to-group", {group, message})
    }
  return (
    <>
    <button onclick={sendUser} className='tw-2'>Send User</button>
    <button onClick={()=>joingGroup("html")} className='btn-rounded'>Join Html</button>
    <button onClick={()=>joingGroup("css")} className='btn-rounded'>Join Css</button>
    <button onClick={()=>joingGroup("js")} className='btn-rounded'>Join js</button>
    <h1>Send Message</h1>
    <button onClick={()=>sendMessgae("html")}></button>
    <div className="container">
        <div className="row">
            <div className="col-6-mx-auto">
                <h1>Sign Up here</h1>
                <input type="text" className="block m-3 border rounded p-2 outline-none" placeholder='lastname' value={user.lastname} onChange={handleChange} />
                <input type="text" className="block m-3 border rounded p-2 outline-none" placeholder='email' value={user.email} onChange={handleChange} />
                <input type="text" className="block m-3 border rounded p-2 outline-none" placeholder='password' value={user.password} onChange={handleChange} />
                <input type="text" className="block m-3 border rounded p-2 outline-none" placeholder='firstname' value={user.firstname} onChange={handleChange} />
                <button onClick={handleRegister}>SignUp</button>
                <br />
                <h1>SIGN IN</h1>
                <input type="text" className="block m-3 border rounded p-2 outline-none" placeholder='Email' value={loginDetails.email} onChange={handleLoginDetails} />
                <input type="text" className="block m-3 border rounded p-2 outline-none" placeholder='Password' value={loginDetails.password} onChange={handleLoginDetails} />
                <button onClick={handleLogin}>LOGIN</button>
            </div>
            <div className='text-center'>
                {profile ? (
                    <div>
                        User Profile
                        <div> 
                    {profile.firstname} {profile.lastname}
                        </div>
                    </div>
                ) : (
                    "Not online"
                )}
            </div>
        </div>
    </div>
    </>
  );
}
;
export default ConnectToBackend2