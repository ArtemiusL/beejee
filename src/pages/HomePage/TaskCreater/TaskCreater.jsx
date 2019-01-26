/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import withCreateTask from '_hocs/withCreateTask';

import styles from './TaskCreater.scss';

const testData = {
  username: 'Алан',
  email: 'alan@alan.alan',
  text: 'Сделать домашку',
};

@withCreateTask
@CSSModules(styles, { allowMultiple: true })
class TaskCreater extends PureComponent {
  handleSubmit = (evt) => {
    evt.preventDefault();

    const formValues = evt.target.querySelectorAll('input');
    const formData = this.getFormObjectFromArray(formValues);

    this.props.createTask(formData);
    evt.target.reset();
  }

  getFormObjectFromArray = (array) => {
    const myObj = {};
    array.forEach((item) => {
      myObj[item.id] = item.value;
    })

    return myObj;
  }

  render() {
    const { className, createTask } = this.props;

    return (
      <div className={className} styleName="root">
        <h1 styleName="title">
          What needs to be done?
        </h1>
        <form styleName="form" onSubmit={this.handleSubmit}>
          <input
            styleName="input"
            type="username"
            id="username"
            placeholder="Username"
            required
          />
          <input
            styleName="input"
            type="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            styleName="input"
            type="text"
            id="text"
            placeholder="Text task"
            required
          />
          <button styleName="btn" type="submit">Создать задачу!</button>
        </form>
      </div>
    );
  }
}

TaskCreater.propTypes = {
  className: PropTypes.string,
};


export default TaskCreater;
