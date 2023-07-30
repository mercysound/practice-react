import React from 'react'
import Lessstresscard from './Lessstresscard';
import Lgbutton from '../button/Lgbutton';

const Lesstresssec = () => {
  return (
    <>
    <div className="lessStress ">
      <div className="text-center">
      <h1 className='py-3'>Less stress. More results.</h1>
      <p>The tools you need to build, grow, and manage a thriving knowledge business are right here. Get started in three simple steps.</p>
      </div>
      <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4  col-xl-4 col-sm-12">
              <Lessstresscard cardNo="1" cardTitle="Prep your content" cardText="Outline your course, plan a coaching program, or design a digital product you’d like to upload and sell."/>
            </div>
            <div className="col-lg-4  col-xl-4 col-sm-12">
              <Lessstresscard cardNo="2" cardTitle="Price your product" cardText="Set prices for each of your offerings, then use our simple sales page builder to quickly create a place to send people to purchase."/>
            </div>
            <div className="col-lg-4  col-xl-4 col-sm-12">
            <Lessstresscard cardNo="3" cardTitle="Upload your content" cardText="Use our intuitive drag-and-drop builder to create your product with videos, slides, quizzes, and more"/>
            </div>
          </div>
          <div className="d-flex justify-content-center my-5">
          <Lgbutton btnname="Start for free" btnnlass='btn btn-success btn-lg text-dark fs-5 mt-5 p-3 border-0 mx-auto'/>
          </div>
        </div>
      {/* <div className="container">
        <div className="row">
          <div className="cpl-xl-4 col-sm-12">
            <h1>1</h1>
            <hr />
            <h3>Prep your content</h3>
            <p>Outline your course, plan a coaching program, or design a digital product you’d like to upload and sell.</p>
          </div>
          <div className="cpl-xl-4 col-sm-12"></div>
          <div className="cpl-xl-4 col-sm-12"></div>
        </div>
      </div> */}
    </div>
    </>
  )
}

export default Lesstresssec;