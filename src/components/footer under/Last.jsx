import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./last.css"
import {Link} from "react-router-dom"

const Last = () => {
  return (
    <div className='last_main'>
    <Container>
        <Row> 
            <Col lg={3} xs={8}  >
                <h6 className='copy'>Copyright 2022, Finsweet.com</h6>
                 </Col>
                   <Col lg={5}>
                    <div className='menu_under d-flex'>
                    <Link to="/" className='home2'>Home</Link>
                    <Link to="/about" className='about'>About</Link>
                    <Link to="/features" className='fea'>Features</Link>
                    <Link to="/pricing" className='pri'>Pricing</Link>
                    <Link to="/blog" className='blog'>Blog</Link>
                       
                    </div>
                 </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Last