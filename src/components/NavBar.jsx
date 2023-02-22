import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {

    return(
        <nav className='navbar'>
            <div className='nav-brand'>
                <div id='brand'>Josh.Dev</div> 
            </div>
            
            <ul className="nav-links ">
                <li className='links' id='link-home'><a href="#">Home</a></li>
                <li className='links' id='link-about'><a href="#">About</a></li>
                <li className='links' id='link-projects'><a href="#">Projects</a></li>
                <li className='links' id='link-contact'><a href="#">Contact</a></li>
            </ul>
        </nav>
        
    )
}