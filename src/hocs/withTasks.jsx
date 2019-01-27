import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTasks, changePage } from '_actions/tasks';
import { tasksSelector } from '_selectors/tasks';

const withTasks = (WrappedComponent) => {
  class HOC extends Component {
    static propTypes = {
      tasks: PropTypes.object,
      fetchTasks: PropTypes.func,
      changePage: PropTypes.func,
    }

    componentDidMount() {
      this.props.fetchTasks();
    }

    componentWillReceiveProps(nextProps) {
      const {
        tasks: {
          page,
          sortDirection,
          sortField,
          items,
        },
      } = this.props;

      const {
        tasks: {
          page: newPage,
          sortDirection: newSortDirection,
          sortField: newSortField,
        },
      } = nextProps;

      if (
        items.length > 0 &&
        (newPage !== page ||
        newSortDirection !== sortDirection ||
        newSortField !== sortField)
      ) {
        this.props.fetchTasks();
      }
    }

    render() {
      return this.props.tasks.items ? <WrappedComponent {...this.props} /> : null;
    }
  }

  const getDisplayName = WrappedComponentIn => (
    WrappedComponentIn.displayName || WrappedComponentIn.name || 'Component'
  );

  HOC.displayName = `withTasks(${getDisplayName(WrappedComponent)})`;

  return HOC;
};

const mapStateToProps = state => ({
  tasks: tasksSelector(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchTasks,
    changePage,
  }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false }),
  withTasks,
);
