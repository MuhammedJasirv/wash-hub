import React from "react";
import "./vision.scss";
import MessageIcon from "../../assets/images/message.png";
import BoxIcon from "../../assets/images/box.png";
import VisionPoints from "../../assets/images/visionpoints.png";
import LeftBuble from "../../assets/images/desing/leftBubules.png";
import RigthBuble from "../../assets/images/desing/rigthBubules.png";
import Bubble from '../../assets/images/bubbles/One1.png'
const Vision = () => {
  return (
    <div className="vision">
      <div className="desing-bubles">
        <img src={LeftBuble} alt="" />
        <img src={RigthBuble} alt="" />
      </div>
      <div className="bubble">
        <img src={Bubble} alt="" />
        <img src={Bubble} alt="" />
      </div>
      <div className="vision-head">
        <h2 className="titile">
          We provide Transforming <br />
          Visions into  All the Digital Reality
        </h2>
        <p className="desictiption">
          Running a laundry business can be complex. From managing scheduling{" "}
          <br /> pickups, keeping track of inventory, and handling requests
        </p>
      </div>
      <div className="vision-contents">
        <div className="left">
          <div className="hero">
            <div className="leftt">
              <div className="graph-one"></div>
            </div>
            <div className="right">
              <div className="graph-one"></div>
            </div>
          </div>
          <div className="content">
            <h2>provide Transforming</h2>
            <p>
              Running a laundry business can be complex. From managing orders to
              scheduling all the pickups, keeping track of inventory, and the
              handling requests all the best of the theamRunning a laundry
              business can be complex. From managing orders to scheduling all
              the pickups, keeping track of inventory, and the handling requests
              all the best of the theamRunning a laundry business can be
              complex. From managing orders to scheduling all the pickups,
              keeping track of inventory, and the handling requests all the best
              of the theamRunning a laundry business can be complex. From
              managing orders to scheduling all the pickups, keeping track of
              inventory, and the handling requests all the best of the theam
            </p>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="hero">
              <h2> provide Transforming </h2>
              <img src={MessageIcon} alt="" />
            </div>
            <p>
              Running a laundry business can be complex. From managing orders to
              scheduling all the pickups, keeping track of inventory, and the
              handling requests all the best of the theamRunning a laundry
              business can be complex. From managing orders to scheduling all
              the pickups
            </p>
          </div>
          <div className="down">
            <div className="hero">
              <h2> provide Transforming </h2>
              <img src={BoxIcon} alt="" />
            </div>
            <p>
              Running a laundry business can be complex. From managing orders to
              scheduling all the pickups, keeping track of inventory, and the
              handling requests all the best of the theamRunning a laundry
              business can be complex. From managing orders to scheduling all
              the pickups
            </p>
          </div>
        </div>
      </div>
      <div className="vision-footer-hero">
      <div className="bubble-footer">
        <img src={Bubble} alt="" />
        <img src={Bubble} alt="" />
      </div>
        <h2 className="titile">
          Laundry Management System that <br /> works on any device & from
          anywhere
        </h2>
        <p className="desictiption">
          Running a laundry business can be complex. From managing scheduling{" "}
          <br /> pickups, keeping track of inventory, and handling requests
        </p>
      </div>
      <div className="vision-footer">
        <div className="items">
          <img src={VisionPoints} alt="" />
          <p>Staff can use either Computer, PAD (or) Mobile</p>
        </div>
        <div className="items">
          <img src={VisionPoints} alt="" />
          <p>Customers use Fabklean app to raise requests</p>
        </div>
        <div className="items">
          <img src={VisionPoints} alt="" />
          <p>Drivers use pickup & delivery mobile apps</p>
        </div>
        <div className="items">
          <img src={VisionPoints} alt="" />
          <p>Owners can use Fabklean Business app</p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
