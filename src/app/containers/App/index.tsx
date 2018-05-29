import * as React from 'react';
import './style.scss';
import { 
  Header,
  FirstSection,
  SecondSection,
  ThirdSection, 
  FourthSection,
  FifthSection } from '../../components';
import { Grid } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
// import { RouteComponentProps } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <Grid fluid>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
        </Grid>
      </div>
    );
  }
}
