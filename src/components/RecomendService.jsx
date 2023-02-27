import React from 'react';
import { Col, Row } from 'react-bootstrap';

function RecomendService({ Data }) {
  return (
    <div className='services-recomend'>
      <Row>
          <Col className='header'>
                <h1 className='services-recomendHeader'>Our Services are highly recomended for</h1>
          </Col>
      </Row>
      <div>
      <Row>
        <Col className='service-recomend-sub'>     
               {Data.map((item) => (
                 <div className='service-recomended-widgets'>
                    <img className='service-recomended-image' src={item.image} alt='Logo' />
                    <h1 className='service-recomended-head'>{item.title}</h1>
                    <p className='service-recomend-para'>{item.text}</p>
                  </div>
                  ))};
        </Col>
     
        <Col className='services-recomendImage'>
            <img src={require('../assets/Rectangle 11.png')} alt='Imag' />          
          </Col>
      </Row>
      <Row>
          <Col className='view-button'>
              <button className='btn btn-primary btn-service' type='button'>View Services</button>
          </Col>
        </Row>
      </div>
        
        
      {/* <Row  className='services-recomend'>
          <Col>
              <div className='header'>
                <h1 className='services-recomendHeader'>Our Services are highly recomended for</h1>
              </div>    
              <div className='services-reco'>
                  {Data.map((item) => (
                     <Col>
                        <div className='service-recomended-widgets'>
                            <img className='service-recomended-image' src={item.image} alt='Logo' />
                            <h1 className='service-recomended-head'>{item.title}</h1>
                            <p className='service-recomend-para'>{item.text}</p>
                         </div>
                      </Col>
                    ))};
              </div>
          </Col>
          <Col className='services-recomendImage'>
            <img src={require('../assets/Rectangle 11.png')} alt='Imag' />          
          </Col>
        </Row>
        <Row>
          <Col className='view-button'>
              <button className='btn btn-primary btn-service' type='button'>View Services</button>
          </Col>
        </Row> */}
    </div>
  )
}

export default RecomendService;