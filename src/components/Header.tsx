import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className='nav' variant='dark' bg='dark' collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
          <Nav>
          <Nav.Link
            className='nav-text'
            style={{ color: 'hsla(0,0%,100%,.55)' }}
            href='#contact'
          >
            Contact
          </Nav.Link>
          <Nav.Link
            className='nav-text'
            style={{ color: 'hsla(0,0%,100%,.55)' }}
            download='Naman Ajmera-Resume.pdf'
            href={require('../assets/resume.pdf')}
          >
            Resume
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
