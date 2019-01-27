import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import withCreateTask from '_hocs/withCreateTask';

import styles from './TaskCreater.scss';

@withCreateTask
@CSSModules(styles, { allowMultiple: true })
class TaskCreater extends PureComponent {
  getFormObjectFromArray = (array) => {
    const myObj = {};
    array.forEach((item) => {
      myObj[item.id] = item.value;
    });

    return myObj;
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const formValues = evt.target.querySelectorAll('input');
    const formData = this.getFormObjectFromArray(formValues);

    this.props.createTask(formData);
    evt.target.reset();
  }

  render() {
    const { className } = this.props;

    return (
      <div className={className} styleName="root">
        <h1 styleName="title">
          What needs to be done?
        </h1>
        <form styleName="form" onSubmit={this.handleSubmit}>
          <input
            styleName="input"
            type="text"
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
          <button styleName="btn" type="submit">
            Create task
          </button>
        </form>
      </div>
    );
  }
}

TaskCreater.propTypes = {
  className: PropTypes.string,
  createTask: PropTypes.func,
};


export default TaskCreater;
