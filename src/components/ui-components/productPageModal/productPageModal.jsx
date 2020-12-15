import React from "react";
// Scss
import "./productPageModal.scss"
import { Slide, Zoom } from 'react-slideshow-image'
import {Modal, Row, Col, Container} from "react-bootstrap"


const getSlideshow = (images) => {
  return (
    Array.isArray(images) && images.length > 0 ?
      <Slide 
      easing="ease" 
      className="product-slide"
      scale='5'
      autoplay='false'
      > 
        {
          images.map(img=>(
            <div className="each-slide">
              <div className="product-image" style={ { backgroundImage: `url(${img})`} }>
                {/* <span>Slide 1</span> */}
              </div>
            </div>
          )) 
        }
      </Slide>
    : null
  )
}

const zoomInProperties = {
  indicators: true,
  scale: 1.4,
  autoplay: false
}

const getZoomshow = (images) => {
  return (
    Array.isArray(images) && images.length > 0 ?
      <Zoom 
      {...zoomInProperties}
      className="product-slide"
      > 
        {
          images.map( (img, index)=>(
            <div key={index} style={{width: "100%"}}>
                <img style={{ objectFit: "cover", width: "100%" }} src={img} />
            </div>
          )) 
        }
      </Zoom>
    : null
  )
}

const productPageModal= (props) => {
  const { show, setShow, data } = props
  return show ? (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w product-page-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
              <Col className="product-image">
                  {/* {getSlideshow(data.images)} */}
                  {getZoomshow(data.images)}
              </Col>
              <Col className="product-content">
                <div class="product-html">
                  {data.htmlContent()}
                </div>
              </Col>
            </Row>
        </Modal.Body>
      </Modal>
    </>
  ): null
}

export default productPageModal
