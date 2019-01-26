/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import withTasks from '_hocs/withTasks';

import Item from './Item';

import styles from './TasksList.scss';

@withTasks
@CSSModules(styles, { allowMultiple: true })
class TasksList extends PureComponent {
  handleClick = () => {
    console.log('TasksList');
  }

  render() {
    const { className, items } = this.props;

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
      </div>
    );
  }
}

TasksList.propTypes = {
  className: PropTypes.string,
};


export default TasksList;
