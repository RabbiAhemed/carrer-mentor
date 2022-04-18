import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Career Coach</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className='text-white'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/About" className='text-white'>About</Nav.Link>
                            <Nav.Link href="home#service" className='text-white'>Service</Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/Login" className='text-white'>Login</Nav.Link>
                            <Nav.Link as={Link} to="/Register" className='text-white'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
    );
};

export default Header;