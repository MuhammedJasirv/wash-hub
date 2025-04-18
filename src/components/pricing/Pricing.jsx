import React, { useState } from 'react'
import './Pricing.scss'
import PricePoint from '../../assets/images/pricePoint.png'
import PlayStore from '../../assets/images/playstoreprice.png'
import AppStore from '../../assets/images/appstoreprice.png'
import Qa from '../qa/Qa'
const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='hero'>
            <h2>Pricing Plans</h2>
            <p>Running a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, </p>
        </div>
        <div className="pricing-toggle-container">
      <p>Yearly Pricing</p>
      <div style={{ padding: "2rem" }}>
        <ToggleSwitch />
      </div>
      <span>Monthly Pricing</span>
    </div>
    <div className="price-details">
        <p className='price'><span>₹</span>999</p>
        <p className='month'>/month</p>
        <p className='description'>Running a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, </p>
        <div className='points'>
            <div className="items"><img src={PricePoint} alt="" /> <p>Running a laundry business can be complex. From managing scheduling pickups, </p></div>
            <div className="items"><img src={PricePoint} alt="" /> <p>Running a laundry business can be complex. From managing scheduling pickups, </p></div>
            <div className="items"><img src={PricePoint} alt="" /> <p>Running a laundry business can be complex. From managing scheduling pickups, </p></div>
            <div className="items"><img src={PricePoint} alt="" /> <p>Running a laundry business can be complex. From managing scheduling pickups, </p></div>
        </div>
        <button className="choose-plan-button">Choose Plan</button>
    </div>
    <div className='pricing-footer'>
      <div className='left'>
        <h2>Download The App Now</h2>
        <div className='images-download'>
          <img src={PlayStore} alt="" />
          <img src={AppStore} alt="" />
        </div>
      </div>
      <div className='rigth'>
        <h2>We provide Transforming <br />
        Visions into  All the Digital Reality</h2>
      </div>
    </div>
    <Qa/>
    </div>
  )
}

export default Pricing


const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(true);
  
    return (
      <div
        className={`pricing-toggle ${isOn ? "on" : "off"}`}
        onClick={() => setIsOn(!isOn)}
      >
        <div className="toggle-thumb" />
      </div>
    );
  };
  