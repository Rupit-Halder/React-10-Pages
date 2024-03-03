import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./portfolio.css"
import { FaFacebook,FaTwitter,FaInstagramSquare,FaLinkedin  } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className='portfolio_main'>
  
    <Container>
        <Row>
            <Col lg={6} lg={{offset:1}}>
                <div className='upper_portfolio text-center'>
                <p className='weeee'>What we created</p>
                <h1 className='ourrrrr'>Our Work Portfolio</h1>
                </div>
                <div className='down_portfolio text-center'>
                    <p className='helppppp'>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                </div>
                <div className='portfolio_icon text-center'>
                <FaFacebook  className='f2'/> <FaTwitter className='f1' /> <FaInstagramSquare className='f1'/> <FaLinkedin className='f1'/>
                </div>
            </Col>
        </Row>
    </Container>

    </div>
  )
}

export default Portfolio