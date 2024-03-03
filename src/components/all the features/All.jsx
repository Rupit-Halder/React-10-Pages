import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import hero from "../../assets/hero.png"
import "./all.css"

const All = () => {
  return (
    <div className='hero_main'>

         <Container>
            <Row>
                <Col lg={6}>
                 <h1 className='u1'>All the features you need</h1>
                 <p className='lop'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 <a href="" className='vww'>View Pricing</a>
                </Col>

                <Col lg={6}>
                  <img src={hero} alt=""  className=' hero_pic w-100 '/>
                </Col>

            </Row>
         </Container>
    </div>
  )
}

export default All