import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import support from "../../assets/support.png"
import "./support.css"

const Support = () => {
  return (
    <div className='support_main'>
     
     <Container>
        <Row>
            <Col lg={6}>
               <p className='pppppp'>24/7 Support</p>
               <h1 className='wwwwwww'>Working with us, you will be getting 24/7 priority support</h1>
               <p className='loreeeeeemmmm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </Col>

            <Col lg={6}>
            <img src={support} alt="" className=' support_pic  w-100' />
            </Col>
        </Row>
     </Container>

    </div>
  )
}

export default Support