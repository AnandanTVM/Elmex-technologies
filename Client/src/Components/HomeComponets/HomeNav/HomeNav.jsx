import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function HomeNav(props) {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Elmex Technologies</Navbar.Brand>
          <Nav className="me-auto">
            {props.home ? (
              <Nav.Link href="/" active>
                Home
              </Nav.Link>
            ) : (
              <Nav.Link href="/">Home</Nav.Link>
            )}
            {props.AddUser ? (
              <Nav.Link href="/Adduser" active>
                Add Employee
              </Nav.Link>
            ) : (
              <Nav.Link href="/Adduser">Add Employee</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeNav;
