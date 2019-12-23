import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthFormStyles.scss';

const AuthFormView = ({
                        children,
                        title,
                        subTitle,
                        desc,
                        className = '',
                      }) => {
  return (
    <div className={`${styles.form__container} ${className}`}>
      <div className={styles.form__header}>
        <a href='#' className={styles.form__logo}>
          Project C
        </a>
        {title && <div className={styles.form__title}>{title}</div>}
        {subTitle && <div className={styles.form__subTitle}>{subTitle}</div>}
        {desc ? <div className={styles.form__desc}>{desc}</div> : null}
      </div>
      <form className={styles.form__form} onSubmit={e => e.preventDefault()}>
        {children}
      </form>
    </div>
  );
};

AuthFormView.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  desc: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.array,
};

export default AuthFormView;
