import React from 'react'
import { Col, Row } from 'react-bootstrap';
function Footer({ Data }) {
  return (
    <div>
      <Row className='footer'>
          {Data.map((item) => (
              <Col>
              <div className='footer-col'>
                <h1 className='footer-header '>{item.title}</h1>
                <p className='footer-para'>{item.sub1}</p>
                <p className='footer-para'>{item.sub2}</p>
                <p className='footer-para'>{item.sub3}</p>
                </div>
                </Col>
            ))}
           {/* <Col>
              <h1 className='footer-text'>Learn about IWS</h1>
          </Col> */}
          
          <Col>
          <div>
            <img className='footer-icon' src={require('../assets/Vector (1).png')} alt='Logo' /> 
            <img className='footer-icon2'  src={require('../assets/Vector (2).png')} alt='Logo' /> 
            <img className='footer-icon3' src={require('../assets/Vector (3).png')} alt='Logo' /> 
          </div>
          <div>
          <button className='btn btn-primary btn-started' type='button'>Get Started</button>
          </div>
          </Col>
        </Row>
    </div>
  )
}

export default Footer;
