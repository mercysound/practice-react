import React from 'react'
import Lgbutton from '../button/Lgbutton';

const Changefuture = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor:"#21CD9C"}}>
        <div className="container text-center py-5">
          <div className="">
          <h1>Change your future <br /> with one click.</h1>
          <h6>Try our (actually free) free plan today.</h6>
          <Lgbutton btnname="Start for free" btnnlass='btn btn-dark btn-lg text-light fs-5 p-3 border-0'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Changefuture;