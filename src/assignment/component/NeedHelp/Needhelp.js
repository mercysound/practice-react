import React from 'react'
import Needhelpcard from './Needhelpcard';

const Needhelp = () => {
  const teachableCard = () =>{

  }
  let teaachebleCardsArray = [
    {
      forTitle:"Teachable:u", forText:"Marketing, video, course-building best practices—get access to our mini course library on those topics and more.", forLink:"Learn more"
    },
    {
      forTitle:"teachable:blog", forText:"You’ve got questions and the answers are on our blog. You’ll find how-tos, creator interviews, and much more.", forLink:"Learn more"
    },
    {
      forTitle:"Teachable:hq", forText:"Join over 10,000 of your peers to network, trade strategies, and share successes in our exclusive community, available to all paid plan subscribers.", forLink:"Learn more"
    },
  ]
  return (
    <>
      <div className="needHelpSec" style={{color:"#1B4942", backgroundColor:"#F8FAF4"}}>
      <div className="container pb-5" >
        <div className="teachtext">
          <h1 className='py-4'>Need help fast?</h1>
          <p className='py-4'>Every big creator had to start somewhere. Our support resources are the launch pad you need to succeed.</p>
        </div>
        <div className="row">
          {teaachebleCardsArray.map((item, index)=>{
            return(
              <div className="col-xl-4 col-sm-12 m" key={index}>
              <Needhelpcard 
              forTitle={item.forTitle}
              forText={item.forText}
              forLink={item.forLink}
              />
            </div>
            )
          })}
        </div>
      </div>
      </div>
    </>
  )
}

export default Needhelp;