import * as React from 'react';
import './style.scss';
import { Row } from 'react-bootstrap';

export class Footer extends React.Component {
  render() {
    return (
      <Row className="footerWrapper">
        <div className="textWrap">
          <h5>© 2018 all rights reserved</h5>
        </div>
      </Row>
    );
  }
}
