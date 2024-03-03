import React from 'react'
import "./footer.css"
import {Container, Row,Col} from "react-bootstrap"
import logo from "../../assets/footer.png"
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer_main'>
     <Container>
        <Row>
           <Col lg={5} xs={6}>
            <img src={logo} alt="" className='footer_img'/>
            <p className='we'>We are always open to discuss your project and improve your online presence.</p>
           </Col>
           <Col lg={4} lg={{offset:1}} xs={6}>
            <h1 className='talk'>Lets Talk!</h1>
            <p className='are'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
            <div className='link'> <FaFacebook className='icon1' /> <FaTwitter  className='twi'/>  <FaInstagram className='insta' />  <FaLinkedin className='in' /> </div>
           </Col>
           <div className='box4 d-flex'>
                <Col lg={3} xs={6}>
              <h6 className='email'>Email me at</h6>
              <p className='contactwae'>contact@website.com</p></Col>
              <Col lg={4} lg={{offset:2}} className='call2' xs={6}>
                <h6 className='call'>Call us</h6>
                <p className='contactee'>0927 6277 28525</p>
              </Col>
            </div>
        </Row>
     </Container>
    </div>
  )
}

export default Footer


