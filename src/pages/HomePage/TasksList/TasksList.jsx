/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import withTasks from '_hocs/withTasks';
import withAuth from '_hocs/withAuth';
import withEditTask from '_hocs/withEditTask';

import Item from './Item';
import Pagination from './Pagination';

import styles from './TasksList.scss';

@withEditTask
@withAuth
@withTasks
@CSSModules(styles, { allowMultiple: true })
class TasksList extends PureComponent {
  handleTextDoubleClick = (params) => {
    const { editTask } = this.props;

    console.log('работает');
    editTask(params);
  }

  render() {
    const {
      className,
      tasks: { items, page, taskCount },
      changePage,
      isAuth,
    } = this.props;

    return (
      <div className={className} styleName="root">
        {items.map(task => (
          <Item
            key={task.id}
            id={task.id}
            text={task.text}
            email={task.email}
            username={task.username}
            status={task.status}
            isAuth={isAuth}
            onDoubleClickText={this.handleTextDoubleClick}
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
  isAuth: PropTypes.bool,
  editTask: PropTypes.func,
};


export default TasksList;
