import React from 'react'
import womanEatSpag from "../asset/woman-eating.png"

const Teestimoneysec = ({testImg, testText}) => {
  return (
    <>
      <div className="forCarol py-5 my-5">
        <div className="container"  style={{backgroundColor:"#1B4942"}}>
          <div className="row">
            <div className="col-xl-4 col-sm-12 d-inline-flex justify-content-center align-items-center">
              <img src={testImg} alt="" className=' h-75'/>
            </div>
            <div className="col-xl-8 col-sm-12">
              <div className="p-5 text-align-justify">
                <p className='quote-text w-100 fs-3'>{testText}</p>
              <div className="row">
                <div className="col-xl-3 col-4">
                  <h2>Melyssa Graffin</h2>
                  <h5>MelyssaGraffin.com</h5>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Teestimoneysec;