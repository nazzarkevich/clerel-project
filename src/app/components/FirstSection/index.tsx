import * as React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import * as style from './style.css';
import { Link } from 'react-router-dom';

export class FirstSection extends React.Component {
  render() {
    return (
      <Row className={style.mainRow}>
        <Col md={5} xs={6} className={style.title}>
          <Col md={12}>
            <div className={style.imageWrap}>
              <img src={require('../../../assets/images/section-dot.png')} alt=""/>
            </div>
          </Col>
          <Col md={12} className={style.social}>
            <div className={style.titleWrap}>
              <h2>Clérel Foundation</h2>
              <p>Bringing the Future into the Present</p>
            </div>
            <Col md={12}>
              <Link to="/">
                <div className={style.iconWrapper}>
                  <i className="fab fa-linkedin-in fa-lg text-center"></i>
                </div>
              </Link>
              <Link to="/">
                <div className={style.iconWrapper}>
                  <i className="fab fa-instagram fa-lg text-center"></i>
                </div>
              </Link>
              <Link to="/">
                <div className={style.iconWrapper}>
                  <i className="fab fa-facebook-f fa-lg text-center"></i>
                </div>
              </Link>
              <Link to="/">
                <div className={style.iconWrapper}>
                  <i className="fab fa-twitter fa-lg text-center"></i>
                </div>
              </Link>
            </Col>
          </Col>
        </Col>
        <Col md={7} xs={12}>
          <Image 
            className={style.human} 
            src={require('../../../assets/images/human-red-blue.png')} 
            alt=""
            />
        </Col>
      </Row>
    );
  }
}