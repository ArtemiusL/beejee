/* eslint-disable */
import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTasks } from '_actions/tasks';
import { tasksItemsSelector } from '_selectors/tasks';

const withTasks = WrappedComponent => {
  class HOC extends Component {
    static propTypes = {
      items: PropTypes.array,
      fetchTasks: PropTypes.func,
    }

    componentDidMount() {
      this.props.fetchTasks();
    }

    render() {
      const { fetchArchiveArticles, ...otherProps } = this.props;
      return this.props.items ? <WrappedComponent {...otherProps} /> : null;
    }
  }

  const getDisplayName = WrappedComponentIn => (
    WrappedComponentIn.displayName || WrappedComponentIn.name || 'Component'
  );

  HOC.displayName = `withTasks(${getDisplayName(WrappedComponent)})`;

  return HOC;
};

const mapStateToProps = state => ({
  items: tasksItemsSelector(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchTasks,
  }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false }),
  withTasks,
);
