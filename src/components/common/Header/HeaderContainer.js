import React from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import HeaderView from './HeaderView';
import { logout } from "../../../store/auth/authActions";

class HeaderContainer extends React.Component {

  static propTypes = {
    //actions
    logout: PropTypes.func.isRequired,
    //data
    name: PropTypes.string,
    avatar: PropTypes.string,
    isAdmin: PropTypes.string,
  };

  state = {
    isActive: false,
    menuIsOpen: false,
  };

  handleDropMenuOpen = () => {
    this.setState(state => ({
      menuIsOpen: !state.menuIsOpen,
    }));
  };

  handleMenuClose = () => {
    this.setState({
      menuIsOpen: false,
    });
  };

  handlerMenuOpen = ({target}) => {
    this.setState({isActive: target.checked});
  };

  render() {
    const {avatar, name, logout, isAdmin} = this.props;

    return (
      <HeaderView
        onChangeInput={this.handlerMenuOpen}
        isActive={this.state.isActive}
        userAvatar={avatar}
        userName={name}
        onDropMenuOpen={this.handleDropMenuOpen}
        menuIsOpen={this.state.menuIsOpen}
        onMenuClose={this.handleMenuClose}
        onLogout={logout}
        isAdmin={isAdmin}
      />
    );
  }
}

const mapStateToProps = () => ({
  // name: 'first_name',
  // isAdmin: true,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
