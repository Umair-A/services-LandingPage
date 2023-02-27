import React from 'react';
import {Col, Row } from 'react-bootstrap';

function Register({ Data }) {
  return (
    <div>
    <div className='register'>
      <Row>
        <Col className='register-col'><h1>Pre-register Now</h1></Col>
      </Row>
      <Row>
        <Col className='register-input'>
          <div className='input-group mb-3'>
            <input type={Text}  className='form-control' placeholder='Your Email Address' />
            <div className='input-group-append'>
              <button className='btn btn-primary' type='button'>Register Now</button>
            </div>
          </div>
        </Col>
      </Row>
      </div>
      <Row className='register-co'>
        {Data.map((item) => (
          <Col className='register-courses'>
            <img src={item.image} alt='Logo' />
            <h1 className='register-headText'>{item.title}</h1>
            <p className='register-para'>{item.text}</p>
            </Col>
        ))};
      </Row>
    </div>
  )
}

export default Register;
