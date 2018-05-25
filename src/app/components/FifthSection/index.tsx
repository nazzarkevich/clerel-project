import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as style from './style.css';

export class FifthSection extends React.Component {
  render() {
    return (
      <Row className={style.wrapper}>
        <Col md={12}>
          <h2>Fifth section</h2>
        </Col>
      </Row>
    );
  }
}