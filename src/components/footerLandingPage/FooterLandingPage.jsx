import React from 'react'
import './FooterLandingPage.scss'
import dataImg from '../../assets/images/data.svg'
import VerifcationImg from '../../assets/images/verification.svg'
const FooterLandingPage = () => {
  return (
    <section className="features">
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
  )
}

export default FooterLandingPage