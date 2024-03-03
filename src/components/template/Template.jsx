import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import temp1 from "../../assets/temp1.png"
import temp2 from "../../assets/temp2.png"
import temp3 from "../../assets/temp3.png"
import temp4 from "../../assets/temp4.png"
import temp5 from "../../assets/temp5.png"
import temp6 from "../../assets/temp6.png"
import { FaArrowRightLong } from "react-icons/fa6";
import "./template.css"

const Template = () => {
  return (
    <div className='template_main'>
      <Container>
      <Tabs
      defaultActiveKey="All"
      id="uncontrolled-tab-example"
      className=" tabs_main  justify-content-center"
    >

      <Tab eventKey="All" title="All" >
        <Row> 
         <Col lg={6}>
          <img src={temp1} alt="" className='w-100 mt-5'/>
          <div>
            <h5 className='temp123'>Template 1</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
         </Col>
         <Col lg={6}>
          <img src={temp2} alt="" className='w-100 mt-5'/>
          <div>
            <h5 className='temp123'>Template 2</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
         </Col>
         <Col lg={6}>
          <img src={temp3} alt="" className='w-100 mt-5'/>
          <div>
            <h5 className='temp123'>Template 3</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
         </Col>
         <Col lg={6}>
          <img src={temp4} alt="" className='w-100 mt-5'/>
          <div>
            <h5 className='temp123'>Template 4</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
         </Col>
         <Col lg={6}>
          <img src={temp5} alt="" className='w-100 mt-5'/>
          <div>
            <h5 className='temp123'>Template 5</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
         </Col>
         <Col lg={6}>
          <img src={temp6} alt="" className='w-100 mt-5'/>
          <div>
            <h5 className='temp123'>Template 6</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
         </Col>
        </Row>
       
      </Tab>
      <Tab eventKey="UI Design" title="UI Design">
        <Row>
          <Col lg={6}> 
            <img src={temp3} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 1</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
            <img src={temp5} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 2</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
            <img src={temp2} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 3</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
            <img src={temp6} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 4</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
            <img src={temp4} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 5</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
            <img src={temp1} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 6</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
        </Row>

      </Tab>
      <Tab eventKey="Webflow Design" title="Webflow Design">
        <Row>
          <Col lg={6}>
            <img src={temp5} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 1</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
            <img src={temp3} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 2</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
            <img src={temp1} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 3</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
            <img src={temp6} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 4</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
            <img src={temp4} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 5</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
            <img src={temp2} alt=""  className='w-100 mt-5'/>
            <div>
            <h5 className='temp123'>Template 6</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
        </Row>
       
     
        
      </Tab>
      <Tab eventKey="Figma Design" title="Figma Design" >
        <Row>
          <Col lg={6}>
             <img src={temp4}  alt="" className='w-100 mt-5'/>
             <div>
            <h5 className='temp123'>Template 1</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
             <img src={temp6}  alt="" className='w-100 mt-5'/>
             <div>
            <h5 className='temp123'>Template 2</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
             <img src={temp1}  alt="" className='w-100 mt-5'/>
             <div>
            <h5 className='temp123'>Template 3</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
             <img src={temp3}  alt="" className='w-100 mt-5'/>
             <div>
            <h5 className='temp123'>Template 4</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
             <img src={temp5}  alt="" className='w-100 mt-5'/>
             <div>
            <h5 className='temp123'>Template 5</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
          <Col lg={6}>
             <img src={temp2}  alt="" className='w-100 mt-5'/>
             <div>
            <h5 className='temp123'>Template 6</h5>
            <p className='hghgh'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <p className='dewre'>View Portfolio <FaArrowRightLong /></p>
          </div>
          </Col>
        </Row>

      </Tab>
    </Tabs>
                
        
      </Container>


    </div>
  )
}

export default Template