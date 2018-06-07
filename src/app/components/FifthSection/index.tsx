import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss';

export class FifthSection extends React.Component {
  render() {
    return (
      <Row className="wrapperFifth">
        <div className="topImage"></div>
        <Row className="wrapperFifthInner">
          <Col xs={12} sm={12} md={12} className="titleWrap">
            <div className="title">
              <h2>Learn more from our</h2>
              <span className="blog">Blog</span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} className="feedbackWrap">
            <div className="feedback">
              <div className="box">
                <div className="imgWrap">
                  <img src={require('../../../assets/images/people.png')} alt=""/>
                </div>
                <div className="boxTitle">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                    faucibus vel arcu et ultricies. In hac habitasse platea dictumst...</p>
                  <button className="btn">read more</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    );
  }
}