import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./study.css"
import study1 from "../../assets/study.png"
import hand from "../../assets/hand.png"


const Study = () => {
  return (
    <div className='study_main'>
        <Container>
            <Row>
                <Col lg={8} lg={{offset:2}}>
                  <h1 className='aadad text-center'>A UX Case Study on Creating a Studious Environment for Students</h1>
                  <p className='erttfrs text-center'>Andrew Jonson
                      Posted on 27th January 2021</p>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                 <img src={study1} alt="" className='w-100'/>
                </Col>
            </Row>
            <Row>
                <Col lg={8} lg={{offset:2}}>
                 <div>
                    <h1 className='wars '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p className='lgjh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </div>
                </Col>
            </Row>
            <Row>
                <Col lg={8} lg={{offset:2}}>
                 <div>
                    <h1 className='kjnkk'>Ut enim ad minim veniam, quis nostrud.</h1>
                    <p className='vcvb'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul>
                        <li className='lop1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li className='lop1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li className='lop1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                    </ul>
                    <p className='vbssd'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </div>
                </Col>
            </Row>
            <Row>
                <Row>
                    <Col lg={8} lg={{offset:2}}>
                     <div>
                        <img src={hand} alt="" className='w-100 hand_pic'/>
                     </div>
                    </Col>
                </Row>
            </Row>
            <Row>
                <Col lg={8} lg={{offset:2}}>
                 <div>
                    <h1 className='lkj'>Ut enim ad minim veniam, quis nostrud.</h1>
                    <p className='opouiy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Study