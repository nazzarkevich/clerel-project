import * as React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './style.scss';
import { Link } from 'react-router-dom';

export class FirstSection extends React.Component {
  render() {
    return (
      <Row className="wrapperFirst">
        <Col md={7} xs={12} className="title">
          <Col md={12}>
            <div className="imageWrap">
              <img src={require('../../../assets/images/section-dot.png')} alt=""/>
            </div>
          </Col>
          <Col md={12} className="social">
            <Col md={12}>
              <div className="titleWrap">
                <h2>Clérel Foundation</h2>
                <p>Bringing the Future into the Present</p>
              </div>
            </Col>
            <Col md={12}>
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
            </Col>
          </Col>
        </Col>
        <Col md={5} xs={12}>
          <div className="humanWrap">
            <Image 
              className="human" 
              src={require('../../../assets/images/human-red-blue.png')} 
              alt=""
              />
          </div>
        </Col>
      </Row>
    );
  }
}