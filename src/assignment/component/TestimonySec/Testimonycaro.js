import React from 'react'
import caroImg1 from "../asset/caro1.png";
import Teestimoneysec from './Teestimoneysec';
import "./caro.css"
const Testimonycaro = () => {
  return (
    <>
  <div style={{backgroundColor:"#1B4942"}}>
  <div id="carouselExampleDark" className="carousel carousel-dark slide text-light">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    {/* <div>
      <div className="container">
          <div className="row">
            <div className="col-xl-4 col-sm-12">
              <img src={caroImg1} alt="" className='w-100'/>
            </div>
            <div className="col-xl-8 col-sm-12">
              <div className="p-5">
                <p className='quote-text'>I've used Teachable to sell hundreds of thousands of dollars in online courses. If you are thinking of creating your own online course, Teachable is the place to be.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Teestimoneysec testImg={caroImg1} testText="I've used Teachable to sell hundreds of thousands of dollars in online courses. If you are thinking of creating your own online course, Teachable is the place to be."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      {/* <img src="..." className="d-block w-100" alt="..." /> */}
      <Teestimoneysec testImg={caroImg1} testText="I've used Teachable to sell hundreds of thousands of dollars in online courses. If you are thinking of creating your own online course, Teachable is the place to be."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div classNameName="carousel-item">
      {/* <img src="..." className="d-block w-100" alt="..." /> */}
      <Teestimoneysec testImg={caroImg1} testText="I've used Teachable to sell hundreds of thousands of dollars in online courses. If you are thinking of creating your own online course, Teachable is the place to be."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </>
  )
}

export default Testimonycaro;