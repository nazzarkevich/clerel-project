import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss';

export class FifthSection extends React.Component {
  render() {
    return (
      <Row className="wrapper">
        <Col md={12}>
        <div className="title">
          <h2>Learn more from our</h2>
          <p>Blog</p>
        </div>
        </Col>
      </Row>
    );
  }
}