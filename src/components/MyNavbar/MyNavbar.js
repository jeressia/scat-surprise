import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavbar extends Component {
  state = {
    isOpen: false,
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  logoutButton = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to='/new'>New Scat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.logoutButton}>Logout</NavLink>
              </NavItem>
            </Nav>
        );
      }
      return <Nav className="ml-auto" navbar/>;
    };

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Scat Surprise</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
