import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export function Navigation () {
    
    return (
      
      <Navbar bg="secondary" variant="dark" fixed="top" className='Navbar'>
        <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/showroom">Showroom</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#contact">Contact</Nav.Link>
             <NavDropdown title="Your Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#profile">Your Profile</NavDropdown.Item>
              <NavDropdown.Item href="#listings">Your Listings</NavDropdown.Item>
              <NavDropdown.Item href="#savedcars">Your Saved Cars</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
        
      </Navbar>
    
  );
}
