import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

// import Logon from '../containers/LogonCon';
// import RegisterCon from '../containers/RegisterCon';

import { Context } from '../context/LogonContextP';

import '../App.css';

function NavBarComp() {
  const { isSignedOn } = useContext(Context);
  return (
    <div className="container mt-2">
      {/* <Nav.Link><Link to="/aboutpage">About</Link></Nav.Link> */}
      {/* <Nav.Link><Link to="/projectspage">Projects</Link></Nav.Link> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey={2}><Link to="/">Home</Link></Nav.Link>
            {
              isSignedOn
                ? <Nav.Link eventKey={2}><Link to="/userprofilepage">Profile Page</Link></Nav.Link>
                : null
            }
            <Nav.Link eventKey={2}><Link to="/pricingpage">Pricing</Link></Nav.Link>
            <Nav.Link eventKey={2}><Link to="/termandconditionspage">Term And Conditions</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <Nav.Link eventKey={2}>
            <h3>
              <Link to="/"><strong>Opening 15 March 2021</strong></Link>
            </h3>
          </Nav.Link>
          {/* <Logon />
            <RegisterCon /> */}
        </Form>
      </Navbar>
      <hr />
    </div>
  );
}

export default NavBarComp;
