import React from "react";
import "./About.scss";
import AboutImg from "../../assets/images/aboutImage.png";
import dataImg from "../../assets/images/data.svg";
import VerifcationImg from "../../assets/images/verification.svg";
import Bubble from '../../assets/images/bubbles/One1.png'
const About = () => {
  return (
    <div className="about-features">
      <section className="features">
      <div className="bubble">
          <img src={Bubble} alt="" />
        </div>
        <div className="features-center">
          <div className="feature">
            <img src={dataImg} alt="Icon" />
            <h3>Experience and expertise</h3>
          </div>
          <div className="feature">
            <img src={VerifcationImg} alt="Icon" />
            <h3>Experience and expertise</h3>
          </div>
          <div className="feature">
            <img src={dataImg} alt="Icon" />
            <h3>Experience and expertise</h3>
          </div>
          {/* <div className="divider"></div> */}
        </div>
      </section>
      <section className="about">
        <div className="about-content">
          <h2>We provide Transforming Visions into Digital Reality</h2>
          <p>
            Running a laundry business can be complex. From managing orders to
            scheduling pickups, keeping track of inventory, and handling
            requests
          </p>

          <div className="about-point">
            <h3>Provide Transforming Visions into Digital</h3>
            <p>
              Running a laundry business can be complex. From managing orders to
              scheduling pickups, keeping track of inventory
            </p>
          </div>

          <div className="about-point">
            <h3>Provide Transforming Visions into Digital</h3>
            <p>
              Running a laundry business can be complex. From managing
              scheduling pickups, keeping track of inventory, and handling
              requests
            </p>
          </div>
        </div>

        <div className="about-image">
          <img src={AboutImg} alt="About LDC Software" />
        </div>
      </section>
    </div>
  );
};

export default About;
