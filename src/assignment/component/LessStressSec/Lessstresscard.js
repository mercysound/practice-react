import React from 'react'

const Lessstresscard = ({cardNo, cardTitle, cardText}) => {
  return (
    <div>
      <section className="cardSec mt-5 p-0 p-0 ">
      <div className="card mx-auto border-0" style={{minHeight:'', width:'80%', backgroundColor:'#FFFFFF'}}>
        <div className="card-body">
          <h1 className='ms-2'>{cardNo}</h1>
          <hr />
          <h4 className='card-title'>{cardTitle}</h4>
          <p className="card-text fs-6 \">{cardText}</p>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Lessstresscard;