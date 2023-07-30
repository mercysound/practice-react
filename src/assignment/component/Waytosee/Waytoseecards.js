import React from 'react'


const Waytoseecards = ({cardImg, cardTitle, cardText, cardLinkAdd, forClick}) => {
  return (
    <>
      <section className="cardSec mt-5 p-0 p-0 ">
      <div className="card mx-auto border-0" style={{minHeight:'28rem', width:'80%', backgroundColor:'#FFFFFF'}}>
          <img className='card-img-top' src={cardImg} alt="" />
        <div className="card-body d-flex align-content-between flex-wrap">
          <h4 className='card-title'>{cardTitle}</h4>
          <p className="card-text fs-6 \">{cardText}</p>
          <a onClick={()=>forClick(cardTitle)} className='text-dark' href="google.com">{cardLinkAdd}</a>
        </div>
      </div>
      </section>
    </>
  )
}

export default Waytoseecards;