import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./benefits2.css"
import logoone from "../../assets/Logo-1.png"
import logotwo from "../../assets/Logo-2.png"
import logothree from "../../assets/Logo-3.png"
import logofour from "../../assets/Logo-4.png"
import logofive from "../../assets/Logo-5.png"
import note from "../../assets/note.png"
import cross from "../../assets/cross.png"
import people2 from "../../assets/poeple1.png"
import client from "../../assets/client.png"

const Benefits2 = () => {
  return (
    <div>

        <Container>
        <Row className='mt-5'>
                <Col lg={2} xs={4} className='company_main mt-3'>
                    <h1 className='nom'>100.000+</h1>
                    <p className='fin'>Finsweet Users</p>
                </Col>
                <Col lg={2} xs={4}>
                   <img src={logoone} alt="" className='mt-4' />
                </Col>
                <Col lg={2} xs={4}>
                <img src={logotwo} alt="" className='mt-4'/>
                </Col>
                <Col lg={2} xs={4}>
                <img src={logothree} alt="" className='mt-4'/>
                </Col>
                <Col lg={2} xs={4}>
                <img src={logofour} alt="" className='mt-4'/>
                </Col>
                <Col lg={2} xs={4}>
                <img src={logofive} alt="" className='mt-4'/>
                </Col>
            </Row>

            <Row>
                <Col lg={4} lg={{offset:3}} xs={4} xs={{offset:1}} className='text-center mt-5'>
                    <h1 className='offf'>The benefits of working with our team</h1>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                    <div className='div1 mt-4'>
                    <img src={note} alt=""  className='note'/>
                    <h3 className='cus'>Customize with ease</h3>
                    <p className='l2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='div1 mt-4'>
                    <img src={cross} alt="" className='note' />
                    <h3 className='cus'>Customize with ease</h3>
                    <p className='l2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='div1 mt-4'>
                    <img src={people2} alt="" className='note'/>
                    <h3 className='cus'>Customize with ease</h3>
                    <p className='l2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                 <p className='use1'>Use Client-first</p>
                 <h1 className='top100'>Top agencies and freelancers around the world use 
                         Client-first </h1>
                         <p className='ioo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </Col>
                <Col lg={6}>
                     <img src={client} alt=""  className=' client_pic w-100 mt-5'/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Benefits2