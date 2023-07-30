// import cardImg1 from '../asset/online-co-img.png'
// import cardImg3 from '../asset/coach-pro.jpg'
// import cardImg2 from '../asset/digital-down.png'
import Waytoseecards from './Waytoseecards'
import './waytosee.css'
import Waytoseechild from './Waytoseechild'
import Waytoseemap from './Waytoseemap'

const Waytosee = () => {
  function giveUserDetai (card){
    alert("hello "+ card)
  }
  return (
    <>
      <section className='waytoseesec' style={{backgroundColor:'#F8FAF4'}}>
        <div className='text-center'>
          <h1 className=''>Three ways to sell</h1>
          <p className='pt-3 fs-5'>There’s no all-in-one formula for success as a creator. That’s why we let you choose how to build your business.</p>
          {/* I recive info from middle of wayToSeeChild componenr in Parent component */}
          <Waytoseechild>
            <h1>Here is middle</h1>
          </Waytoseechild>
        </div>
        {/* <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4  col-xl-4 col-sm-12">
              <Waytoseecards img1={cardImg1} cardTitle="Online courses" cardText="Our intuitive course builder gives you the power to share what you know. No coding or design skills necessary." cardLinkAdd="Learn More" forClick={giveUserDetai}/>
            </div>
            <div className="col-lg-4  col-xl-4 col-sm-12">
              <Waytoseecards img1={cardImg2} cardTitle="Digital download" cardText="Reach your audience with the content they want, faster than ever. Sell PDFs, audio clips, and more." cardLinkAdd="Learn more" forClick={giveUserDetai}/>
            </div>
            <div className="col-lg-4  col-xl-4 col-sm-12">
              <Waytoseecards img1={cardImg3} cardTitle="Coaching Product" cardText="Manage your coaching business with milestones and scheduling, plus, process payments all on Teachable." cardLinkAdd="Learn more" forClick={giveUserDetai}/>
            </div>
          </div>
        </div> */}
        <Waytoseemap/>
      </section>
    </>
  )
}

export default Waytosee;