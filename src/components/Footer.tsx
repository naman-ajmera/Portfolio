import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container id='contact' className='div_block'>
      <Row>
        <Col md={4} lg={4} />
        <Col className='footer-icons' md={8} lg={4}>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/namanajmera"><i className='fa-brands text fa-twitter' /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/naman-ajmera-78ba55128/"><i className='text fa-brands fa-linkedin-in' /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/naman-ajmera"><i className='fa-brands text fa-github' /></a>
        <a href="mailto:naman.ajmra@gmail.com"><i className='fa-solid text fa-envelope' /></a>
        </Col>
        <Col md={4} lg={4} />
      </Row>
      <Row className='my-3'>
        <Col md={4} lg={4} />
        <Col className='footer-icons' md={8} lg={4}>
          <h5 className='text'>Developed with <i className='fa-solid heart fa-heart'/> by Naman</h5>
        </Col>
        <Col md={4} lg={4} />
      </Row>
    </Container>
  );
}

export default Footer;
