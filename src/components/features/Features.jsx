import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./features.css"
import icon from "../../assets/Icon.png"
import icon1 from "../../assets/Icon1.png"
import icon2 from "../../assets/Icon2.png"
import icon3 from "../../assets/Icon3.png"
import icon4 from "../../assets/Icon4.png"
import icon5 from "../../assets/Icon5.png"

const Features = () => {
  return (
    <div className='feature_main'>
   <Container>
   <Row className='fffff'>
    <Col lg={6} lg={{offset:1}}>
     <h5 className='feas text-center'>Features</h5>
     <h1 className='desss text-center'>Design that solves problems, one product at a time</h1>
    </Col>
   </Row>
   

    <Row>
     <Col lg={4}>
       <div className='icon123 mt-5'>
         <img src={icon} alt="" className=' icon-1'/>
         <h5 className='usssww pt-3'>Uses Client First</h5>
         <p className='euier'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
       </div>
     </Col>
     <Col lg={4}>
       <div className='icon123 mt-5'>
         <img src={icon1} alt="" className=' icon-1'/>
         <h5 className='usssww pt-3'>Uses Client First</h5>
         <p className='euier'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
       </div>
     </Col>
     <Col lg={4}>
       <div className='icon123 mt-5'>
         <img src={icon2} alt="" className=' icon-1'/>
         <h5 className='usssww pt-3'>Uses Client First</h5>
         <p className='euier'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
       </div>
     </Col>
     <Col lg={4}>
       <div className='icon123 mt-5'>
         <img src={icon3} alt="" className=' icon-1'/>
         <h5 className='usssww pt-3'>Uses Client First</h5>
         <p className='euier'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
       </div>
     </Col>
     <Col lg={4}>
       <div className='icon123 mt-5'>
         <img src={icon4} alt="" className=' icon-1'/>
         <h5 className='usssww pt-3'>Uses Client First</h5>
         <p className='euier'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
       </div>
     </Col>
     <Col lg={4}>
       <div className='icon123 mt-5'>
         <img src={icon5} alt="" className=' icon-1'/>
         <h5 className='usssww pt-3'>Uses Client First</h5>
         <p className='euier'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
       </div>
     </Col>
    </Row>
   </Container>
    </div>
  )
}

export default Features