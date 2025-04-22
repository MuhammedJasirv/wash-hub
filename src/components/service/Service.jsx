import React from 'react';
import './Service.scss';
import BlurBg from '../../assets/images/Blur.png'
import iconData from '../../assets/images/serviceData.png'
import Bubble from '../../assets/images/bubbles/One1.png'
const Service = () => {
  return (
    <section className="service">
      <div className="center-light">
        <img src={BlurBg} alt="Blur Effect" />
      </div>
      <div className="bubble">
          <img src={Bubble} alt="" />
          <img src={Bubble} alt="" />
        </div>
      <div className="service-title">
        <h2>
          We provide Transforming<br />
          Visions into  All the Digital Reality
        </h2>
        <p>
          Running a laundry business can be complex. From managing scheduling <br />
          pickups, keeping track of inventory, and handling requests
        </p>
      </div>

      <div className="service-cards">
        <div className="service-card">
                <Card/>
                <Card/>
        </div>
        <div className="service-card-two">
            <div>
                <Card/>
            </div>
        </div>
        <div className="service-card">
            <Card/>
            <Card/>
        </div>
      </div>
      <div className="bubble-last">
          <img src={Bubble} alt="" />
        </div>
    </section>
  );
};

export default Service;

const Card = () => {
    return (
           <div className="transform-card">
              <div className="transform-icon">
                {/* <FaDatabase /> */}
                <img src={iconData} alt="" />
              </div>
              <h3 className="transform-title">
              provide Transforming  
              </h3>
              <p className="transform-description">
                Running a laundry business can be complex. From managing orders to scheduling all the pickups,
                keeping track of inventory, and the handling requests all the best of the theam
              </p>
            </div>
          );
        };