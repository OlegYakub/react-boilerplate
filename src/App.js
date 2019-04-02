import React from 'react';
import { withRouter } from 'react-router';
//import { bindActionCreators } from "redux";
import connect from 'react-redux/es/connect/connect';
//import { hot } from 'react-hot-loader';
//import HelloWorld from './components/hello-world/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.children;
  }
}

// const mapStateToProps = ({ }) => ({
//
// });
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//
// }, dispatch);

export default withRouter(connect(null, null)(App));
