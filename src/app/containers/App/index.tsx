import * as React from 'react';
import * as style from './style.css';
import { Header, FirstSection } from '../../components';
import {Grid} from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
// import { RouteComponentProps } from 'react-router';

export class App extends React.Component {
  render() {
    return (
      <div className={style.body}>
        <Header />
        <Grid fluid>
          <FirstSection />
        </Grid>
      </div>
    );
  }
}
