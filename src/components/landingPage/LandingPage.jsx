import React from "react";
import "./LandingPage.scss";
import logo from "../../assets/images/LOOG 1.png";
import Maskgroup from "../../assets/images/Mask group.png";
import DashbordLogo from "../../assets/images/logodash.png";
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
            <h3>Request for Demo 1028 101 3030</h3>
            <button className="cta-button">Book a Demo</button>
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
            <div className="graph">
              {/* Sidebar */}
              <div className="sidebar">
                <div className="logodash">
                  <img src={DashbordLogo} alt="Dashboard Logo" />
                </div>
                <div className="menu-item"></div>
                <div className="menu-item"></div>
                <div className="menu-item"></div>
                <div className="menu-item"></div>
                <div className="menu-item"></div>
                <div className="menu-item"></div>
              </div>

              {/* Top Cards */}
              <div className="top-cards">
                <div className="top-card"></div>
                <div className="top-card"></div>
                <div className="top-card"></div>
                <div className="top-card"></div>
              </div>

              {/* Chart Area */}
              <div className="chart"></div>

              {/* Right Cards */}
              <div className="right-cards">
                <div className="right-card"></div>
                <div className="right-card"></div>
                <div className="right-card"></div>
                <div className="right-card"></div>
              </div>

              {/* Bottom Card with Donut */}
              <div className="bottom-card">
                <div className="donut-placeholder"></div>
                <div className="bottom-content">
                  <div
                    className="right-card"
                    style={{ marginBottom: "8px", height: "20px" }}
                  ></div>
                  <div
                    className="right-card"
                    style={{ marginBottom: "8px", height: "20px" }}
                  ></div>
                  <div className="right-card" style={{ height: "20px" }}></div>
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
