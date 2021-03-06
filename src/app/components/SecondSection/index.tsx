import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss';

export class SecondSection extends React.Component {
  render() {
    return (
      <Row className="wrapperSecond">
        <Col xs={8} sm={8} md={6} className="videoSection">
          <div className="maskImage">
            <iframe id="video" width="920" height="700"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
            </iframe>
            <div className="backMask">
              <img src={require('../../../assets/images/mask.svg')} alt=""/>
            </div>
          </div>
        </Col>
        <Col xs={9} sm={9} md={6} className="rightWrap">
          <div className="rightSection">
            <div className="donationTitle">
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
          </div>
        </Col>
      </Row>
    );
  }
}