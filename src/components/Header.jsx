import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';



function Header() {
  return (
    <div>
      <Row className='row01'>
          <Col className='col01' >
            <img src={require('../assets/Screenshot_7.png')} alt='Logo' /> 
            <h1 className='comp-name'>Infeur</h1>
            <h1 className='sub-text'>Web Services</h1> 
          </Col>
          <Col>
            {/* <h1 className='navbar'>List</h1> */}
            <Nav className='navbar navbar-expand-sm navbar-light '>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a href='#' className='nav-link text-white ml-5'>About Us</a>
                </li>
                <li className='nav-item'>
                  <a href='#' className=' nav-link text-white ml-5'>Pricing</a>
                </li>
                <li className='nav-item'>
                  <a href='#' className='nav-link text-white ml-5'>Services</a>
                </li>
                <li className='nav-item'>
                  <a href='#' className='nav-link text-white ml-5'>Get Started</a>
                </li>
              </ul>
             </Nav>
          </Col>
        </Row>
    </div>
  )
}

export default Header;
