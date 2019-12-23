import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from "..";
import styles from "./MainLayoutStyles.scss";

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />

          <main className={styles.main}>

            <div className={styles.mainContainer}>
              {this.props.children}
            </div>

          </main>

          <Footer/>
        </div>
      </div>
    );
  }
}

export default MainLayout;
