import React from 'react';
import styles from "./FooterStyles.scss";

const FooterView = () => (
  <div className={styles.footer}>

    <div className={styles.footer__content}>
      <a href='#'>© ProjectC 2019</a>
      <a href='#'>Terms & Conditions</a>
    </div>

  </div>
);

export default FooterView;
