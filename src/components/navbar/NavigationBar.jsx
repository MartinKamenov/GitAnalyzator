import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavigationBar = () => ( 
    <Navbar inverse collapseOnSelect className="main-navbar">
        <Navbar.Header>
            <Navbar.Brand className="main-header-container">
                <Link className="navbar-brand main-header" to="/">Github Analyzator</Link>
            </Navbar.Brand>
            <Navbar.Toggle>Menu</Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse>
			<Nav>
				<NavItem componentClass='span' className="nav-link-container">
					<Link className="nav-link navbar_element" to="/">Home</Link>
				</NavItem>
			</Nav>
			<Nav>
				<NavItem componentClass='span' className="nav-link-container">
					<Link className="nav-link navbar_element" to="/analyze">Analyze</Link>
				</NavItem>
			</Nav>
            <Nav>
				<NavItem componentClass='span' className="nav-link-container">
					<Link className="nav-link navbar_element" to="/compare">Compare</Link>
				</NavItem>
			</Nav>
		</Navbar.Collapse>
    </Navbar>
);
 
export default NavigationBar;