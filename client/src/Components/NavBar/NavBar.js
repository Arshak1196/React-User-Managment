import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../Context/AuthContext';

function NavBar(props) {
    const { user } = useContext(AuthContext)

    return (
        <Navbar bg="light" expand="lg" className="p-3 mb-5 shadow-sm rounded">
            <Container fluid>
                <Navbar.Brand href="#home">INCUBATION</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mx-5 px-4">
                    <Nav >
                        <NavDropdown title={user.name} id="basic-nav-dropdown" >
                            <NavDropdown.Item  onClick={props.logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar