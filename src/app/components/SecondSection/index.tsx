import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as style from './style.css';

export class SecondSection extends React.Component {
  render() {
    return (
      <Row className={style.wrapper}>
        <Col md={6} xs={12} className={style.leftSection}>
          <div className={style.maskImage}> 
            <img src={require('../../../assets/images/mask.svg')} alt=""/>
          </div>
        </Col>
        <Col md={6} xs={12} className={style.mainRight}>
          <Row className={style.rightChild}>
            <Col md={12} className={style.rightSection}>
              <div>
                <p className={style.topText}>Introducing</p>
                <h2>Free Donations</h2>
                <p className={style.bottomText}>
                  Donate with the click of a button. 
                  It costs you nothing.</p>
                <button className={style.donateBtn}>Donate</button>
              </div>
              <div className={style.imageWrap}>
                <img src={require('../../../assets/images/second-dot.png')} alt=""/>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}