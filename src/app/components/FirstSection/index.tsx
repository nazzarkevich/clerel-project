import * as React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './style.css';
import { Link } from 'react-router-dom';

export class FirstSection extends React.Component {
  render() {
    return (
      <Row className="mainRow">
        <Col md={5} xs={6} className="title">
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
            </Col>
          </Col>
        </Col>
        <Col md={7} xs={12}>
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