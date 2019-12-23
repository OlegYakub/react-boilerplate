import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// import {
//   LOGIN, REGISTRATION,
// } from '../../../navigation/routes';
import styles from './HeaderStyles.scss';
import btn from './BtnGumburger.scss';
import {EXAMPLE} from "../../../navigation/routes";

class HeaderView extends React.Component {

  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    userAvatar: PropTypes.string,
    userName: PropTypes.string,
    onChangeInput: PropTypes.func,
    onDropMenuOpen: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    menuIsOpen: PropTypes.bool.isRequired,
  };

  render() {
    // const {userAvatar, userName, onDropMenuOpen, menuIsOpen, onLogout, isActive, onChangeInput, onMenuClose, isAdmin} = this.props;
    const {isActive, onChangeInput} = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.headerLogo}>
            <Link to={EXAMPLE} className={styles.headerLogoLink}>
              Project C
            </Link>
          </div>

          <div className={btn["b-btnMenu"]}>
            <input className={`${btn['b-btnMenu__input']}`} onChange={onChangeInput} type='checkbox' id='btnMenu'/>
            <label className={`${btn['b-btnMenu__label']}`} htmlFor='btnMenu'>
              <div className={`${btn['b-btnMenu__item']}`}></div>
              <div className={`${btn['b-btnMenu__item']}`}></div>
              <div className={`${btn['b-btnMenu__item']}`}></div>
            </label>
          </div>

          <div className={`${styles.menu} ${isActive ? styles.menu__active : ''}`}>
            {/*<SideBar headerbar/>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderView;
