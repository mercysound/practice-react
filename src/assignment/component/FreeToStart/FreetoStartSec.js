import React from 'react'
import "./freeTo.css"
import womanFullsmil from "../asset/full-woman-smile.png"

const FreetoStartSec = () => {
  return (
    <>
      <div className="freeToStart d-flex flex-wrap align-items-cen400" style={{backgroundColor: "#1B4942", minHeight: "80vh"}}>
        <div className="container d-flex align-items-center">
          <div className="row d-flex align-items-center">
            <div className="col-xl-6 col-sm-12 ">
              <div className=' text-light'>
                <h1 className='' style={{fontSize:"60px"}}><span className='fw-light'>Free to start,<br /></span>simple to scale</h1>
                <p>Our free plan includes everything you need to begin teaching and earning now. Upgrade later for additional resources to support your business’s changing needs.</p>
                <a href="" className='text-light'>View all Plan</a>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 d-flex justify-content-center">
              <div className='my-5'>
                <div className='position-relative text-center' style={{height:"370px", width:"350px", border:"solid #33C49B"}}>
                  <div className='position-absolute d-flex text-center align-items-center p-4' style={{height:"370px", width:"350px", backgroundColor:"white"}}>
                    <div>
                    <h3 className='py-4'>Free Plan</h3>
                    <p className='py-4'>The foundation tools you need to start earning today. No credit card required</p>
                    <div className='py-4 fs-1'>
                      $0
                    </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
       </div>
       <img className='w-100' src={womanFullsmil} alt="" />
      </div>
      
    </>
  )
}

export default FreetoStartSec;