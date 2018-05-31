import * as React from 'react';
import { Row } from 'react-bootstrap';
import './style.scss';

export class FifthSection extends React.Component {
  render() {
    return (
      <Row className="wrapperFifth">
        <div className="topImage">
          <img src={require('../../../assets/images/shape-grey.svg')} alt=""/>
        </div>
        <div className="title">
          <h2>Learn more from our</h2>
          <p><span className="blog">Blog</span></p>
        </div>
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
      </Row>
    );
  }
}