import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import Img from '../assets/img.webp';

const Navbars = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="position-sticky">
                <Container>
                    <Navbar.Brand as={Link} to="/contact" className="font-weight-bold">
                        <img src={Img} alt="Brand Logo" style={{ width: "80px" }} />
                    </Navbar.Brand>

                    {/* Toggler button for mobile */}
                    <Navbar.Toggle
                        aria-controls="navbar-nav"
                        onClick={toggleNavbar}
                        className="d-lg-none"
                    />

                    {/* Navbar links for desktop */}
                    <Navbar.Collapse className="d-none d-lg-flex">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/home" className="nav-item text-white">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-item text-white">About</Nav.Link>
                            <Nav.Link as={Link} to="/service" className="nav-item text-white">Services</Nav.Link>
                            <Nav.Link as={Link} to="/" className="nav-item text-white">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/" className="nav-item text-white">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="nav-item text-white">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* Navbar for mobile */}
                    <div className={`custom-navbar ${isOpen ? 'show' : ''}`}>
                        {/* Close button */}
                        <button className="close-button" onClick={closeNavbar}>
                            ✖
                        </button>
                        <Nav className="ml-auto navbar-nav justify-content-between">
                            <Nav.Link as={Link} to="/home" className="nav-item text-white">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-item text-white">About</Nav.Link>
                            <Nav.Link as={Link} to="/service" className="nav-item text-white">Services</Nav.Link>
                            <Nav.Link as={Link} to="/" className="nav-item text-white">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/" className="nav-item text-white">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="nav-item text-white">Contact</Nav.Link>
                        </Nav>
                        <button className="button button1 ">WhatsApp</button>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbars;
