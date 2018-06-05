import * as React from 'react';
import './style.scss';
import { Nav,
  NavItem,
  Navbar,
  Image,
  Col,
  ButtonToolbar,
  
   } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

interface Props {};
interface State {
  dropDownItems: Array<any>;
  active: number
}

export class Header extends React.Component<Props, State> {

  renderMenuItems() {
    
  }
  render() {
    return (
      <Navbar className="navbarDefault grid navWrap">
        <Col md={12} className="navContainer grid">
          <Navbar.Header className="navLogo">
            <Navbar.Brand>
              <Image className="logo" src={require('../../../assets/images/logo.png')} alt="company-logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="menuWrap">
            <Nav className="menu">
              <LinkContainer to="/donate">
                <NavItem> DONATE </NavItem>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavItem> BLOG </NavItem>
              </LinkContainer>
              <NavItem>
              <ButtonToolbar>

              </ButtonToolbar>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    );
  }
}
