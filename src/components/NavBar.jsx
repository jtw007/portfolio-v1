import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {

    return(
        <Navbar className="d-flex" style={{ color: 'rgba(0, 0, 0)'}} expand="lg">
        <Container className="d-flex">
            <Navbar.Brand style={{ color: 'rgba(50, 205, 50)'}}>JoshuaWu.dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'rgba(50, 205, 50)'}}/>
            <Navbar.Collapse id="basic-navbar-nav">

            
            <Nav className="me-auto d-flex justify-content-center justify-content-around w-100">
                <Nav.Link style={{ color: 'rgba(50, 205, 50)'}} href="#" onClick>Home</Nav.Link>
                <Nav.Link style={{ color: 'rgba(50, 205, 50)'}} href="#">About</Nav.Link>
                <Nav.Link style={{ color: 'rgba(50, 205, 50)'}} href="#">Projects</Nav.Link>
                <Nav.Link style={{ color: 'rgba(50, 205, 50)'}} href="#">Contact</Nav.Link>
            </Nav>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>  
    )
}