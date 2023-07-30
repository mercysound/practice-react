import {useNavigate} from "react-router-dom"

const Redirectcomp = () => {
  const redirect = useNavigate()
  const redirectMe = () =>{
    alert("You are done transfer, I'm redirecting you")
    redirect("/todoapp")
  }
  return (
    <>
    <h1>this is session is to redirect when done with the session</h1>
    <div className="w-75">
      <button className="mx-auto" onClick={redirectMe}>Redirect Me</button>
    </div>
    </>
  )
}

export default Redirectcomp;
