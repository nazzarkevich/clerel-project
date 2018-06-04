import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss';

export class FourthSection extends React.Component {
  render() {
    return (
      <Row className="wrapperFourth">
        <Col xs={12} sm={12} md={7} className="leftSection">
          <div className="title">
            <h1>Get involved</h1>
            <p className="text">Any non profit organization should 
              contact us to start accepting blockchain 
              donations. We will take care of everything.</p>
              <br/>
            <p>Please contact us at <a href="mailto:info@clerelfoundation.com"><span className="email">info@clerelfoundation.com</span></a> to
             discuss preliminary partnerships</p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={5} className="rightSection">
          <div className="box">
            <div className="imageWrap">
              <img src={require('../../../assets/images/star.png')} alt=""/>
              <p>Testimonials</p>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}