import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {

    return(
        <Navbar className="d-flex mt-3" style={{ color: 'rgba(0, 0, 0)'}} expand="lg">
        <Container className="d-flex">
            <Navbar.Brand className="nav-text" style={{ color: 'rgba(50, 205, 50)'}}>JoshuaWu.dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'rgba(50, 205, 50)'}}/>
            <Navbar.Collapse id="basic-navbar-nav">

            
            <Nav className="nav-links me-auto d-flex justify-content-center justify-content-around w-100">
                <Nav.Link style={{ color: 'rgba(50, 205, 50)', fontWeight: 'bold' }} href="#" onClick>Home</Nav.Link>
                <Nav.Link style={{ color: 'rgba(50, 205, 50)', fontWeight: 'bold' }} href="#">About</Nav.Link>
                <Nav.Link style={{ color: 'rgba(50, 205, 50)', fontWeight: 'bold' }} href="#">Projects</Nav.Link>
                <NavDropdown 
                    title={
                        <span className='nav-dropdown' style={{ color: 'rgba(50, 205, 50)', fontWeight: 'bold' }}>Contact</span>
                    }
                    id="basic-nav-dropdown" 
                    // style={{ backgroundColor: 'rgba(25,25,25)' }}
                >
                    <NavDropdown.Item href="https://www.linkedin.com/in/joshuatwudev/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(50, 205, 50)', fontWeight: 'bold' }} >
                        LinkedIn
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://github.com/jtw007" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(50, 205, 50)', fontWeight: 'bold' }}>
                        Github
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>  
    )
}