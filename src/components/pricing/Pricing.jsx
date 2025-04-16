import React, { useState } from 'react'
import './Pricing.scss'
import PricePoint from '../../assets/images/pricePoint.png'
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
  