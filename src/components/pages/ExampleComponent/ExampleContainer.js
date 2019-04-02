import React from 'react';
import PropTypes from 'prop-types';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import {globals} from '../../../store/globals';

import {exampleAction} from '../../../store/example/exampleActions';
import ExampleView from './ExampleView';

class ExampleComponent extends React.Component {

  static propTypes = {
    exampleAction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.exampleAction();
  }

  navTo = route => e => {
    e.preventDefault();
    globals.history.push(route);
  };

  render() {
    return (
      <ExampleView navTo={this.navTo} />
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  exampleAction: exampleAction.request,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
