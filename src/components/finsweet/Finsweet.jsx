import React from 'react'
import "./finsweet.css"
import {Container,Row,Col} from "react-bootstrap"
import cover from "../../assets/Cover.png"
import cover1 from "../../assets/Cover1.png"
import Nav from 'react-bootstrap/Nav';

const Finsweet = () => {
  return (
    <div>

      <Container>
        <Row>
          <Col lg={7} lg={{offset:1}}>
            <div className='fin_top'>
           <p className='weeebb'>Web design and development</p>
           <h1 className='finsss'>Finsweet Design case studies</h1>
           <p className='llmlm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
           </div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} lg={{offset:1}}>
             <img src={cover} alt=""  className=' cover_img  w-100'/>
          </Col>
        </Row>
        <Row>
          <Col lg={2} lg={{offset:1}}>
           <p className='cli'>Client</p>
           <h3 className='faa'>facebook.com</h3>
          </Col>
          <Col lg={2} lg={{offset:1}}>
           <p className='cli'>Service</p>
           <h3 className='faa'>Product Design</h3>
          </Col>
          <Col lg={4} lg={{offset:1}}>
           <p className='cli'>Deliverable</p>
           <h3 className='faa'>UI Screens, UX Flow & Prototype</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={10} lg={{offset:1}}>
              <div className='border mt-3'> </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} lg={{offset:2}}>
            <h1 className='pro1'>About the project</h1>
            <p className='popopp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul >
              <li className='li'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className='li'>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </li>
              <li className='li'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              </li>
              <li className='li'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={8} lg={{offset:2}}>
           <img src={cover1} alt="" className=' cover1_img w-100'/>
          </Col>
        </Row>
        <Row>
          <Col lg={8} lg={{offset:2}}>
           <h1 className='pro1'>How we do it</h1>
           <p className='popopp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={5} lg={{offset:2}}>
           <ul>
            <li className='li'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li className='li'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li className='li'>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li className='li'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
           </ul>
          </Col>
        </Row>
         
          <Row>
            <Col lg={9} lg={{offset:2}}>
              <div className='border5'>
              </div>
            </Col>
          </Row>

         <Row>
          <Col lg={9} lg={{offset:2}}>
             <div className='nav_main'>
             <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='jkjk' >Keywords</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='llk'>Design </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='llk'>UI/UX </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='llk'>
        Wireframing
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='llk'>
        Branding
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='llk'>
        Development
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='llk'>
        webflow
        </Nav.Link>
      </Nav.Item>
    </Nav>
             </div>
          </Col>
         </Row>
         <Row>
            <Col lg={9} lg={{offset:2}}>
              <div className='border3'>
              </div>
            </Col>
          </Row>


        <Row>
          <Col lg={6} lg={{offset:1}}>
             <div className='lerrt text-center'>
            <h1 className='mnm'> Let's build something great together</h1>
            <p className='nuuuummmmm'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
            <a href="" className='plpp'> Contact Us</a>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Finsweet