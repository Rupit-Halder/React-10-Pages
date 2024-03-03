import React from 'react'
import "./blog.css"
import {Container,Row,Col} from "react-bootstrap"
import man from "../../assets/man.png"
import apple from "../../assets/apple.png"
import female from "../../assets/female2.png"
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Blog = () => {
  return (
    <div className='blog_main'>
        <Container>
          <Row>
            <Col lg={2}>
              <h1 className='blog23'>Our Blog</h1>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <img src={man} alt="" className='man w-100'/>
              <p className='date'>19 Jan 2022</p>
              <h6 className='how'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
              <p className='see'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <a href="" className='read'>Read More <HiMiniArrowLongRight /></a>
            </Col>
            <Col lg={4}>
              <img src={female} alt="" className='man w-100'/>
              <p className='date'>19 Jan 2022</p>
              <h6 className='how'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
              <p className='see'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <a href="" className='read'>Read More <HiMiniArrowLongRight /></a>
            </Col>
            <Col lg={4}>
              <img src={apple} alt="" className='man w-100'/>
              <p className='date'>19 Jan 2022</p>
              <h6 className='how'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
              <p className='see'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <a href="" className='read'>Read More <HiMiniArrowLongRight /></a>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Blog