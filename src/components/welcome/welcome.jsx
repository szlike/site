import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./welcome.scss";
//Assets
import HeroImage from '../../assets/welcome/hero-image.png'
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">
              <span className="cann-blue">Cann</span><span class="cann-yellow">Value</span>
            </h1>
            {/* <h1 className="weight800 font20"> 
              Your top-notch vaporizer cartridges and hardware provider
            </h1> */}
            <p className="font15">
            CannValue is specialized in designing, developing and manufacturing high-end cannabis vaping devices for licensed producers. All CannValue products feature proprietary technology.
            <br />
            A 360˚ ceramic heating coil, continuous saturation, uniform heating, no burning, trusted industry-wide to deliver optimal vaping experience.
            </p>
            <Button label="Contact Us" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
