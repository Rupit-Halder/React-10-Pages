import React from 'react'
import "./mission.css"
import {Container,Row,Col} from "react-bootstrap"
import aman from "../../assets/aman.png"
import women from "../../assets/womenall.png"

const Mission = () => {
  return (
    <div className='mission-Main'>
     <Container>
     <Row>
                <Col lg={5}>
                    <h5 className='mission'>Our Mission </h5>
                    <h1 className='ins'>Inspire, Innovate, Share</h1>
                    <p className='lop'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
                <Col lg={5} lg={{offset:2}}>
                    <img src={aman} alt="" className='w-100' />
                </Col>
            </Row>
             <div className='imgg'>
            <Row>
                <Col lg={5}>
                    <img src={women} alt=""  className=' women w-100'/>
                </Col>
                <Col lg={5} lg={{offset:2}}>
                    <h5 className='e2 mt-5'>Our Vision</h5>
                    <h1 className='t2'>Laser focus</h1>
                    <p className='y2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
            </Row>
            </div>
     </Container>
    </div>
  )
}

export default Mission