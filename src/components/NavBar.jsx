import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {

    return(
        // <Navbar style={{ backgroundColor: 'rgba(0,68,129)' }} variant="dark" expand="lg">
		// 	<Container>
        //         <Navbar.Brand href="/">Josh.Dev</Navbar.Brand>
		// 		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		// 		<Navbar.Collapse id="basic-navbar-nav">
		// 		<Nav className="me-right">
		// 			<Nav.Link href="#">link 1</Nav.Link>
		// 			<Nav.Link href="#">link 2</Nav.Link>
		// 		</Nav>
		// 		</Navbar.Collapse>
		// 	</Container>
   		// </Navbar>
        <Navbar style={{ backgroundColor: 'rgba(0,68,129)' }} variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">Josh.Dev</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#">Link 1</Nav.Link>
            <Nav.Link href="#">Link 2</Nav.Link>
            <Nav.Link href="#">Link 3</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    )
}