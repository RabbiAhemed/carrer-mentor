import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="info" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/About">About</Nav.Link>
                            <Nav.Link as={Link} to="/About">About1</Nav.Link>
                            <Nav.Link as={Link} to="/About">About2</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="Login">Login</Nav.Link>
                            <Nav.Link as={Link} to="Logout">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
    );
};

export default Header;