import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import ExampleView from './ExampleView';
import {globals} from "../../../store/globals";

class ExampleContainer extends Component {
  navTo = route => e => {
    e.preventDefault();
    globals.history.push(route);
  };

  render() {

    return (
      <ExampleView

      />
    );
  }

}

ExampleContainer.propTypes = {

};

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);
