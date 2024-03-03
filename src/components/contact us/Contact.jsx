import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact_main'>
        <Container>
            <Row>
                <Col lg={3} lg={{offset:5}}>
                 <h1 className='contact1'>Contact Us</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={6} lg={{offset:3}}>
                 <p className='text-center lkkj'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </Col>
            </Row>
            <Row>
                <Col lg={10} lg={{offset:1}}>
                  <div  className='box_main'>
                    <Row>
                        <Col lg={4} lg={{offset:1}}>
                            <div className='fast'>
                        <h5 className='name'> Name</h5>
                      <input type="text"  className='input_main' placeholder='Enter your name'/>
                      </div>
                        </Col>
                        <Col lg={6} lg={{offset:1}}> 
                        <div className='sec'>
                        <h5 className='name'> Email</h5>
                         <input type="text"  className='input_main' placeholder='Enter your Email'/>
                         </div>
                        </Col>
                    </Row>
                   <Row>
                   <Col lg={6} lg={{offset:1}}> 
                        <div className='sec'>
                        <h5 className='name'> Subject</h5>
                         <input type="text"  className='input_main' placeholder='Provide context'/>
                         </div>
                        </Col>
                        <Col lg={6} lg={{offset:1}}> 
                        <div className='sec'>
                        <h5 className='name'> Subject</h5>
                         <input type="text"  className='input_main' placeholder='Select Subject'/>
                         </div>
                        </Col>
                   </Row>
                   <Row>
                    <Col lg={9} lg={{offset:1}}>
                     <div className='mssge'>
                        <h5 className='mssg1'>Message</h5>
                        <input type="text"  className='mssg_input' placeholder='Write your  question here'/>
                     </div>
                    </Col>
                   </Row>
                   <Row>
                    <Col lg={3} lg={{offset:1}}>
                      <div className='sendv'>
                        <a href="" className='send_one'>Send Messege</a>
                      </div>
                    </Col>
                   </Row>
                  </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contact