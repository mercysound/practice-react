import React from 'react'

const Needhelpcard = ({forTitle, forText, forLink}) => {
  return (
    <>
      <div className="secCard d-flex justify-content-center">
        <div className="card" style={{minHeight:'20rem', width:'90%', backgroundColor:'#FFFFFF'}}>
          <div className="card-body p-3 d-flex align-content-between flex-wrap">
            <div className="card-title">
              <h3>
              {forTitle}
              </h3>
            </div>
            <div className="card-text tex=">{forText}</div>
            <a className='text-dark' href=''>{forLink}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Needhelpcard;