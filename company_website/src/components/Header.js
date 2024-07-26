import React from 'react'
import Container from 'react-bootstrap/Container';
// import {Container,Row,Col} from 'react-bootstrap'; its giving error
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaAngleDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";


const Header = () => {
  return (
   
    <Container>
      <div className='d-lg-block d-none'>
      <Row className='align-items-center  py-4 '>
        <Col lg={3}><div><img src={require('../img/logo.png')} alt="" className='logo' /></div></Col>
        
        <Col lg={7} >
       <div>
        <ul className='d-flex text-white mb-0 justify-content-between ps-0'>
          <li>Home</li>
          <li>About</li>
          <li className='d-flex align-items-center'>Service<FaAngleDown /></li>
          <li className='d-flex align-items-center'>Product<FaAngleDown /></li>
          <li>ContactUS</li>
         
        </ul>
       </div>
         </Col>
         <Col lg={2} >
         <div className='text-center'> <button className='talk'>Let's Talk <FaArrowUp /></button></div>
         </Col>
         
      </Row>
      </div>
      <div className='d-lg-none d-block'>
        <Row className='align-items-center  py-4 '>
        <Col xs={6}><div><img src={require('../img/logo.png')} alt="" className='logo' /></div></Col>

          <Col xs={6} className='text-end'><IoMenu  className='text-white ' style={{"height" : "2rem", "width" : "2rem"}}/>
       </Col>
          <div className='ul-border mt-3 d-none'>
        <ul className=' text-gray mb-0 text-center  ps-0'>
          <li>Home</li>
          <li>About</li>
          <li>Service<FaAngleDown /></li>
          <li>Product<FaAngleDown /></li>
          <li>ContactUS</li>
         
        </ul>
       </div>
        </Row>
      </div>
    </Container>

   
  )
}

export default Header