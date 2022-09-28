import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import navLogo from "../../assets/navLogo.png";
function NavBar() {
  return (
    <div className="nav-height shadow">
      <Navbar className="nav-height" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={navLogo} alt="supergigs-nav-logo" height="15px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Button className="button-basic" variant="primary">
                  Find Gigs
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className="button-basic" variant="primary">
                  Hire Talents
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="/signin">
                <Button className="button-basic signin" variant="primary">
                  Sign In
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
