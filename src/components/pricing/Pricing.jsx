import React from 'react'
import "./pricing.css"
import {Container,Row,Col} from "react-bootstrap"
import { FaCaretRight } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className='pricing_main'>
      <Container>
        <Row>
            <Col lg={6} lg={{offset:1}}>
                <h1 className='price text-center'>Our Pricing Plans</h1>
                <p className='when text-center'>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
            </Col>
        </Row>

        <Row>
            <Col lg={4}>
                <div className='para1 mt-5'>
                  <h3 className='dollar'>$299 <a href="" className='per'>Per Design</a></h3> 
                  <h5 className='land'>Landing Page </h5>
                  <p className='re'>When you’re ready to go beyond prototyping in Figma, </p>
                  <div>
                  <h4 className='angle'>  <FaCaretRight className='fa' /> All limited links</h4>
                   <h4 className='angle'> <FaCaretRight className='fa'/> Own analytics platform</h4>
                   <h4 className='angle'> <FaCaretRight className='fa'/> Chat support</h4>
                   <h4 className='angle'> <FaCaretRight className='fa1'/> Optimize hashtags</h4>
                   <h4 className='angle'> <FaCaretRight className='fa1'/> Unlimited users</h4>
                  </div>
                  <div className='start'>
                    <a href="" className='gety'>Get Started</a>
                  </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='para1 mt-5'>
                  <h3 className='dollar'>$399 <a href="" className='per'>Multi Design</a></h3> 
                  <h5 className='land'>Website Page  </h5>
                  <p className='re'>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help. </p>
                  <div>
                  <h4 className='angle'>  <FaCaretRight className='fa' /> All limited links</h4>
                   <h4 className='angle'> <FaCaretRight className='fa'/> Own analytics platform</h4>
                   <h4 className='angle'> <FaCaretRight className='fa'/> Chat support</h4>
                   <h4 className='angle'> <FaCaretRight className='fa'/> Optimize hashtags</h4>
                   <h4 className='angle'> <FaCaretRight className='fa'/> Unlimited users</h4>
                  </div>
                  <div className='start1'>
                    <a href="" className='gety'>Get Started</a>
                  </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='para1 mt-5'>
                  <h3 className='dollar'>$499 +<a href="" className='per'>Per Design</a></h3> 
                  <h5 className='land'>Complex Project  </h5>
                  <p className='re'>When you’re ready to go beyond prototyping in Figma,  </p>
                  <div className='pad'>
                  <h4 className='angle'>  <FaCaretRight className='fa' /> All limited links</h4>
                   <h4 className='angle'> <FaCaretRight className='fa'/> Own analytics platform</h4>
                   <h4 className='angle'> <FaCaretRight className='fa'/> Chat support</h4>
                   <h4 className='angle'> <FaCaretRight className='fa'/> Optimize hashtags</h4>
                   <h4 className='angle'> <FaCaretRight className='fa'/> Unlimited users</h4>
                  </div>
                  <div className='start'>
                    <a href="" className='gety'>Get Started</a>
                  </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Pricing