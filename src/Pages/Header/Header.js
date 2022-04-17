import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="info" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Career Coach</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/About">About</Nav.Link>
                            <Nav.Link href="home#service">Service</Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/Logout">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
    );
};

export default Header;