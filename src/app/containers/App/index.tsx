import * as React from 'react';
import * as style from './style.css';
import { 
  Header,
  FirstSection,
  SecondSection,
  ThirdSection } from '../../components';
import { Grid } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
// import { RouteComponentProps } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div className={style.body}>
        <Header />
        <Grid fluid>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </Grid>
      </div>
    );
  }
}
