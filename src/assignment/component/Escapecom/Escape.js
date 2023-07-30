import React from 'react'
import './escape.css'
import Lgbutton from '../button/Lgbutton'
import Ladycam from '../asset/ladysnap.png'
import playBtn from '../asset/playbtn.png'

const Escape = () => {
  let padEsc = {
    padding:"25vh 0 20vh 0",
    backgroundColor:"#CDE2D9",
    color: "#1B4942",
    fontFamily: "'Reckless-Light'!, sans-serif ",
  }
  return (
    <div>
      <section style={padEsc} className='secEsc'>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-sm-12">
              <div>
                <h1 style={{fontSize:"70px",}}>Escape the algorithm</h1>
                <h5 className='fw-medium lh-base'>Teachable is a no-code platform for creators who want to build more impactful businesses through courses, coaching, and digital downloads. Whether you’re going viral on TikTok or bringing your in-person classes online, with Teachable you own your content and your students’ experience.</h5>
                <Lgbutton btnname="Start for free" btnnlass='btn btn-success btn-lg text-dark fs-5 mt-5 p-3 border-0'/>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12">
              <div className='ladyCamdv'>
                <img src={Ladycam} alt="" style={{width:"75%"}}/> 
                <img className='ladyCamImg' src={playBtn} alt="" style={{width:"17%"}}/> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Escape;