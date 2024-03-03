import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./clients.css"
import Mask from "../../assets/Mask.png"

const Clients = () => {
  return (
    <div className='clients_main'>
   <Container>
    <Row>
        <Col lg={4}>
         <h3 className='whttt'>What our clients say about us</h3>
         <p className='opopui'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </Col>
        <Col lg={7} lg={{offset:1}}>
         <h3 className='kjkhj'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
         <div className="main18 d-flex">
              <a href=""> <img src={Mask} alt="" className='mask mt-5 '/> </a>
               <div className="main19 mt-5 ms-3 ">
              <h5>Jenny Wilson</h5>
              <p>Vice President</p>
               </div>
               </div>
        </Col>
    </Row>
   </Container>

    </div>
  )
}

export default Clients