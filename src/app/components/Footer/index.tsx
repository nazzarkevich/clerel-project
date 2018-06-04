import * as React from 'react';
import './style.scss';
import { Row, Col } from 'react-bootstrap';

export class Footer extends React.Component {
  render() {
    return (
      <Row className="footerWrapper">
        <Col xs={12} sm={12} md={12} className="textWrap">
            <h5>© 2018 all rights reserved</h5>
        </Col>
      </Row>
    );
  }
}
