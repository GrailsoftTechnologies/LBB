import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import './navstyles.css';

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
          <img id="logo" src={this.props.logo} alt="Business Logo"></img>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
							<NavLink href={"/signup"} className="menuItem" onClick={this.toggle2}>Sign Up
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"/about"} className="menuItem" onClick={this.toggle2}>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"/contact"} className="menuItem" onClick={this.toggle2}>Contact</NavLink>
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
