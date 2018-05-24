import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as style from './style.css';

export class ThirdSection extends React.Component {
  render() {
    return (
      <Row className={style.wrapper}>
        <Col md={4} xs={6}>
          <Row className={style.title}>
            <Col md={12} className="align-items-center">
              <div className={style.titleImage}>
                <h1>Clérel Changes Lives</h1>
                <p>Clérel’s unique donation 
                  protocol allows people to use 
                  their computers to change lives 
                  through mining.</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={8} xs={6}>
        <Row>
          <Col md={12}>

          </Col>
        </Row>
        </Col>
      </Row>
    );
  }
}