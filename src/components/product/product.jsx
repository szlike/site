import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./product.scss";
//Assets
import Arrow from "../../assets/product/arrow.svg";
import Disposable1 from "../../assets/product/disposable/CVD-1915-blue.png";

import { DisposableProducts } from '../../productsContent/disposable/index'

import { CartridgeProducts } from '../../productsContent/cartridge/index'

import Pod2 from "../../assets/product/pod/1-370x300.png";
import Pod1 from "../../assets/product/pod/pod-2.png";
import Cartridge1 from "../../assets/product/cartridge/cartridge-1.png";
import Cartridge2 from "../../assets/product/cartridge/cartridge-2.png";
import Battery1 from "../../assets/product/battery/battery-1.jpg";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";
import ProductPageModal from "../ui-components/productPageModal/productPageModal"

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogue: [
        {
          id: "1",
          preview: Disposable1,
          title: "Disposable",
          tag: "disposable",
          isCatalogue: true
        },
        {
          id: "2",
          preview: Pod1,
          title: "Pods",
          tag: "pod",
          isCatalogue: true
        },
        {
          id: "3",
          preview: Cartridge1,
          title: "Cartridges",
          tag: "cartridge",
          isCatalogue: true
        },
        {
          id: "4",
          preview: Battery1,
          title: "Battery",
          tag: "battery",
          isCatalogue: true
        },
      ],
      // PORTFOLIO PROJECTS
      products: [
        {
          id: "2",
          preview: Pod2,
          title: "Pod2",
          tag: "pod",
        },
        {
          id: "4",
          preview: Battery1,
          title: "Battery1",
          tag: "battery",
        },
        {
          id: "7",
          preview: Pod1,
          title: "Pod1",
          tag: "pod"
        },
        ...CartridgeProducts,
        ...DisposableProducts
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST",
      isProductPageModalShow: false,
      productPageData: {
        title: '',
        images: []
      }
    }
  }

  // FIRST LOAD
  componentDidMount() {
    this.setState({filterResult: this.state.catalogue, pickedFilter: 'all'})
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.products];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  }

  //display catalogue list
  displayCatelogueList = (target)=> {
    let displayArr = [...this.state.catalogue]
    this.setState( { filterResult: displayArr, pickedFilter: target, pickedFilterDropdown: "NEWEST" })
  }

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

  handleClickonProductBox(type, isCatalogue, id){
    this.setState({filterResult: type})
    if (isCatalogue){
      this.filterGallery(type)
    } else {
      this.openProductPage(id)
      this.filterGallery(type)
    }
  }

  openProductPage(id){
    if (!this.state.isProductPageModalShow){
      this.setState({
        isProductPageModalShow: true,
        productPageData: this.state.products.find(product=>product.id===id).productPageData
      })
    }
  }

  setShow(value) {
    this.setState({isProductPageModalShow: value})
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      const noHover = this.state.pickedFilter === 'all' ? 'no-hover' : '' 
      projectsRender = this.state.filterResult.map((project) => (
        <div onClick={ ()=>this.handleClickonProductBox(project.tag, project.isCatalogue, project.id) }>
          <ProjectBox noHover={noHover} preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
        </div>
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
          <ProductPageModal
            className='product-page-modal'
            setShow={this.setShow.bind(this)}
            show={this.state.isProductPageModalShow}
            data={this.state.productPageData}
           ></ProductPageModal> 
          <Title title="PRODUCT LIST" />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li className={this.state.pickedFilter === "all" ? "portfolio__nav-active font12" : "font12"} 
                  onClick={() => this.displayCatelogueList("all")}>
                    ALL
                  </li>
                  <li
                    className={this.state.pickedFilter === "disposable" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("disposable")}
                  >
                    Disposable
                  </li>
                  <li
                    className={this.state.pickedFilter === "cartridge" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("cartridge")}
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
