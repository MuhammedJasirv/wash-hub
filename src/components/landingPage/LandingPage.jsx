import React from "react";
import "./LandingPage.scss";
import logo from "../../assets/images/LOOG 1.png";
import Maskgroup from "../../assets/images/Mask group.png";
import DashbordLogo from "../../assets/images/logodash.png";
import Bubble from '../../assets/images/bubbles/One1.png'
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <img className="logo" src={logo} alt="LDC Software Logo" />
          <h1 className="header-title">Laundry Made Simple and Swift</h1>
          <div className="menu-icon">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="bubble">
            <img src={Bubble} alt="" />
          </div>
          <div className="hero-content">
            <h2>
              Effortless Laundry Management with{" "}
              <span className="highlight">LDC Software</span>
            </h2>
            <p>
              Running a laundry business can be complex. From managing orders to
              scheduling pickups, keeping track of inventory, and handling
              customer requests
            </p>
            <div className="bubble-last">
            <img src={Bubble} alt="" />
          </div>
            <h3>Request for Demo 1028 101 3030</h3>
            <button className="cta-button">Book a Demo</button>
          </div>
          <div className="bubble-three">
            <img src={Bubble} alt="" />
            <img src={Bubble} alt="" />
          </div>
          <div className="hero-image">
            <img
              className="hero-imageone"
              src={Maskgroup}
              alt="Laundry Illustration Left"
            />
            <img
              className="hero-imagetwo"
              src={Maskgroup}
              alt="Laundry Illustration Right"
            />

            {/* Graph Section */}
            <div className="dashboard-container">
                  {/* Sidebar */}
                  <div className="sidebar">
                    <div className="logodash">
                      <img src={DashbordLogo} alt="Dashboard Logo" />
                    </div>
                    {[...Array(6)].map((_, index) => (
                      <div className="menu-item" key={index}></div>
                    ))}
                  </div>
            
                  {/* Main Content */}
                  <div className="main-content">
                    {/* Header Cards */}
                    <div className="header-cards">
                      {[...Array(4)].map((_, index) => (
                        <div className="header-card" key={index}></div>
                      ))}
                    </div>
            
                    <div className="main-body">
                      {/* Left Column */}
                      <div className="left-section">
                        <div className="graph"></div>
                        <div className="donut-section">
                          <div className="donut-placeholder"></div>
                          <div className="donut-info">
                            {[...Array(3)].map((_, index) => (
                              <div className="donut-line" key={index}></div>
                            ))}
                          </div>
                        </div>
                      </div>
            
                      {/* Right Column Cards */}
                      <div className="right-section">
                        {[...Array(4)].map((_, index) => (
                          <div className="right-card" key={index}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
