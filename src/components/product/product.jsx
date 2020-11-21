import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./product.scss";
//Assets
import Arrow from "../../assets/product/arrow.svg";
import Disposable1 from "../../assets/product/disposable/1-370x300.png";
import Disposable2 from "../../assets/product/disposable/2-370x500.png";
import Pod2 from "../../assets/product/pod/1-370x300.png";
import Pod1 from "../../assets/product/pod/pod-2.png";
import Cartridge1 from "../../assets/product/cartridge/cartridge-1.png";
import Cartridge2 from "../../assets/product/cartridge/cartridge-2.png";
import Battery1 from "../../assets/product/battery/battery-1.jpg";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Disposable1,
          title: "Disposable1",
          tag: "disposable",
        },
        {
          id: "2",
          preview: Pod2,
          title: "Pod2",
          tag: "pod",
        },
        {
          id: "3",
          preview: Battery1,
          title: "Battery1",
          tag: "battery",
        },
        {
          id: "4",
          preview: Cartridge1,
          title: "Cartridge1",
          tag: "cartridges",
        },
        {
          id: "5",
          preview: Pod1,
          title: "Pod1",
          tag: "pod",
        },
        {
          id: "6",
          preview: Disposable2,
          title: "Disposable2",
          tag: "disposable",
        },
        {
          id: "7",
          preview: Cartridge2,
          title: "Cartridge2",
          tag: "cartridges",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if (this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
            NEWEST
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="PRODUCT LIST" />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li className={this.state.pickedFilter === "all" ? "portfolio__nav-active font12" : "font12"} 
                  onClick={() => this.filterGallery("all")}>
                    ALL
                  </li>
                  <li
                    className={this.state.pickedFilter === "disposable" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("disposable")}
                  >
                    Disposable
                  </li>
                  <li
                    className={this.state.pickedFilter === "cartridges" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("cartridges")}
                  >
                    Cartridges
                  </li>
                  <li className={this.state.pickedFilter === "pod" ? "portfolio__nav-active font12" : "font12"} 
                  onClick={() => this.filterGallery("pod")}>
                    Pod
                  </li>
                  <li className={this.state.pickedFilter === "battery" ? "portfolio__nav-active font12" : "font12"} 
                  onClick={() => this.filterGallery("battery")}>
                    Battery
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font12">{this.state.pickedFilterDropdown} FIRST</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="Book an Appointment" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
