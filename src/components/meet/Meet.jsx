import React from 'react'
import "./meet.css"
import {Container,Row,Col} from "react-bootstrap"
import popone from "../../assets/member-1.png"
import poptwo from "../../assets/member-2.png"
import popthree from "../../assets/member-3.png"
import popfour from "../../assets/member-4.png"
import { FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";

const Meet = () => {
  return (
    <div className='meet_main'>
       <Container>
           <Row>
            <Col lg={4} lg={{offset:1}}>
                <h1 className='meet_one text-center'>Meet our team</h1>
            </Col>
           </Row>

        <Row className='mt-5 member_group'>
            <Col lg={3}>
                <div className='member-1 text-center mt-5'>
                    <div className="member_img">
                         <img src={popone} alt="" className='mt-5'/>
                         <h5 className='john mt-5'>John Smith</h5>
                          <p className='ceo'>CEO</p>
                    </div>
                    <div className="gradiant">
                    <FaFacebook className='for_icon' /> <FaTwitter  className='for_icon'/> <FaLinkedin className='for_icon' />
                    </div>
                </div>
            </Col>
            <Col lg={3}>
                <div className='member-1 text-center  mt-5'>
                    <div className="member_img">
                         <img src={poptwo} alt="" className='mt-5'/>
                         <h5 className='Simon Adams mt-5'>John Smith</h5>
                          <p className='CTO'>CTO</p>
                    </div>
                    <div className="gradiant">
                    <FaFacebook className='for_icon' /> <FaTwitter  className='for_icon'/> <FaLinkedin className='for_icon' />
                    </div>
                </div>
            </Col>
            <Col lg={3}>
                <div className='member-1 text-center  mt-5'>
                    <div className="member_img">
                         <img src={popthree} alt="" className='mt-5'/>
                         <h5 className='john mt-5'>Paul Jones</h5>
                          <p className='ceo'>Design Lead</p>
                    </div>
                    <div className="gradiant">
                    <FaFacebook className='for_icon' /> <FaTwitter  className='for_icon'/> <FaLinkedin className='for_icon' />
                    </div>
                </div>
            </Col>
            <Col lg={3}>
                <div className='member-1 text-center  mt-5'>
                    <div className="member_img">
                         <img src={popfour} alt="" className='mt-5'/>
                         <h5 className='john mt-5'>Sara Hardin</h5>
                          <p className='ceo'>Project Manager</p>
                    </div>
                    <div className="gradiant">
                    <FaFacebook className='for_icon' /> <FaTwitter  className='for_icon'/> <FaLinkedin className='for_icon' />
                    </div>
                </div>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Meet