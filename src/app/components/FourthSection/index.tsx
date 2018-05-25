import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as style from './style.css';

export class FourthSection extends React.Component {
  render() {
    return (
      <Row className={style.wrapper}>
        <Col md={7} xs={12} className={style.leftSection}>
          <div className={style.title}>
            <h1>Get involved</h1>
            <p className={style.text}>Any non profit organization should 
              contact us to start accepting blockchain 
              donations. We will take care of everything.</p>
              <br/>
            <p>Please contact us at <a href="mailto:info@clerelfoundation.com"><span className={style.email}>info@clerelfoundation.com</span></a> to
             discuss preliminary partnerships</p>
          </div>
        </Col>
        <Col md={5} xs={12} className={style.rightSection}>
          <div className={style.box}>
            <div className={style.imageWrap}>
              <img src={require('../../../assets/images/star.png')} alt=""/>
              <p>Testimonials</p>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}