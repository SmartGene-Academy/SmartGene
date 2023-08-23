import React from 'react';
import SignUp from './images/SignUp.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Styles/navbar.css"

function NavBar() {
    return (
        <div>   
            <Navbar style={{ backgroundColor: '#F5F3F5' }} expand='lg'>
                <Navbar.Brand href='/home'>
                    Logo
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href='/Home'>Home</Nav.Link>
                        <NavDropdown title='Programs'>
                            <NavDropdown.Item href="/Math">Math</NavDropdown.Item>
                            <NavDropdown.Item href="/Biology">Biology</NavDropdown.Item>
                            <NavDropdown.Item href="/ComputerScience">Computer Science</NavDropdown.Item>
                            <NavDropdown.Item href="/English">English</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Connect">Connect</Nav.Link>
                        <Nav.Link href="/Resources">Resources</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto'> {/* Add ml-auto class */}
                        <Nav.Link href='/SignUp'>Sign Up</Nav.Link>
                        <Nav.Link href='/Login'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;




