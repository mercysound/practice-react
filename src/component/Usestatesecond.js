import React from 'react'
import { useState } from 'react'
import Layout from '../layout/Layout'

const Usestatesecond = () => {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [eMail, seteMail] = useState("")
  const [passWord, setpassWord] = useState("")
  const [userArray, setuserArray] = useState([])
  const [editIndex, seteditIndex] = useState(0)
  const [editedObject, seteditedObject] = useState({})
  const [editedFirstName, seteditedFirstName] = useState("")
  const [editedLastName, seteditedLastName] = useState("")
  const [editedEMail, seteditedEMail] = useState("")
  const [editedPassWord, seteditedPassWord] = useState("")
  const Submit =()=>{
    let userObject = {firstName, lastName, eMail, passWord}
    setuserArray([...userArray, userObject])
    // console.log(userArray);
    setfirstName("")
    setlastName("")
    seteMail("")
    setpassWord("")
  }
    const deleteUser = (coming) =>{
      let copyUser = [...userArray]
      let newFilt = copyUser.filter((group, index)=>(index!=coming))
      // console.log(newFilt);
      setuserArray(newFilt)
    }
    // const editUser = (ind) =>{
      //   // console.log(editIndex);
      //   // let selectedUser = userArray[ind]
      //   // seteditedObject(selectedUser)
      //   seteditIndex(ind)
      //   let userSelected = userArray[ind]
      //   seteditedObject(userSelected)
      //   // console.log(userSelected);
      //   // console.log(ind);
      //   // userArray[editIndex] 
      
      
      // }
      const editUser = (para) =>{
        // to get user click on in edit details to the input value
        let selectUser = userArray[para]
        console.log(selectUser);
        seteditedFirstName(selectUser.firstName)
        seteditedLastName(selectUser.lastName)
        seteditedEMail(selectUser.eMail)
        seteditedPassWord(selectUser.passWord)
        // seteditedObject(selectUser)
        seteditIndex(para)


    }
    const saveChange = () =>{
      let editedDetailObj = {firstName:editedFirstName, lastName: editedLastName, eMail:editedEMail, passWord:editedPassWord}
      seteditedObject(editedDetailObj) 
      let ArrayCopyEdit = [...userArray]
      ArrayCopyEdit[editIndex] = editedDetailObj;
      setuserArray(ArrayCopyEdit)
      // console.log(ArrayCopyEdit);
      // let newEditUpdateArray = userArray[editIndex]
      // setuserArray([...newEditUpdateArray, newEditUpdateArray])

      // console.log(editedObject);
    }
  return (
    <Layout>
      <div className="container-fluid py-3 bg-primary">
        <div className="row">
          <div className="col-7 text-center  mx-auto">
            <div className="toInp">
            <h2 className='display-3 text-light'>Signup Here</h2>
              <input type="text" placeholder='Input your Firstname' className='form-control my-2' onChange={(e)=>setfirstName(e.target.value)} value={firstName}/>
              <input type="text" placeholder='Input your Lastname' className='form-control my-2' onChange={(e)=>setlastName(e.target.value)} value={lastName}/>
              <input type="text" placeholder='Input your email' className='form-control my-2' onChange={(e)=>seteMail(e.target.value)} value={eMail}/>
              <input type="password" placeholder='Input your password' className='form-control my-2' onChange={(e)=>setpassWord(e.target.value)} value={passWord}/>
              <button className='btn w-100 btn-success' onClick={Submit}>Submit</button>
            </div>
          </div>
          {/* <div className="col-5 bg-secondary">
            <div className="toDisp">
              {userArray.map((item, index)=>(
                (index==)
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <table className='table table-striped table-bordered table-dark'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
          {userArray.map((item, index)=>(
            <tbody key={index}>
              <tr>
              <td>{index+1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.eMail}</td>
              <td>{item.passWord}</td>
              <td>
                <button onClick={()=>editUser(index)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit</button>
                <button onClick={()=>deleteUser(index)} className='btn btn-danger mx-1'>Delete</button>
              </td>
            </tr>
            </tbody>
          ))}
      </table>
      {/* <!-- Button trigger modal --> */}
    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button> */}

    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Edit User @ {}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <input type="text" name="" className='form-control my-2' value={editedFirstName} onChange={(e)=>seteditedFirstName(e.target.value)} />
            <input type="text" name="" className='form-control my-2' value={editedLastName} onChange={(e)=>seteditedLastName(e.target.value)}/>
            <input type="text" name="" className='form-control my-2' value={editedEMail} onChange={(e)=>seteditedEMail(e.target.value)}/>
            <input type="text" name="" className='form-control my-2' value={editedPassWord} onChange={(e)=>seteditedPassWord(e.target.value)}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" onClick={saveChange} className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Usestatesecond;