import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './index.scss';
import {EXAMPLE_ROUTE2} from '../../../navigation/routes';

class ExampleView extends React.Component {

  static propTypes = {
    navTo: PropTypes.func.isRequired,
  };

  render() {

    return (
      <div className={styles.ExampleView}>
        <span>
           ROOT (ExampleView) !!!
        </span>
        <br/>
        <a href='' onClick={this.props.navTo(EXAMPLE_ROUTE2)}>GO TO EXAMPLE2 Programmatically</a>
        <br/>
        <Link to={EXAMPLE_ROUTE2}>GO TO EXAMPLE2 Using Link</Link>
      </div>
    );
  }
}

export default ExampleView;
