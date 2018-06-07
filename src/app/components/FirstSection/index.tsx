import * as React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './style.scss';
import { Link } from 'react-router-dom';

export class FirstSection extends React.Component {
  render() {
    return (
      <Row className="wrapperFirst">
        <Col xs={8} sm={8} md={5} className="leftSection">
          <div className="titleWrap">
            <div className="imageWrap">
              <img src={require('../../../assets/images/section-dot.png')} alt=""/>
            </div>
            <h2>Clérel Foundation</h2>
            <p>Bringing the Future into the Present</p>
            <div className="socialWrap">
              <Link to="/">
                <div className="iconWrapper">
                  <i className="fab fa-linkedin-in fa-lg text-center"></i>
                </div>
              </Link>
              <Link to="/">
                <div className="iconWrapper">
                  <i className="fab fa-instagram fa-lg text-center"></i>             
                </div>
              </Link>
              <Link to="/">
                <div className="iconWrapper">
                  <i className="fab fa-facebook-f fa-lg text-center"></i>
                </div>
              </Link>
              <Link to="/">
                <div className="iconWrapper">
                  <i className="fab fa-twitter fa-lg text-center"></i>
                </div>
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={8} sm={8} md={7} className="rightSection">
          <Image 
            className="human" 
            src={require('../../../assets/images/human-red-blue.png')} 
            alt=""
          />
        </Col>
      </Row>
    );
  }
}