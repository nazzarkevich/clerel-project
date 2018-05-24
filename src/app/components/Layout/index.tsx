import * as React from 'react';
import { Header, Footer } from '../../components';

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Footer />
      </div>
    );
  }
}