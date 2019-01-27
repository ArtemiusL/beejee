/* eslint-disable */
import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { editTask } from '_actions/tasks';

const withEditTask = WrappedComponent => {
  class HOC extends Component {
    static propTypes = {
      editTask: PropTypes.func,
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const getDisplayName = WrappedComponentIn => (
    WrappedComponentIn.displayName || WrappedComponentIn.name || 'Component'
  );

  HOC.displayName = `withEditTask(${getDisplayName(WrappedComponent)})`;

  return HOC;
};

// const mapStateToProps = state => ({
//   tasks: tasksSelector(state),
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    editTask,
  }, dispatch);

export default compose(
  connect(null, mapDispatchToProps, null, { pure: false }),
  withEditTask,
);
