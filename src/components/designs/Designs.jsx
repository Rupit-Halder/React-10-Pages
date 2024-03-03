import React from 'react'
import "./designs.css"
import {Container,Row,Col} from "react-bootstrap"
import group from "../../assets/group.png"
import long from "../../assets/long.png"
import circle from "../../assets/Circle.png"



const Designs = () => {
  return (
    <div className='designs_main'>
     <Container>
        <Row>
            <Col lg={5}>
                <h5 className='about1'>About us</h5>
                <h1 className='solve'>Our designs solve problems</h1>
                <p className='Ll'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </Col>
            <Col lg={5} lg={{offset:2}}>
                <img src={group} alt=""  className='w-100' />
            </Col>
        </Row>
          <div className='ttt'>
        <Row className='tt'>
            <Col lg={5} lg={{offset:1}}>
                <h5 className='who'>Who we are</h5>
                <h1 className='goal'>Goal focussed</h1>
                <p className='oo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Col>
            <Col lg={6} >
                <h1 className='cont mt-4'>Continuous improvement</h1>
                <p className='qq'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Col>
            </Row>
            <Row>
            <Col lg={12}>
                <img src={long} alt="" className='w-100' />
            </Col>
            </Row>
            </div>

               <div className='thee'>
            <Row>
            <Col lg={6}  lg={{offset:4}} >
                <h1 className='the'>The process we follow</h1>
            </Col>
            </Row>
            <Row>
            <Col lg={3} xs={6}>
                <img src={circle} alt="" className='circle' />
                <h4 className='pla'>Planning</h4>
                <p className='ip'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Col>
            <Col lg={3} xs={6}>
            <img src={circle} alt=""  className='circle'/>
                <h4 className='pla'>Conception</h4>
                <p className='ip'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Col>
            <Col lg={3} xs={6}>
            <img src={circle} alt="" className='circle' />
                <h4 className='pla'>Design</h4>
                <p className='ip'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Col>
            <Col lg={3} xs={6}>
            <img src={circle} alt=""  className='circle'/>
                <h4 className='pla'>Development</h4>
                <p className='ip'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Col>
            </Row>
            </div>
     </Container>
    </div>
  )
}

export default Designs