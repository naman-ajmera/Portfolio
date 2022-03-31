import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
          {/* <Nav.Link style={{color:"hsla(0,0%,100%,.55)"}} href='/'>Home</Nav.Link> */}
          <Nav.Link style={{color:"hsla(0,0%,100%,.55)"}} href='#contact'>Contact</Nav.Link>
          <Nav.Link style={{color:"hsla(0,0%,100%,.55)"}} download='Naman Ajmera-Resume.pdf' href={require("../assets/resume.pdf")}>
            Resume
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
