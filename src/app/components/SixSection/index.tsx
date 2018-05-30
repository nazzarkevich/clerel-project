import * as React from 'react';
import { Row } from 'react-bootstrap';
import './style.scss';

export class SixSection extends React.Component {
  render() {
    return (
      <Row className="wrapperSix">
        <div className="topImage">
          <img src={require('../../../assets/images/tri-shape-2.svg')} alt=""/>
        </div>
        <div className="youtube">
          <img src={require('../../../assets/images/icons/icon-youtube.png')} alt=""/>
        </div>
        <div className="medium">
          <img src={require('../../../assets/images/icons/icon-medium.png')} alt=""/>
        </div>
        <div className="twitter">
          <img src={require('../../../assets/images/icons/icon-twitter.png')} alt=""/>
        </div>
        <div className="telegram">
          <img src={require('../../../assets/images/icons/icon-telegram.png')} alt=""/>
        </div>
      </Row>
    );
  }
}