import React from 'react'
import "./revision.css"
import {Container,Row,Col} from "react-bootstrap"
import revision from "../../assets/revision.png"

const Revision = () => {
  return (
    <div className='revision_main'>
     
     <Container>
        <Row>
            <Col lg={6}>
             <img src={revision} alt="" className=' revision_pic w-100' />
            </Col>

            <Col lg={6}>
             <p className='freeee'>Free Revision Rounds</p>
             <h1 className='gettttt'>Get free Revisions and one week of free maintenance</h1>
             <p className='loooooo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </Col>
        </Row>
     </Container>

    </div>
  )
}

export default Revision