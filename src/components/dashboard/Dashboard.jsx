import React from "react";
import "./Dashboard.scss";
import DashbordLogo from "../../assets/images/logodash.png";
const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
