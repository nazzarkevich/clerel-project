import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss';

export class ThirdSection extends React.Component {
  render() {
    return (
      <Row className="wrapperThird">
        <Col md={4} xs={12} className="title">
          <div className="titleImage">
            <h1>Clérel Changes Lives</h1>
            <p>Clérel’s unique donation 
              protocol allows people to use 
              their computers to change lives 
              through mining.</p>
          </div>
        </Col>
        <Col md={8} xs={12} className="rightSection">
          <div className="infoWrap">
            <img src={require('../../../assets/images/info.png')} alt=""/>
            <div className="free">
              <div className="titleFree">
                <h4>Free Donations</h4>
                <p>A donor will be able 
                  to donate by simply navigating 
                  online.</p>
              </div>
              <div className="freeImgWrap">
                <img src={require('../../../assets/images/mobile_1.png')} alt=""/>
              </div>
            </div>
            <div className="low">
              <div className="titleLow">
                <h4>Low cost</h4>
                <p>Blockchain technology eliminates 
                  overhead costs &amp; processing fees associated 
                  with traditional donations.</p>
              </div>
              <div className="lowImgWrap">
                <img src={require('../../../assets/images/mobile_2.png')} alt=""/>
              </div>
            </div>
            <div className="get">
              <div className="titleGet">
                <h4>Get started</h4>
                <p>Reach out to start accepting block- chain donations. 
                  We will take care of everything.</p>
              </div>
              <div className="getImgWrap">
                <img src={require('../../../assets/images/mobile_3.png')} alt=""/>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}