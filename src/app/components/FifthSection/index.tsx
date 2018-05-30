import * as React from 'react';
import { Row } from 'react-bootstrap';
import './style.scss';

export class FifthSection extends React.Component {
  render() {
    return (
      <Row className="wrapperFifth">
        <div className="topImage">
          <img src={require('../../../assets/images/tri-shape.svg')} alt=""/>
        </div>
        <div className="title">
          <h2>Learn more from our</h2>
          <p><span className="blog">Blog</span></p>
        </div>
        <div className="feedback">
          <div className="imgWrap">
            <img src={require('../../../assets/images/people.png')} alt=""/>
          </div>
        </div>
      </Row>
    );
  }
}