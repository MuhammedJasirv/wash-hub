// import { FaDatabase } from 'react-icons/fa';
import './Test.scss'; // Import global SCSS
import { useState } from 'react';

const Test = () => {
  return (
    
    <div className="custom-Button">
        <p>Yearly Pricing</p>
        <div style={{ padding: "2rem", background: "#f5f5f5" }}>
      <ToggleSwitch />
    </div>
        <p>Monthly Pricing</p>
    </div>
  );
};

export default Test;

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);
  
    return (
      <div
        className={`custom-Button toggle-switch ${isOn ? "on" : "off"}`}
        onClick={() => setIsOn(!isOn)}
      >
        <div className="toggle-thumb" />
      </div>
    );
  };