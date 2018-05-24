import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as style from './style.css';

export class SecondSection extends React.Component {
  render() {
    return (
      <Row className={style.wrapper}>
        <Col md={6} xs={12}>
          <Row className={style.maskWrapper}>
            <Col md={12}>
            <div className={style.maskImage}> 
              <img src={require('../../../assets/images/mask.svg')} alt=""/>
            </div>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={12}>
          <Row>
            <Col md={12}>
            <div className={style.bgImage}>
              <p className={style.topText}>Introducing</p>
              <h2>Free Donations</h2>
              <p className={style.bottomText}>
                Donate with the click of a button. 
                It costs you nothing.</p>
              <button className={style.donateBtn}>Donate</button>
            </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}