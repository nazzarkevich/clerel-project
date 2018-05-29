import * as React from 'react';
import './style.scss';
import { Nav, NavItem, Navbar, Image, Col } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

export class Header extends React.Component {
  render() {
    return (
      <Navbar className="navbarDefault">
        <Col md={12} className="navContainer">
          <Navbar.Header className="navLogo">
            <Navbar.Brand>
              <Image className="logo" src={require('../../../assets/images/logo.png')} alt="company-logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="menu">
              <LinkContainer to="/donate">
                <NavItem> Donate </NavItem>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavItem> Blog </NavItem>
              </LinkContainer>
              <LinkContainer to="/language">
                <NavItem> English </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    );
  }
}
