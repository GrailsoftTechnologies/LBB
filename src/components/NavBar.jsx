import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import './styles.css';

class NavBar extends Component {
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
	this.toggle2 = this.toggle2.bind(this);
  this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
	toggle2() {
		if (this.state.isOpen) {
			this.setState({
	      isOpen: false
	    });
		}
  }
  render() {
    return (
      <Navbar expand="md" className={this.props.className}>
        <NavbarBrand href="/">

        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
							<NavLink href={"/menu"} className="menuItem" onClick={this.toggle2}>Sign Up
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"/about"} className="menuItem" onClick={this.toggle2}>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"/contact"} className="menuItem" onClick={this.toggle2}>Contact</NavLink>
						</NavItem>
          </Nav>
          <Nav className="socialIcons">
						<NavItem>
							<NavLink href="https://www.instagram.com/grailsofttechnologies/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-instagram desktop-only"></span></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-facebook-square desktop-only"></span></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.yelp.com" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-yelp desktop-only"></span></NavLink>
						</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

NavBar.defaultProps = {
  className: "sticky-top navbar-dark bg-dark my-nav-bar",
}

export default NavBar;
