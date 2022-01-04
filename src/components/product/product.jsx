import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./product.scss";
import 'react-slideshow-image/dist/styles.css'

//Assets
import Arrow from "../../assets/product/arrow.svg";
import PodDisposable from "../../assets/product/pod-disposable/pod-disposable-catelogue.png"
import PenDisposable from "../../assets/product/pen-disposable/pen-disposable-catelogue.png"
import Vaporizer from "../../assets/product/vaporizer/vaporizer-catelogue.png";
import Cartridge from "../../assets/product/cartridge/cartridge-catelogue.png";
import Battery from "../../assets/product/battery/battery-catelogue.png";

import { PodDisposableProducts } from '../../productsContent/pod-disposable/index'
import { PenDisposableProducts } from '../../productsContent/pen-disposable/index'
import { CartridgeProducts } from '../../productsContent/cartridge/index'
import { VaporizerProducts } from '../../productsContent/vaporizer/index'
import { BatteryProducts } from '../../productsContent/battery/index'

//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";
import ProductPageModal from "../ui-components/productPageModal/productPageModal"



//state 

//prop

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogue: [
        {
          id: "1",
          preview: PenDisposable,
          title: "Disposable (Pen Style)",
          tag: "pen-disposable",
          isCatalogue: true,
        },
        {
          id: "2",
          preview: PodDisposable,
          title: "Disposable (Pod Style)",
          tag: "pod-disposable",
          isCatalogue: true
        },
        {
          id: "3",
          preview: Cartridge,
          title: "Cartridges",
          tag: "cartridge",
          isCatalogue: true
        },
        {
          id: "4",
          preview: Vaporizer,
          title: "Dry Herb Vaporizers",
          tag: "vaporizer",
          isCatalogue: true
        },
        {
          id: "5",
          preview: Battery,
          title: "Batteries",
          tag: "battery",
          isCatalogue: true
        },
      ],
      // PRODUCT PROJECTS
      products: [
        ...BatteryProducts,
        ...VaporizerProducts,
        ...CartridgeProducts,
        ...PodDisposableProducts,
        ...PenDisposableProducts,
      ],
      // PRODUCT GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
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

  //FILTER PRODUCT FUNCTION
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
    // PRODUCT GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      const noHover = this.state.pickedFilter === 'all' ? 'no-hover' : '' 
      projectsRender = this.state.filterResult.map((project) => (
        <div onClick={ ()=>this.handleClickonProductBox(project.tag, project.isCatalogue, project.id) }>
          <ProjectBox noHover={noHover} preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
        </div>
      ));
    }
    // PRODUCT GALLERY BREAKPOINTS
    const productBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PRODUCT FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if (this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="product__filter-menu shadow">
          <p className="font14 col-xs-2" onClick={() => this.filterDropDownHandler("NEWEST")}>
            NEWEST
          </p>
          <p className="font14 col-xs-2" onClick={() => this.filterDropDownHandler("OLDEST")}>
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="product">
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
              <div className="product__nav">
                <ul>
                  <li className={this.state.pickedFilter === "all" ? "product__nav-active font14 col-xs-2" : "font14 col-xs-2"} 
                  onClick={() => this.displayCatelogueList("all")}>
                    ALL
                  </li>
                  <li
                    className={this.state.pickedFilter === "pen-disposable" ? "product__nav-active font14 col-xs-2" : "font14 col-xs-2"}
                    onClick={() => this.filterGallery("pen-disposable")}
                  >
                    Pen-style Disposable
                  </li>
                  <li
                    className={this.state.pickedFilter === "pod-disposable" ? "product__nav-active font14 col-xs-2" : "font14 col-xs-2"}
                    onClick={() => this.filterGallery("pod-disposable")}
                  >
                    Pod-style Disposable
                  </li>
                  <li className={this.state.pickedFilter === "vaporizer" ? "product__nav-active font14 col-xs-2" : "font14 col-xs-2"} 
                  onClick={() => this.filterGallery("vaporizer")}>
                    Dry Herb Vaporizers
                  </li>
                  <li
                    className={this.state.pickedFilter === "cartridge" ? "product__nav-active font14 col-xs-2" : "font14 col-xs-2"}
                    onClick={() => this.filterGallery("cartridge")}
                  >
                    Cartridges
                  </li>
                  <li className={this.state.pickedFilter === "battery" ? "product__nav-active font14 col-xs-2" : "font14 col-xs-2"} 
                  onClick={() => this.filterGallery("battery")}>
                    Batteries
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div className="product__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font14 col-xs-4">{this.state.pickedFilterDropdown} FIRST</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry breakpointCols={productBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="Contact us" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Product;
