import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import withTasks from '_hocs/withTasks';
import withAuth from '_hocs/withAuth';
import withEditTask from '_hocs/withEditTask';

import Item from './Item';
import Pagination from './Pagination';
import Sorting from './Sorting';

import styles from './TasksList.scss';

@withEditTask
@withAuth
@withTasks
@CSSModules(styles, { allowMultiple: true })
class TasksList extends PureComponent {
  handleTextDoubleClick = (params) => {
    const { editTask } = this.props;

    editTask(params);
  }

  render() {
    const {
      className,
      tasks: {
        items,
        page,
        taskCount,
        sortField,
        sortDirection,
      },
      changePage,
      isAuth,
      changeSortDirection,
      changeSortField,
    } = this.props;


    return (
      <div className={className}>
        <Sorting
          sortDirection={sortDirection}
          sortField={sortField}
          changeSortField={changeSortField}
          changeSortDirection={changeSortDirection}
        />
        <div styleName="wrapper">
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
      </div>
    );
  }
}

TasksList.propTypes = {
  className: PropTypes.string,
  isAuth: PropTypes.bool,
  editTask: PropTypes.func,
  changePage: PropTypes.func,
  changeSortField: PropTypes.func,
  changeSortDirection: PropTypes.func,
  tasks: PropTypes.object,
};


export default TasksList;
