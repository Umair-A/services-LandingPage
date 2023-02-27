import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

function Services() {
  return (
    <div>
      <Row>
          <Col className='col03'>
            <h1 className='service-text'>Our Services</h1>
          </Col>
        </Row>
        <Row>
            <Col className='col-services-text'>
              <h1 className='service-texth'>IWS EC2 Web <br></br>Services</h1>
              <p className='services-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc molestie suspendisse et vitae nulla leo lacus. Lacinia enim vel suspendisse fringilla et ege cursus.</p>
              <Button className='btn btn-primary btn-width'>Learn more</Button>
            </Col>
            <Col className='col-services-image'>
              <img className='services-image' src={require('../assets/Rectangle 5.png')} alt='Imag' />
            </Col>
        </Row>
        <Row>
          <Col className='services-image2' >
              <img src={require('../assets/Rectangle 7.png')} alt='Imag' />
          </Col>
          <Col className='services-text2'>
              <h1 className='service-texth'>IWS S3 Web<br></br> Services</h1>
              <p className='service-para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc molestie suspendisse et vitae nulla leo lacus. Lacinia enim vel suspendisse fringilla et ege cursus.</p>
              <Button className='btn btn-primary btn-width'>Learn more</Button>
          </Col>
        </Row>
    </div>
  )
}

export default Services
