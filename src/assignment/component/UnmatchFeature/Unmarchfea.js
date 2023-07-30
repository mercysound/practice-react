import React from 'react'
import "./unmarch.css"
import summImg from "../asset/older-summary-img.png"
import specGuy from "../asset/spec-guy-chat.png"
import ladySuff from "../asset/lady-suff-online.png"
import Lgbutton from '../button/Lgbutton'


const Unmarchfea = () => {
  return (
    <>
    <section className="unmarch" style={{backgroundColor:"#222222"}}>
      <div className="container">
      <div className='text-light'>
        <div className="text-center py-5">
          <h2 style={{fontSize:"5rem", fontFamily:"-moz-initial"}}>Unmatched features built to transform lives</h2>
          <h6 className="py5">We’ve spent years working with creators. The result? Features that help you scale and give you peace of mind.</h6>
          <a className='text-light' href="">View all product features</a>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-xl-6 col-lg-6 col-sm-12">
            <div className="img"> 
              <img className='w-100' src={summImg} alt="" />
            </div>
          </div>
          <div className="forLine col-xl-6 col-lg-6 col-sm-12">
            <div className="text-light px-5 d-flex align-content-between flex-wrap">
              <h3>Sell confidently, earn powerfully</h3>
              <p>Our robust suite of monetization tools—including upsells, bundles, and order bumps—unlocks more value from every product you create. With teachable:pay creators get:</p>
              <u className='customul'>
                <li>Automated tax filings</li>
                <li>Fraud monitoring</li>
                <li>Chargeback support</li>
                <li>Ecommerce optimization tools</li>
              </u>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container py4">
      <div className='text-light'>
        <div className="row d-flex align-items-center">
          <div className="forLine col-xl-6 col-lg-6 col-sm-12">
            <div className="text-light px-5 d-flex align-content-between flex-wrap">
              <h3>Experience award-winning support</h3>
              <p>Paid plan subscribers can participate in a range of support programs designed to help them succeed, including:</p>
              <ul className='customul'>
                <li>Weekly group coaching sessionss</li>
                <li>teachable:u business training courses</li>
                <li>teachable:hq creator community membership</li>
                <p>Our powerful accelerator challenges—available to all subscribers—are designed to get your business up and running in 30 days.</p>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12 py-3">
            <div className="img"> 
              <img className='w-100' src={specGuy} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container py-4">
      <div className='text-light'>
        <div className="row d-flex align-items-center">
          <div className="col-xl-6 col-lg-6 col-sm-12">
            <div className="img"> 
              <img className='w-100' src={ladySuff} alt="" />
            </div>
          </div>
          <div className="forLine col-xl-6 col-lg-6 col-sm-12">
            <div className="text-light px-5 d-flex align-content-between flex-wrap">
              <h3>The anti-all-in-one</h3>
              <p>Teachable’s API and integrations double down on our focus on customizability. With Teachable you can:</p>
              <ul className='customul'>
                <li>Automate tasks without the need for a web hook</li>
                <li>Connect your favorite tools from outside Teachable</li>
                <li>Enable seamless communication between your Teachable products and your favorite marketing and analytics tools</li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center my-5">
          {/* <Lgbutton btnname="Start for free" btnnlass='btn btn-success btn-lg text-dark fs-5 mt-5 p-3 border-0 mx-auto'/> */}
          </div>
        </div>
      </div>
      </div>
      <div className="d-flex justify-content-center">
          <Lgbutton btnname="Start for free" btnnlass='btn btn-success btn-lg text-dark fs-5 p-3 border-0 '/>
          </div>
    </section>
    </>
  )
}

export default Unmarchfea;
