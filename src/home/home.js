import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Navbar, Nav, NavLink, Form, FormControl, Button } from 'react-bootstrap'
// import Landing from '../container/Landing';
// import Documentation from '../container/Documentation';
import './assets/style.css';
import logo from './assets/logo.png';

const home = () => {
    return (
        <Router>
            <Fragment>
                <>
                    <Navbar bg="" className="navbarBig ml-4" expand="lg">
                        <Navbar.Brand className="navBrand">
                            <img
                                src={logo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top mr-3"
                            />
                            RaLaper
                        </Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-3 mt-2">
                                <NavLink as={Link} to="/" className="ml-2 navLink">Home</NavLink>
                                <NavLink as={Link} to="/doc" className="ml-4 navLink">Documentation</NavLink>
                                <NavLink as={Link} to="/doc" className="ml-4 navLink">Vapor</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </>
                {/* <Route path="/" exact component={Landing} />
                <Route path="/doc" component={Documentation} /> */}
            </Fragment>
        </Router>

    )
}

export default home
