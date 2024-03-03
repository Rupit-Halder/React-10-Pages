import React from 'react'
import "./about.css"
import {Container,Row,Col} from "react-bootstrap"
import { HiArrowLongRight } from "react-icons/hi2";
import mask from "../../assets/pointer 1.png"
import mask2 from "../../assets/pointer 2.png"
import mask3 from "../../assets/pointer 3.png"
import mask4 from "../../assets/pointer 4.png"

const About = () => {
  return (
    <div className='about_main'>
        <Container>
            <Row>
                <Col lg={4}>
                   <div className="work_left">
                    <h3 className='s'>How we work</h3>
                    <p className='lorem234'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div className='Pp'><a href="" className='getin'>Get in touch with us  <HiArrowLongRight /></a> </div>
                    </div>
                    </Col>
                    
                   <Col lg={{offset:2}} >
                    <Row>
                      <Col lg={6} xs={6}>
                      <div className='work_right'>
                      <img src={mask} alt="" />
                      <h5 className='strat'>Strategyt</h5>
                      <p className='eui'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                    </div>
                      </Col>
                    
                    <Col lg={6} xs={6}>
                    <div className="work_right">
                      <img src={mask2}  alt=""/>
                      <h5 className='wire'> Wireframing</h5>
                      <p className='tur'> Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                      </div>
                    </Col>
                      
                      <Col lg={6} xs={6}>
                      <div className='work_right'>
                    <img src={mask3} alt="" className='mt-4' />
                     <h5 className='design'>Design</h5>
                     <p className='Aa'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                     </div>
                      </Col>
                     
                     <Col lg={6} xs={6}>
                      <div className="work_right">
                      <img src={mask4}   alt="" className='mt-4' />
                   <h5 className='develop'>Development</h5>
                   <p className='Ee'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                      </div>
                     </Col>
                   </Row>
                   </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About