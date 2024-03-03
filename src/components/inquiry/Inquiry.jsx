import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./inquiry.css"
import woman from "../../assets/woman.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Inquiry = () => {
  return (
    <div>
    <Container>
      <Row>
       <Col lg={6}>
       <div className="main41">
        <img src={woman} alt=""  className=' woman_pic w-100'/>
        <div className="overlay4">
          <div className="text13 justify-content-center">
          <h1 className="ste">Building stellar websites for early startups</h1>
          <p className=" asdasdas ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. </p>
          </div>
        </div>
      </div>
       </Col>
       <Col lg={6}>
        <div className='form1'>
          <h4 className='sends'>Send inquiry</h4>
          <p className='oioyu'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <input type="text"  placeholder='Your Name' className='innnn'/>
          <input type="email" placeholder='Email' className='innnn'/>
          <input type="text" placeholder='Paste your Figma design URL' className='innnn'/>
           <a href="" className='annnnss'>Send an Inquiry </a>
           <h6 className='getstss'>Get in touch with us  <FaArrowRightLong /></h6>
          </div>  
      

       </Col>
      </Row>
    </Container>

    </div>
  )
}

export default Inquiry