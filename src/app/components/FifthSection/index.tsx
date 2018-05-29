import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as style from './style.css';

export class FifthSection extends React.Component {
  render() {
    return (
      <Row className={style.wrapper}>
        <Col md={12}>
        <div className={style.title}>
          <h2>Learn more from our</h2>
          <p>Blog</p>
        </div>
        </Col>
      </Row>
    );
  }
}