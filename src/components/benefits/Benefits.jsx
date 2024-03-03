import React from 'react'
import "./benefits.css"
import {Container,Row,Col} from "react-bootstrap"
import note from "../../assets/note.png"
import cross from "../../assets/cross.png"
import people2 from "../../assets/poeple1.png"
import logoone from "../../assets/Logo-1.png"
import logotwo from "../../assets/Logo-2.png"
import logothree from "../../assets/Logo-3.png"
import logofour from "../../assets/Logo-4.png"
import logofive from "../../assets/Logo-5.png"
import popone from "../../assets/member-1.png"

const Benefits = () => {
  return (
    <div className='benefits_main'>
        <Container>
        <Row>
                <Col lg={5} lg={{offset:0}}>
                    <h1 className='of'>The benefits of working with us</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <div className='div1 mt-5'>
                    <img src={note} alt=""  className='note'/>
                    <h3 className='cus'>Customize with ease</h3>
                    <p className='l2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='div1 mt-5'>
                    <img src={cross} alt="" className='note' />
                    <h3 className='cus'>Customize with ease</h3>
                    <p className='l2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='div1 mt-5'>
                    <img src={people2} alt="" className='note'/>
                    <h3 className='cus'>Customize with ease</h3>
                    <p className='l2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg={2} className='company_main mt-3' xs={4}>
                    <h1 className='nom'>100.000+</h1>
                    <p className='fin'>Finsweet Users</p>
                </Col>
                <Col lg={2} xs={4}>
                   <img src={logoone} alt="" className='mt-4' />
                </Col>
                <Col lg={2} xs={4}>
                <img src={logotwo} alt="" className='mt-4' />
                </Col>
                <Col lg={2} xs={4}>
                <img src={logothree} alt="" className='mt-4' />
                </Col>
                <Col lg={2} xs={4}>
                <img src={logofour} alt="" className='mt-4'/>
                </Col>
                <Col lg={2} xs={4}>
                <img src={logofive} alt="" className='mt-4'/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Benefits