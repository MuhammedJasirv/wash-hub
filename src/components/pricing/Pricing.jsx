import React, { useState } from 'react'
import './Pricing.scss'
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
  