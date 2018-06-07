import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss';

export class SixSection extends React.Component {
  render() {
    return (
      <Row className="wrapperSix">
        <div className="topImage"></div>
        <Col xs={12} sm={6} md={6} className="social">
          <div className="youtube">
            <img src={require('../../../assets/images/icons/icon-youtube.png')} alt=""/>
          </div>
          <div className="medium">
            <img src={require('../../../assets/images/icons/icon-medium.png')} alt=""/>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} className="social">
          <div className="twitter">
            <img src={require('../../../assets/images/icons/icon-twitter.png')} alt=""/>
          </div>
          <div className="telegram">
            <img src={require('../../../assets/images/icons/icon-telegram.png')} alt=""/>
          </div>
        </Col>
      </Row>
    );
  }
}