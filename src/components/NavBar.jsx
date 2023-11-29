import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {

    return(
        <Navbar 
            expand="lg"
            className="nav-bar d-flex mt-auto fixed-top" 
            style={{ backgroundColor: 'rgba(0, 0, 0)' }} 
        >
            <Container className="d-flex">
                <Navbar.Brand className="nav-brand fs-2" style={{ color: 'rgba(207, 207, 207)' }} href='/'>JoshuaWu.Dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" 
                style={{ opacity: '0.5', backgroundColor: 'rgba(16,161,190,1)'}} />
                <Navbar.Collapse id="basic-navbar-nav">

                
                <Nav className="nav-links me-auto d-flex justify-content-center justify-content-around w-100">
                    <Nav.Link className='nav-link fs-5' style={{ color: 'rgba(207, 207, 207)' }} href="/">Home</Nav.Link>
                    <Nav.Link className='nav-link fs-5' style={{ color: 'rgba(207, 207, 207)' }} href='https://drive.google.com/file/d/1svi6e7Y2bkKLss2KFIgZzzuLBNNOzeH_/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                    {/* <Nav.Link className='nav-link' style={{ color: 'rgba(207, 207, 207)' }} href="#">About</Nav.Link>
                    <Nav.Link className='nav-link' style={{ color: 'rgba(207, 207, 207)' }} href="#">Projects</Nav.Link> */}
                    <NavDropdown 
                        title={
                            <span 
                                className='Dropdown fs-5' 
                                style={{ color: 'rgba(207, 207, 207)', fontWeight: 'bold' }}
                            >
                                Contact
                            </span>
                        }
                        id="nav-dropdown basic-nav-dropdown" 
                        // style={{ backgroundColor: 'rgba(25,25,25)' }}
                    >
                        <NavDropdown.Item 
                            id='nav-item' 
                            href="https://www.linkedin.com/in/joshuatwudev/" target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: 'rgba(0,0,0)', fontWeight: 'bold' }} 
                        >
                            LinkedIn
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                        id='nav-item' 
                        href="https://github.com/jtw007" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: 'rgba(0,0,0)', fontWeight: 'bold' }}
                        >
                            Github
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>  
    )
}