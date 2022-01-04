import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "./about.scss";
import "swiper/css/swiper.css";
// Assets
import Customercare from "../../assets/blog/story01/customer-care.png";
import TechnicalSupp from "../../assets/blog/story02/technical-support.png";
import Supplychain from "../../assets/blog/story03/supply-chain.png";
// import Preview04 from "../../assets/blog/story04/preview.png";
// import Preview05 from "../../assets/blog/story05/preview.png";
// import Preview06 from "../../assets/blog/story06/preview.png";
// Components
import { Row, Col } from "react-flexbox-grid"
import BlogBox from "./blogBox";

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF BLOG STORIES
    stories: [
      {
        image: Customercare,
        id: "1",
        title: "CUSTOMER CARE",
        description: "Live phone and email service and support available Monday–Friday, 8:30 am–5:30 pm EST. Here to help our clients at every step of the wholesale buying process.",
      },
      {
        image: TechnicalSupp,
        id: "2",
        title: "TECHNICAL SUPPORT",
        description: "Ensuring your success with professional engineering and design support. Dedicated to enhancing your product offering through hardware customizations, branding, and more."
      },
      {
        image: Supplychain,
        id: "3",
        title: "SMART SUPPLY CHAIN",
        description: "Meticulous end-to-end supply chain management from production, shipping, customs, to delivery."
      }
      // {
      //   image: Preview04,
      //   id: "4",
      //   title: "BLOG TITLE!",
      //   description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
      //   date: "15 May 2020",
      // },
      // {
      //   image: Preview05,
      //   id: "5",
      //   title: "BLOG ARTICLE!",
      //   description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
      //   date: "20 May 2020",
      // },
      // {
      //   image: Preview06,
      //   id: "6",
      //   title: "AWESOME TITLE!",
      //   description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
      //   date: "23 May 2020",
      // },
    ],
  };

  render() {
    // BLOG STORIES RENDER
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <div key={story.id}>
          <BlogBox article={story} />
        </div>
      ));
    }
    // OPTIONS FOR BLOG SLIDER
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };



    return (
      <div className="about" id="about">
        <div className="wrapper">
          <Row>
            <Col className="big__title">
              <h2 className="weight800 font40 padding40">About Us
                {/* <span className="cann-blue"> Cann</span>
                <span className="cann-yellow">Value</span> */}
              </h2>    
            </Col>
          </Row>
          <p className="font20">
          Headquartered in Canada, backed by top-tier vaping device manufacturers, CannValue serves the cannabis industry by providing wholesale high-end vaporizer cartridges, power supplies, disposables and dry herb vaporizers to licensed producers. 
          </p>
          <br />
          <p className="font20">
          CannValue sets and adheres to the highest standards of quality and reliability. Our team is composed of local talents and professionals with many years of industry experience that focuses in cannabis, tobacco, and pharmaceuticals. 
          </p>
          <div className="padding30">
            <Swiper {...params}>{storiesRender}</Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
