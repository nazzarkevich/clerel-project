import * as React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import * as style from './style.css';
import { Link } from 'react-router-dom';

export class FirstSection extends React.Component {
  render() {
    return (
      <Row className={style.mainRow}>
        <Col md={5} xs={6} className={style.title}>
        <div className={style.dot}></div>
          <h2>Clérel Foundation</h2>
          <p>Bringing the Future into the Present</p>
          <ul className={style.social}>
            <li>
              <Link to="/">
                <div className={style.iconWrapper}>
                  <i className="fab fa-linkedin-in fa-lg text-center"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className={style.iconWrapper}>
                  <i className="fab fa-instagram fa-lg text-center"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className={style.iconWrapper}>
                  <i className="fab fa-facebook-f fa-lg text-center"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className={style.iconWrapper}>
                  <i className="fab fa-twitter fa-lg text-center"></i>
                </div>
              </Link>
            </li>
          </ul>
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