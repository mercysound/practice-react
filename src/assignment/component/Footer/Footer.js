import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="foot text-light py-5" style={{backgroundColor:"#222222"}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-sm-8 py-3 d-flex justify-content-center">
            <div className="teach">
            <h2>Teachable Logo</h2>
            <p className='fs-6'>Join the more than 100,000 creators who use Teachable to share their knowledge. Easily create and sell courses, coaching, and digital downloads with our powerful yet simple no-code platform.</p>
            </div>
          </div>
          <div className="col-xl-2 col-sm-8 py-3 d-flex justify-content-center">
            <div className="exp ">
              <ul className='list-unstyled lh-lg fs-5'>
              <h6>Explore</h6>
                <li>Features</li>
                <li>Price</li>
                <li>exampls</li>
                <li>Newsletter</li>
                <li>teachable:hq</li>
                <li>Podcast</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-8 py-3 d-flex justify-content-center">
          <div className="exp">
              <ul className='list-unstyled lh-lg fs-5'>
               <h6>Company</h6>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Partner</li>
                <li>Podcast</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-8 py-3 d-flex justify-content-center">
          <div className="exp">
              <ul className='list-unstyled lh-lg fs-5'>
                <h6>Support</h6>
                <li>Knowledge Base</li>
                <li>Contact Support</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Content Guildlines</li>
                <li>House Rules</li>
                <li>Cokies Policy</li>
                <li>Ethics Line</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright text-center">
          <div className="font-awesome">

          </div>
          <p>Copyright © 2023 Teachable, Inc. <br />
           All rights reserved.</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer;