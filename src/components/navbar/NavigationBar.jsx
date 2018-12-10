import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavigationBar = () => ( 
    <Navbar collapseOnSelect>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link className="navbar-brand main_header main_header" to="/">Github Analyzator</Link>
                </Navbar.Brand>
                <Navbar.Toggle>Menu</Navbar.Toggle>
            </Navbar.Header>
        </Navbar>
    </Navbar>
);
 
export default NavigationBar;