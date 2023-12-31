import { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import Signup from "./SignUp";

function AppBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [login, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  function handleLogin() {
    setLogIn(true);
    setSignUp(false);
    setNavOpen(false);
  }
  function handleSignup() {
    setLogIn(false);
    setSignUp(true);
    setNavOpen(false);
  }
  return (
    <>
      <Navbar className="position-fixed w-100" style={{ zIndex: "1111111" }}>
        <Container>
          <Navbar.Brand>React API</Navbar.Brand>
          <Nav className="d-none d-md-flex gap-3">
            <Link to="/">Home</Link>
            <Link to="/userlist">User list</Link>
          </Nav>
          <div className="d-none d-md-flex">
            <Button className="rounded-5 me-3" onClick={handleLogin}>
              Log In
            </Button>
            <Button
              className="rounded-5"
              variant="secondary"
              onClick={handleSignup}
            >
              Sign Up
            </Button>
          </div>
          <Button
            variant=""
            className="d-md-none"
            onClick={() => setNavOpen(true)}
          >
            <i className="bi bi-list" style={{ fontSize: "2rem" }}></i>
          </Button>
          <ToggleMenu
            show={navOpen}
            handleClose={() => setNavOpen(false)}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
          />
        </Container>
      </Navbar>
      <LogIn show={login} onHide={setLogIn} setSignUp={setSignUp} />
      <Signup show={signUp} onHide={setSignUp} setLogIn={setLogIn} />
    </>
  );
}

function ToggleMenu({ show, handleClose, handleLogin, handleSignup }) {
  return (
    <Offcanvas show={show} placement="end">
      <Offcanvas.Header className="text-end flex-row-reverse">
        <Button variant="" onClick={handleClose}>
          <i className="bi bi-x-lg" style={{ fontSize: "2rem" }}></i>
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column align-items-center gap-5">
        <Link to="/" onClick={handleClose}>
          Home
        </Link>
        <Link to="/userlist" onClick={handleClose}>
          User List
        </Link>
        <Button className="rounded-5 w-50 py-3" onClick={handleLogin}>
          Log In
        </Button>
        <Button
          className="rounded-5 w-50 py-3"
          variant="secondary"
          onClick={handleSignup}
        >
          Sign Up
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default AppBar;
