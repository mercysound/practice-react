import React from 'react'
// import Waytosee from './Waytosee';
import Waytoseecards from './Waytoseecards';
import cardImg1 from '../asset/online-co-img.png'
import cardImg3 from '../asset/coach-pro.jpg'
import cardImg2 from '../asset/digital-down.png'



function Waytoseemap() {
  function giveUserDetai (card){
    alert("hello "+ card)
  }
    var studentArr = [
      {forImg: cardImg1, forName: "Online courses", cardText: "Our intuitive course builder gives you the power to share what you know. No coding or design skills necessary.", cardLinkAdd: "Link more", forClick: {giveUserDetai}},
      {forImg: cardImg2, forName: "Digital download", cardText: "Reach your audience with the content they want, faster than ever. Sell PDFs, audio clips, and more.", cardLinkAdd: "Link more", forClick: {giveUserDetai}},
      {forImg: cardImg3, forName: "Coaching Product", cardText: "Manage your coaching business with milestones and scheduling, plus, process payments all on Teachable.", cardLinkAdd: "Link more", forClick: {giveUserDetai}}
  ]
  return (
    <>
    <div className="container">
      <div className="row d-flex justify-content-center">
    {studentArr.map((item, index)=>{
        return(<div className="col-lg-4  col-xl-4 col-sm-12" key={index}>
          <Waytoseecards
          cardImg={item.forImg}
          cardTitle={item.forName}
          cardText={item.cardText}
          cardLinkAdd={item.cardLinkAdd}
           />
        </div>) 

    })}
      </div>
    </div>
    </>
  )   
}

export default Waytoseemap;