import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../../assets/navLogo.png";
import { logout_call } from "../../reducers/sigin_reducer";
function NavBar() {
  const [getSignInstatus, setGetSignInstatus] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.clear();
    dispatch(logout_call());
    navigate("/");
  };
  let signupBoolean = localStorage.getItem("signIn_success");
  let username = localStorage.getItem("username");
  useEffect(() => {
    console.log(signupBoolean);
  }, []);
  return (
    <div className="nav-height shadow">
      <Navbar className="nav-height" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={navLogo} alt="supergigs-nav-logo" height="15px" />
            </Link>
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
              <Nav.Link eventKey={2}>
                {signupBoolean === "true" ? (
                  <>
                    <NavDropdown
                      title={<FaUserCircle />}
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        {username}
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <Link to="/freelancer/page1">profile Settings</Link>
                      </NavDropdown.Item>
                      {/* <NavDropdown.Divider /> */}
                      <NavDropdown.Item onClick={logout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <Link to="/signin">
                      <Button className="button-basic signin" variant="primary">
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
