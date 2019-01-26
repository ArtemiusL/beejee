/* eslint-disable */
import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authUser } from '_actions/common';
import { isAuthSelector } from '_selectors';

const withAuth = WrappedComponent => {
  class HOC extends Component {
    static propTypes = {
      authUser: PropTypes.func,
      isAuth: PropTypes.bool,
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const getDisplayName = WrappedComponentIn => (
    WrappedComponentIn.displayName || WrappedComponentIn.name || 'Component'
  );

  HOC.displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

  return HOC;
};

const mapStateToProps = state => ({
  isAuth: isAuthSelector(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    authUser,
  }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false }),
  withAuth,
);
