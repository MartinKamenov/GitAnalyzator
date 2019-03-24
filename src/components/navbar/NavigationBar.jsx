import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
    changeDropdownState(shouldOpen) {
        const dropdownElement = this.refs.dropdown;
        if(shouldOpen) {
            dropdownElement.setAttribute('class', 'dropdown-content-opened');
        } else {
            dropdownElement.setAttribute('class', 'dropdown-content');
        }
    }

    render() { 
        return (
            <React.Fragment>
                <div className='navbar-div'></div>
                <Navbar inverse collapseOnSelect className="main-navbar sticky">
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
                                <Link className="nav-link navbar_element" to="/overview">Overview</Link>
                            </NavItem>
                        </Nav>
                        <Nav>
                            <NavItem
                                componentClass='span'
                                className="nav-link-container"
                                onClick={() => this.changeDropdownState(true)}
                                onMouseEnter={() => this.changeDropdownState(true)}
                                onMouseLeave={() => this.changeDropdownState(false)}>
                                <span 
                                    className='nav-link navbar_element'
                                    id='analyze-dropdown'>Analyze</span>
                                <div
                                    className='dropdown-content'
                                    id='dropdown'
                                    ref="dropdown">
                                    <NavItem componentClass='span'
                                        className="nav-link-container">
                                        <Link className="nav-link navbar_element"
                                            to="/analyze">User</Link>
                                    </NavItem>
                                    <NavItem componentClass='span'
                                        className="nav-link-container">
                                        <Link className="nav-link navbar_element"
                                            to="/repository">Repository</Link>
                                    </NavItem>
                                </div>
                            </NavItem>
                        </Nav>
                        <Nav>
                            <NavItem componentClass='span' className="nav-link-container">
                                <Link className="nav-link navbar_element" to="/compare">Compare</Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}
 
export default NavigationBar;