import React from 'react'
import myImage from '../asset/IMG_4830.jpeg'
import Images from '../asset/Images';
import Lgbutton from '../button/Lgbutton';
import './hero.css';

const Herosec = () => {
  return (
    <>
      <section className="heroSec">
        <div className="container mt-5 pt-4">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              {/* <img src={<Images/>}  alt="" />  */}
              <Images changeSize='cam-guy w-100'/>
            </div>
            <div className="col-sm-12 col-lg-6 d-flex">
              <div className="m-5 pt-">
                <h1 className='sharewhat'>Share what you know; we'll help you get paid for it</h1>
                <p className='fw-small mt-3'>Teachable helps creators engage their online audiences and get paid on their own terms with courses, coaching, and downloadable content.</p>
                <form class="form-inline h-50 w-100 d-flex align-items-end" role="form">
                <div class="form-group ">
                  <label className='tagLab' for="email">Enter your email:</label>
                  <div className="d-flex align-items-center">
                    <input type="email" class="form-control border-bottom p-3" id="email" placeholder='hello@example.com'/>
                    <Lgbutton btnname="Start for free" btnnlass='btn btn-success btn-lg w-100 text-dark ms-2 fs-5 p-3 border-0 '/>
                  </div>
                    <div className='disclaimer p-0 m-0'>
                      <p className=''>*By submitting your email address, you agree to <br />Teachable's <a href="">Terms of use</a> and <a href="">Privacy Policy</a>
                      </p>
                      <p></p>
                    </div>
                </div>
                {/* <button type="submit" class="btn btn-default">Submit</button> */}
                </form>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Herosec;