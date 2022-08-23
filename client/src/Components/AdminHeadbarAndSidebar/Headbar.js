import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./myStyles.css";
import { MdNotifications } from "react-icons/md";
import { CgMenu } from "react-icons/cg";

class HeaderBar extends React.Component {
  render() {
    return (
      <Navbar className="headbar mb-5">
        <Container>
          <Navbar.Brand href="#home" style={{ 'fontSize': '40px', 'fontWeight': 'bold' }}>
            <CgMenu/>
             <span> ADMIN HOME</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <MdNotifications style={{'fontSize':'25px'}}/>
            <Navbar.Text>
              Admin 
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderBar;