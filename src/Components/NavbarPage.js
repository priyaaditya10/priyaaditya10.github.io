import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../Images/LIGHT-2.png';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';



function NavbarPage() {
    return (
        <div>
            <Navbar fixed="top" className="navbar-alter" variant="dark" collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                    <img src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo" />
                        {'  '}
                        ARTIC PV
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="container-fluid justify-content-end">
                        <Nav.Link href="#intro" className="navbar-light-foreground nav-links"> About </Nav.Link>
                        <Nav.Link href="#service" className="navbar-light-foreground nav-links"> Services </Nav.Link>
                        <Nav.Link href="#project" className="navbar-light-foreground nav-links"> Projects </Nav.Link>
                        <Nav.Link href="#contact" className="navbar-light-foreground nav-links"> Contact Us </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>

    )


}

export default NavbarPage;