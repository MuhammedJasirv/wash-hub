import React from 'react'
import './HowItWorks.scss'
import WorkOne from '../../assets/images/work/work1.png'
import WorkOneHand from '../../assets/images/work/workhand1.png'
import WorkTwo from '../../assets/images/work/work2.png'
import WorkTwoHand from '../../assets/images/work/workhand2.png'
import WorkThree from '../../assets/images/work/work3.png'
import WorkThreeHand from '../../assets/images/work/workhand3.png'
import WorkFour from '../../assets/images/work/work4.png'
import WorkFourHand from '../../assets/images/work/workhand4.png'
import BlueLightOne from '../../assets/images/desing/blue crile.png'
import BlueLightTwo from '../../assets/images/desing/bleeCrileTwo.png'
const HowItWorks = () => {
  return (
    <div className='how-it-work'>
      <div className="blue-circle">
        <img src={BlueLightOne} alt="" />
      </div>
      <div className="blue-circle-center">
        <img src={BlueLightTwo} alt="" />
      </div>
        <div className='hero'>
            <h2>How Its work ?</h2>
            <p>Running a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, </p>
        </div>
        <div className='content'>
            <Card Img1={WorkOne} Img2={WorkOneHand}/>
            <Card Img1={WorkTwo} Img2={WorkTwoHand}/>
            <Card Img1={WorkThree} Img2={WorkThreeHand}/>
            <Card Img1={WorkFour} Img2={WorkFourHand}/>
        </div>
    </div>
  )
}

export default HowItWorks

const Card = ({Img1,Img2}) => {
  return (
    
    <div className="custom-card">
      <div className="custom-icon">
        {/* <FaDatabase /> */}
        <img  src={Img1} alt="" />
        <img src={Img2} alt="" />
      </div>
      <h3 className="custom-title">
      Drivers use pickup & delivery mobile apps
      </h3>
      <p className="custom-description">
      Running a laundry business can be tcomplex. From managing scheduling is not pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, s ul ah keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pi jkasnsdnsa ajahj jajsacenaj . aj nsnanak ncsnc nacna ackups, keeping track of inventory, 
      </p>
    </div>
  );
};