import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

import {exampleAction} from '../../../store/example/exampleActions';
import Example2View from './Example2View';

class ExampleComponent extends React.Component {

  static propTypes = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <Example2View />
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  exampleAction: exampleAction.request,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
