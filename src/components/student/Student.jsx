import React from 'react'
import "./student.css"
import {Container,Row,Col} from "react-bootstrap"
import group2 from "../../assets/group2.png"
import place1 from "../../assets/place1.png"
import place2 from "../../assets/place2.png"
import place3 from "../../assets/place3.png"
import place4 from "../../assets/place4.png"
import place5 from "../../assets/place5.png"
import place6 from "../../assets/place6.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Student = () => {
  return (
    <div className='student_main'>
   <Container>
    <Row>
        <Col lg={8} lg={{offset:2}}>
          <div className='text-center'>
           <h1 className='aA'>A UX Case Study on Creating a Studious Environment for Students</h1>
           <p className='pP'>Andrew Jonson
                 Posted on 27th January 2021</p>
          </div>
        </Col>
    </Row>

    <Row>
        <Col lg={12}>
         <img src={group2} alt=""  className=' group_pic w-100'/>
        </Col>
    </Row>

    <Row>
        <Col lg={8} lg={{offset:2}}>
          <p className='opopop text-center'> Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
        </Col>
    </Row>
    <Row>
        <Col lg={2} lg={{offset:5}}>
        <p className=' reaas'>Read more</p>
        </Col>
    </Row>

   <Row>
    <Col lg={2} lg={{offset:5}}>
      <h1 className='blssssss mb-5'>Our Blog</h1>
    </Col>
   </Row>
    
    <Row>
        <Col lg={4}>
         <img src={place1} alt="" className='w-100 ' />
         <p className='dte'>27 Jan 2021</p>
         <h3 className='wer'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
         <p className='rtrt'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
         <a href="" className='errt'>Read More <FaArrowRightLong /></a>
        </Col>
        <Col lg={4}>
         <img src={place2} alt="" className='w-100 mt-5' />
         <p className='dte'>27 Jan 2021</p>
         <h3 className='wer'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
         <p className='rtrt'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
         <a href="" className='errt'>Read More <FaArrowRightLong /></a>
        </Col>
        <Col lg={4}>
         <img src={place3} alt="" className='w-100 mt-5' />
         <p className='dte'>27 Jan 2021</p>
         <h3 className='wer'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
         <p className='rtrt'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
         <a href="" className='errt'>Read More <FaArrowRightLong /></a>
        </Col>
    </Row>
     <Row>
        <Col lg={4}>
         <img src={place4} alt="" className='w-100 sad mt-5'/>
         <p className='dte'>27 Jan 2021</p>
         <h3 className='wer'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
         <p className='rtrt'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
         <a href="" className='errt'>Read More <FaArrowRightLong /></a>
        </Col>
        <Col lg={4}>
         <img src={place5} alt="" className='w-100 sad mt-5'/>
         <p className='dte'>27 Jan 2021</p>
         <h3 className='wer'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
         <p className='rtrt'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
         <a href="" className='errt'>Read More <FaArrowRightLong /></a>
        </Col>
        <Col lg={4}>
            <div className='diw'>
         <img src={place6} alt="" className='w-100 sad mt-5'/>
         <p className='dte'>27 Jan 2021</p>
         <h3 className='wer'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
         <p className='rtrt'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
         <a href="" className='errt'>Read More <FaArrowRightLong /></a>
          </div>
        </Col>
     </Row>


   </Container>

    </div>
  )
}

export default Student