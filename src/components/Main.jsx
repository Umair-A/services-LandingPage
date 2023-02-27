import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

function Main() {
  return (
    <div>
       <Row>
          <Col className='text-container'>
              <h1 className='text-white '>Build in the Cloud</h1>
              <h1 className='text-white'>Build for Privacy</h1>
              <h1 className='text-white'>Build in Nigeria</h1>
              <Button  className='btn bg-transparent bnt'>Get Started</Button>
          </Col>
          <Col>
              <img src={require('../assets/Screenshot_6.png')} alt='Imag' />
          </Col>
        </Row>
    </div>
  )
}

export default Main
