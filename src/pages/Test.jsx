// import { FaDatabase } from 'react-icons/fa';
import './Test.scss'; // Import global SCSS
import iconData from '../assets/images/serviceData.png'
import Work1 from '../assets/images/work/work1.png'
import Workhand1 from '../assets/images/work/workhand1.png'

const Test = () => {
  return (
    
    <div className="custom-card">
      <div className="custom-icon">
        {/* <FaDatabase /> */}
        <img  src={Work1} alt="" />
        <img src={Workhand1} alt="" />
      </div>
      <h3 className="custom-title">
      Drivers use pickup & delivery mobile apps
      </h3>
      <p className="custom-description">
      Running a laundry business can be tcomplex. From managing scheduling is not pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, s ul ah keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pi jkasnsdnsa ajahj jajsacenaj . aj nsnanak ncsnc nacna ackups, keeping track of inventory, 
      </p>
    </div>
  );
};

export default Test;
