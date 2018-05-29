import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss';

export class SecondSection extends React.Component {
  render() {
    return (
      <Row className="wrapperSecond">
        <Col md={6} xs={12} className="leftSection">
          <div className="maskImage"> 
            <img src={require('../../../assets/images/mask.svg')} alt=""/>
          </div>
        </Col>
        <Col md={6} xs={12} className="mainRight">
          <Row className="rightChild">
            <Col md={12} className="rightSection">
              <div>
                <p className="topText">Introducing</p>
                <h2>Free Donations</h2>
                <p className="bottomText">
                  Donate with the click of a button. 
                  It costs you nothing.</p>
                <button className="donateBtn">Donate</button>
              </div>
              <div className="imageWrap">
                <img src={require('../../../assets/images/second-dot.png')} alt=""/>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}