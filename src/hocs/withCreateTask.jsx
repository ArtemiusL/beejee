/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createTask } from '_actions/tasks';

const withCreateTask = (WrappedComponent) => {
  class HOC extends Component {
    static propTypes = {
      createTask: PropTypes.func,
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const getDisplayName = WrappedComponentIn => (
    WrappedComponentIn.displayName || WrappedComponentIn.name || 'Component'
  );

  HOC.displayName = `withCreateTask(${getDisplayName(WrappedComponent)})`;

  return HOC;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    createTask,
  }, dispatch);

export default compose(
  connect(null, mapDispatchToProps, null, { pure: false }),
  withCreateTask,
);
