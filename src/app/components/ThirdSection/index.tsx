import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as style from './style.css';

export class ThirdSection extends React.Component {
  render() {
    return (
      <Row className={style.wrapper}>
        <Col md={4} xs={6} className={style.title}>
          <div className={style.titleImage}>
            <h1>Clérel Changes Lives</h1>
            <p>Clérel’s unique donation 
              protocol allows people to use 
              their computers to change lives 
              through mining.</p>
          </div>
        </Col>
        <Col md={8} xs={6}>
          <div className={style.infoWrap}>
            <div className={style.free}>
              <h5>Free Donations</h5>
              <p>A donor will be able 
                to donate by simply navigating 
                online.</p>
            </div>
            <div className={style.low}>
              <h5>Low cost</h5>
              <p>Blockchain technology eliminates 
                overhead costs &amp; processing fees associated 
                with traditional donations.</p>
            </div>
            <div className={style.get}>
              <h5>Get started</h5>
              <p>Reach out to start accepting block- chain donations. 
                We will take care of everything.</p>
            </div>
            <div className={style.imageWrap}>
              <img src={require('../../../assets/images/info.png')} alt=""/>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}