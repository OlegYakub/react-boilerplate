import React, { Component } from 'react';
// import PropTypes from "prop-types";
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from "redux";
import SideBarView from './SideBarView';

class SideBarContainer extends Component {

  render() {
    const {menuIsOpen} = this.props;
    return (
      <SideBarView

      />
    );
  }
}

SideBarContainer.propTypes = {

};

const mapStateToProps = ({ui: {menuIsOpen}}) => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);
