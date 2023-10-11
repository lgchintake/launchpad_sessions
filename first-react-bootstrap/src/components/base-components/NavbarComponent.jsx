import { Dropdown, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//import { setLogout } from "../../helpers/utils";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../helpers/ThemeContext";
import { useAuth } from "../../helpers/LoginContext";
import { useEffect } from "react";

export const NavbarComonent = () => {
  const navigate = useNavigate();

  const { theme, setAppTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "Light") {
      setAppTheme("Dark");
    } else {
      setAppTheme("Light");
    }
  };

  const { isUserLoggedIn, logout } = useAuth();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [isUserLoggedIn]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/logo.jpg"
            alt="Logo"
            width="50"
            height="30"
            className="d-inline-block align-text-top"
          />
          Smart Electronics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className="me-5" onClick={() => changeTheme()}>
            {theme}
          </span>
          <Form className="d-flex">
            <Dropdown className="user-dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="fa-solid fa-user"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Change Password</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => logout()}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
