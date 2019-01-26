/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import withTasks from '_hocs/withTasks';

import Item from './Item';
import Pagination from './Pagination';

import styles from './TasksList.scss';

@withTasks
@CSSModules(styles, { allowMultiple: true })
class TasksList extends PureComponent {
  render() {
    const {
      className,
      tasks: { items, page, taskCount },
      changePage,
    } = this.props;

    return (
      <div className={className} styleName="root">
        {items.map(task => (
          <Item
            key={task.id}
            text={task.text}
            email={task.email}
            username={task.username}
            status={task.status}
          />
        ))}
        <Pagination
          currentPage={page}
          taskCount={taskCount}
          changePage={changePage}
        />
      </div>
    );
  }
}

TasksList.propTypes = {
  className: PropTypes.string,
};


export default TasksList;
