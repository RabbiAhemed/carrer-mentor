import React from 'react';
import './Header.css'
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="" variant="dark" id='nav-color' style={{ backgroundColor: 'rgb(5, 5, 40)' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">Best Career Mentor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className='text-white'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/About" className='text-white'>About</Nav.Link>

                            <Nav.Link as={Link} to="/Blogs" className='text-white'>Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/Aboutme" className='text-white'>About Me</Nav.Link>


                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='btn btn-info' onClick={handleSignOut}>signOut</button>
                                    :
                                    <Nav.Link as={Link} to="/login" className='text-white'>Login</Nav.Link>}

                            <Nav.Link as={Link} to="/Register" className='text-white'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
    );
};

export default Header;