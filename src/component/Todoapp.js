import React from 'react'
import { useState } from 'react'
import "./todoapp.css"
import Layout from '../layout/Layout'

const Todoapp = () => {
  const [isEditing, setisEditing] = useState(false)
  const [newTodo, setnewTodo] = useState("")
  const [todoArray, settodoArray] = useState([])
  const [editIndex, seteditIndex] = useState(0)
  const [EditedObj, setEditedObj] = useState({})
  const [editInp, seteditInp] = useState("")
  const addTodoNow = () => {
  //   {newTodo = ("")?alert("input your Todo"):
  //   // settodoArray([..])
  //   //  alert("working")
  //   //  setnewTodo("")
  //   // console.log(newTodo);
  // }
  if(isEditing){
    // settodoArray(editInp.todoArray)
    let updateDetail = {newTodo:newTodo}
    let copyOffArr = [...todoArray]
    copyOffArr[editIndex] = updateDetail
    // settodoArray(copyOffArr)
    settodoArray(copyOffArr)
    // console.log(copyOffArr);
    // isEditing(false)

  }else{
    if (newTodo===("")) {
      alert("Please fill the input to continue")
    }else{
      let studentObj = {newTodo}
      settodoArray([...todoArray, studentObj])
      setnewTodo('')
      }
  }
  }
  const editArray = (comingIndex) =>{
    setisEditing(true)
    seteditIndex(comingIndex)
    // console.log(editIndex);
    let newObjectArray = todoArray[comingIndex]
    // console.log(newObjectArray);
    // seteditInp(EditedObj.newTodo)  
    setnewTodo(newObjectArray.newTodo)  
    setEditedObj(newObjectArray)
  }
  
  const deleteArray = (coming) =>{
    let arrayCopy = [...todoArray]
    let filtarrayCopy = arrayCopy.filter((item, index)=>(coming!==index))
    settodoArray(filtarrayCopy)
  }
  const savechange = () =>{
    

  }


  return (
    <Layout>
    <div className="TodoWrapper justify-content-center d-flex align-items-center flex-wrap  mx-auto w-50 " style={{}}>
          <div className='h-75 px-3' >
            <div className="mx-auto text-center">
            <h3></h3>
            <h2 className='text-light my-5'>Schedule Your Day Plan <br />with Mercy To-do App</h2>
            <div className="d-flex justify-content-between w-75  my-3 mx-auto">
            <div><input className='form-control' type="text" placeholder='Input your Todo' onChange={(e)=>setnewTodo(e.target.value)} value={newTodo}/></div>
            <div><button className='btn btn-success' onClick={addTodoNow}>{isEditing?<span>Update Editing</span>:<span>Add Todo</span>}</button></div>
            </div>
            </div>
              <div className='h-50' style={{overflowY:"scroll", overflowX:"hidden"}}>
              {todoArray.map((item, index)=>{
                return(
                  <div className='container-fluid' key={index}>
                    <div className="row text-light">

                      <div className="col-8  my-auto">
                            <h4>{index+1 + ". " + item.newTodo}</h4>
                      </div>
                      <div className="col-4 my-2 d-inline-flex mx-auto text-center">
                           <button className='btn btn-danger btn-sm me-2' onClick={()=>deleteArray(index)}>Mark as done</button>
                           <button className='btn btn-warning btn-sm' onClick={()=>editArray(index)}>Edit</button>
                      </div>
                    </div>
                </div>
                )
              })}
              </div>
              {todoArray===("")?<h2 className='text-center text-warning mt-3'>You have not add task yet</h2>:<h3 className='text-center text-danger mt-3'> <strong>NOTE:</strong> You have {todoArray.length} {todoArray.length>1?<span className='p-0 m-0'>tasks</span>:<span>task</span>} undone </h3>}
          </div>
    </div>
    </Layout>
  )
}

export default Todoapp;