import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class Example2View extends React.Component {

  static propTypes = {

  };

  render() {

    return (
      <div className={styles.ExampleView}>
        <span>
           Example2 (Example2View) !!!
        </span>
      </div>
    );
  }
}

export default Example2View;
