import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./team.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/bing.jpg"
import Person02 from "../../assets/about/steward.jpg"
import Person03 from '../../assets/about/sparaggon.jpg'
import Person04 from '../../assets/about/mahin.jpeg'
import Person05 from '../../assets/about/robin.jpeg'

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="The TEAM" />
      <p className="font12">
      </p>
      <Row>
        <Col md={12} lg={2}>
        </Col>
        <Col md={12} lg={3}>
          <TeamBox avatar={Person01} name="Bing" job="Founder" />
        </Col>
        <Col md={12} lg={5}>
          <div className="team__info flex-center">
            <div>
              <p className="font12 weight500">
                Bing has extensive experience in running startups from different industries (including cannabis). He had successfully initiated and exited few startups in the past decade. Furthermore, he has tremendous resources and experiences in the venture capital and private equity market as he has served as advisor and partner for different financial firms. Bing graduated from University of Toronto with an Honor B.A degree majoring in Economics and Math.
             </p>
            </div>
          </div>
        </Col>
        <Col md={12} lg={2}>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={3}>
          <TeamBox avatar={Person02} name="Steward" job="Sales director" />
        </Col>
        <Col md={12} lg={3}>
          <div className="team__info flex-center">
            <div>
              <p className="font12 weight500">
              Steward has been in the sales profession for over 20 years, mainly in cannabis, nicotine, and tobacco industries. Companies he has served ranging from startups to internationally well known corporations which has given him tremendous resources and connections in the industry.
             </p>
            </div>
          </div> 
        </Col>
        <Col md={12} lg={3}>
          <TeamBox avatar={Person03} name="Sparaggon" job="VP of Sales & Marketing" />
        </Col>
        <Col md={12} lg={3}>
          <div className="team__info flex-center">
            <div>
              <p className="font12 weight500">
              Sparaggon graduated from university of waterloo with a degree in Bachelor of Science, Sparragon has over 20 years of sales & marketing professional experience for both the pharmaceutical and cannabis industry. In Canadian legalized cannabis market, Sparragon has demonstrated his capabilities of deep connection with both top tier LPs and small sized brands.
             </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={3}>
          <TeamBox avatar={Person04} name="Mahin" job="R&D Director" />
        </Col>
        <Col md={12} lg={3}>
          <div className="team__info flex-center">
            <div>
              <p className="font12 weight500">
              Mahin holds two master of science degrees with a major in mechanical engineering from both UK and Canadian’ top universities. He has been working in R&D field for both startups and top e-cig brands for nearly a decade.
             </p>
            </div>
          </div>
        </Col>
        <Col md={12} lg={3}>
          <TeamBox avatar={Person05} name="Robin" job="IT director" />
        </Col>
        <Col md={12} lg={3}>
          <div className="team__info flex-center">
            <div>
              <p className="font12 weight500">
              Graduated from University of Toronto with specialist in computer science and software engineering, Robin has been working as a Lead full stack software developer for multiple top Canadian financial institutions during the past 8+ years. 
             </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
