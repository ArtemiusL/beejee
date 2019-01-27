/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import withEditTask from '_hocs/withEditTask';

import styles from './Checkbox.scss';

@withEditTask
@CSSModules(styles, { allowMultiple: true })
class Checkbox extends PureComponent {
  handleChange = (evt) => {
    const { id, editTask } = this.props;
    const status = evt.target.checked ? 10 : 0;

    editTask({
      id,
      status,
    });
  }

  render() {
    const { status } = this.props;

    return (
      <input
        type="checkbox"
        defaultChecked={Boolean(status)}
        onChange={this.handleChange}
      />
    );
  }
}

Checkbox.propTypes = {
  status: PropTypes.number,
};


export default Checkbox;
