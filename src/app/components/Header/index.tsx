import * as React from 'react';
import './style.scss';
import { Nav,
  NavItem,
  Navbar,
  Image,
  Col,
  // ButtonToolbar,
  MenuItem,
  // DropdownButton,
  NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

interface Props {};
interface State {
  dropDownItems: Array<any>;
  active: number
}

export class Header extends React.Component<Props, State> {

  componentWillMount() {
    this.setState({
      dropDownItems: [
        {title: 'English', id: 1},
        {title: 'Portuguese', id: 2}
      ],
      active: 1
    });
  }

  renderMenuItems() {
    return this.state.dropDownItems.map((item, index) => (
      index + 1 !== this.state.active 
      ?  <MenuItem key={item.id} active={item.id == this.state.active} onClick={() => this.setState({active: item.id})}>
          <img src={`../../../assets/images/${item.title}.png`} alt="language-icon"/> { item.title }
        </MenuItem>
      : ''
    ));
  }

  render() {

    let title = "Langs";
    let current = this.state.dropDownItems.find(i => i.id == this.state.active);
    current ? title = current.title : title = 'Langs';

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
              <NavDropdown title={title} id="language-dropdown">
                {this.renderMenuItems()}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    );
  }
}
