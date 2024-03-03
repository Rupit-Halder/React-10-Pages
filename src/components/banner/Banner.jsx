import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import banner_pic from "../../assets/banner.png"
import { FaArrowRightLong } from "react-icons/fa6";
import "./banner.css"
const Banner = () => {
  return (
    <div className='banner_main'>
   <Container>
    <Row>
        <Col lg={6}>
            <h2 className='bui'>Building stellar websites for early startups</h2>
            <p className='banner_lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
            <div className='view'><a href="" className='work'>View Our Work</a> <a href="" className='price'>View Pricing <FaArrowRightLong  className='icon'/></a> </div>
        </Col>
        <Col lg={6}>
            <img src={banner_pic} alt="" className=' banner_pic w-100'/>
        </Col>
    </Row>
   </Container>
   </div>
  )
}

export default Banner