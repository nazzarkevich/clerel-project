import * as React from 'react';
import { Row } from 'react-bootstrap';
import './style.scss';

export class ThirdSection extends React.Component {
  render() {
    return (
      <Row className="wrapperThird grid">
        <div className="title">
          <h1>Clérel Changes Lives</h1>
          <p>Clérel’s unique donation 
            protocol allows people to use 
            their computers to change lives 
            through mining.</p>
          <div className="titleImage">
            <img src={require('../../../assets/images/dot-third.png')} alt=""/>
          </div>
        </div>
        <div className="infoWrap grid">
          <div className="infoImgWrap">
            <img src={require('../../../assets/images/info.png')} alt=""/>
          </div>
          <div className="free">
            <div className="titleFree">
              <h4>Free Donations</h4>
              <p>A donor will be able 
                to donate by simply navigating 
                online.</p>
            </div>
          </div>
          <div className="freeImgWrap">
            <img src={require('../../../assets/images/mobile_1.png')} alt=""/>
          </div>
          <div className="low">
            <div className="titleLow">
              <h4>Low cost</h4>
              <p>Blockchain technology eliminates 
                overhead costs &amp; processing fees associated 
                with traditional donations.</p>
            </div>
          </div>
          <div className="lowImgWrap">
            <img src={require('../../../assets/images/mobile_2.png')} alt=""/>
          </div>
          <div className="get">
            <div className="titleGet">
              <h4>Get started</h4>
              <p>Reach out to start accepting blockchain donations. 
                We will take care of everything.</p>
            </div>
          </div>
          <div className="getImgWrap">
            <img src={require('../../../assets/images/mobile_3.png')} alt=""/>
          </div>
        </div>
        <div id="corner-image">
          <img src="../../../assets/images/rect-bottom.png" alt="corner-image"/>
        </div>
      </Row>
    );
  }
}