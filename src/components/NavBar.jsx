import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import rgba from 'rgba-convert';
import './navstyles.css';


class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  	this.toggle2 = this.toggle2.bind(this);
    this.state = {
        isOpen: false,
        expand: "md",
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
    const colorarray = rgba(this.props.text);
    const rgbastring = '' + colorarray[0] + ', ' + colorarray[1] + ', ' + colorarray[2] + ', 0.5 ';
    console.log(this.props.logo);
    return (
      <Navbar expand="md"
        className={this.props.className}
        style={{backgroundColor: this.props.background, color: this.props.text}}>
        <NavbarBrand href="/" onClick={this.toggle2}>
          <img id="logo" src={this.props.logo} alt="Business Logo"></img>
        </NavbarBrand>
        <style>
          {`
            #toggleIcon {
              background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(` + rgbastring + `)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")!important;
              }
            .nav-link:hover {
            	border-bottom: 1px ` + this.props.hovercolor + ` solid;
            	color: ` + this.props.hovercolor + `!important;
            }
          `}
        </style>
        <NavbarToggler onClick={this.toggle}>
          <span className="navbar-toggler-icon" id="toggleIcon"/>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto nav-options" navbar>
            <NavItem>
							<NavLink href={"#SignUp"} onClick={this.toggle2}>Sign Up
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#About"} onClick={this.toggle2}>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={"#Contact"} onClick={this.toggle2}>Contact</NavLink>
						</NavItem>
          </Nav>
          <Nav className="social-icons">
						<NavItem>
							<NavLink href="https://www.instagram.com/brickandmotorpdx/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-instagram desktop-only"></span></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.facebook.com/brickandmotorpdx/" target="_blank" rel="noopener noreferrer"><span className="footer-icon icon fa fa-facebook-square desktop-only"></span></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.yelp.com/biz/brick-and-motor-portland-2?osq=Brick+and+Motor" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-yelp desktop-only"></span></NavLink>
						</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

NavigationBar.defaultProps = {
  className: "sticky-top navbar-dark NavigationBar",
  text: 'white',
  background: 'black',
  hovercolor: 'grey',
  logo: 'none'
}

export default NavigationBar;
