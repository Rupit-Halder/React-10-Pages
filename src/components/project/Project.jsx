import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./project.css"
import { HiArrowLongRight } from "react-icons/hi2";
import card from "../../assets/Card.png"
import rec from "../../assets/Rectangle .png"
import rec2 from "../../assets/rec 2.png"
const Project = () => {
  return (
    <div className='project_main'>
        <Container>
            <Row>
                <Col lg={4} xs={8}>
                    <h3 className='our'>View our projects</h3>
                  
                </Col>
                <Col lg={2} lg={{offset:6}} >
                    <a href="" className='more'>View More <HiArrowLongRight/></a>
                </Col>
                
                <Col lg={8}>
                    <div className='DD'>
                <img src={card} alt="" className=' maincard w-100'  />
                <div className='overlay'>
                    <div className="text3">
                        <h4 className=' office  ms-5'>Workhub office Webflow Webflow Design</h4>
                        <p className=' mi ms-5'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                        <a href="" className='Vv'>View project  <HiArrowLongRight/> </a>
                    </div>
                </div>
                </div>
                </Col>
                <Col lg={4}>
                    <div className="EE mt-2">
                    <img src={rec} alt="" className=' rec1 w-100'/>
                    <div className="overlay1">
                        <div className="text4">
                        <h5 className=" uns  ">Unisaas Website Design </h5>
                        <a href="" className='Pp '>View portfolio <HiArrowLongRight/> </a>
                        </div>
                    </div>
                    </div>
                    <div className="Ff mt-2">
                    <img src={rec2} alt=""  className=' rec2 w-100 '/>
                    <div className="overlay2">
                        <div className="text5">
                        <h5 className=" uns ">Unisaas Website Design </h5>
                        <a href="" className='Pp '>View portfolio <HiArrowLongRight/> </a>
                        </div>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Project