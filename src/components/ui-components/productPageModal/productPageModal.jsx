import React from "react";
// Scss
import "./productPageModal.scss"
import { Slide } from 'react-slideshow-image'
import {Modal, Row, Col, Container} from "react-bootstrap"
import 'react-slideshow-image/dist/styles.css'



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
          <Container>
            <Row>
              <Col>
                  {getSlideshow(data.images)}
              </Col>
              <Col className="product-content">
                  {data.htmlContent()}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  ): null
}

export default productPageModal
