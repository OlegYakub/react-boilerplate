import React from 'react';
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import PropTypes from "prop-types";
import {Alert} from './components/common';

class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
        <Alert />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

// const mapStateToProps = () => ({
//
// });
//
// const mapDispatchToProps = dispatch => bindActionCreators({
// }, dispatch);

export default withRouter(connect(null)(App));
