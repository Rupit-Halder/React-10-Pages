import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./build.css"

const Build = () => {
  return (
    <div className='build_main'> 
     <Container>
        <Row>
            <Col lg={6} lg={{offset:1}} className='text-center'>
              <div className='build_all'>
              <h1 className='buildss'>Let's build something great together</h1>
              <p className='nuuuu'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
              <a href="" className='contact123'> Contact Us</a>
              </div>
            </Col>
        </Row>
     </Container>

    </div>
  )
}

export default Build