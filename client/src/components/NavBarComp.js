import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

// import Logon from '../containers/LogonCon';
// import RegisterCon from '../containers/RegisterCon';

import { Context } from '../context/LogonContextP';

function NavBarComp() {
  const { isSignedOn } = useContext(Context);
  return (
    <div className="container mt-2">
      <Navbar bg="light" expand="lg">
        {/* <Link to="/"><Navbar.Brand>LeSaWi</Navbar.Brand></Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            {
              isSignedOn
                ? <Nav.Link><Link to="/userprofilepage">Profile Page</Link></Nav.Link>
                : null
            }
            <Nav.Link><Link to="/aboutpage">About</Link></Nav.Link>
            <Nav.Link><Link to="/projectspage">Projects</Link></Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link>
              <h3 style={{ color: '#000000' }}>
                <strong>Opening 1 February 2021</strong>
              </h3>
            </Nav.Link>
            {/* <Logon />
            <RegisterCon /> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComp;
