import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Image from '../assets/Rectangle-17.png';
function Newsletter() {
  return (
    <div>
      <Row>
          <Col  style={{ backgroundImage:`url(${Image})` }} className='newsletter'>
              <h1 className='newsletter-text'>Subscribe to Our Newsletter</h1>
              <p className='newsletter-para'>Subscribe to get latest update about our services and many more</p>
              <input type={Text}  className='form-control col-3 input-newsletter' placeholder='Your Email Address' />

          </Col>
        </Row>
    </div>
  )
}

export default Newsletter;
