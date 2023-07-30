import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';

const socket = io("http://localhost:4000")

const ChatApp = () => {
    const messageRef=useRef()
    const [allMessages, setallMessages] = useState([]);
    // const message =messageRef.current.value;
    const handleSubmit=(e)=>{
        e.preventDefault()
        socket.emit("newMessage", messageRef.current.value)
        setallMessages([...allMessages, messageRef.current.value])

    }
    useEffect(() => {
      socket.on("receivedMessage", (message)=>{
        let msg = allMessages;
        msg.push(message);
        console.log(msg);
        setallMessages(msg)
      })
    }, [])
    
  return (
    <>
        <div className="container-mt-4">
            <div className="row">
                <div className="col-6-mx-auto">
                <h1 className='mb-5 text-center'>Chat App</h1>
                <div>{allMessages.map((message,index)=>(
                <div key={index}><h5>{message}</h5></div>))}
            </div>
            <form onSubmit={e=>handleSubmit(e)}>
                <div className="input-group">
                    <input type="text" ref={messageRef} className='form-control' name='' id=''/>
                    <button type='submit' className='btn btn-outline-dark input append'>Send Message</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}
export default ChatApp
