import React from 'react'
import "./delivery.css"
import {Container,Row,Col} from "react-bootstrap"
import delivery from "../../assets/deli.png"

const Delivery = () => {
  return (
    <div className='delivery_main'> 
     
     <Container>
        <Row>
            <Col lg={6}>
              <img src={delivery} alt=""  className=' delivery_pic  w-1oo'/>
            </Col>

            <Col lg={6}>
             <p className='quick'>Quick Delivery</p>
              <h1 className='iiiiii'>Guranteed 1 week delivery for standard five pager website</h1>
              <p className='mmmmmn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </Col>
        </Row>
     </Container>

    </div>
  )
}

export default Delivery