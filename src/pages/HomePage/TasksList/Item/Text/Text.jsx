/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import withEditTask from '_hocs/withEditTask';

import styles from './Text.scss';

@withEditTask
@CSSModules(styles)
class Text extends PureComponent {
  state = {
    isEditing: false,
    inputValue: ''
  };

  handleDoubleClick = () => {
    this.setState({
      isEditing: true,
    });
  }

  handleInputBlur = () => {
    const { id, editTask } = this.props;
    const { inputValue } = this.state;

    editTask({
      id,
      text: inputValue,
    });

    this.setState({
      isEditing: false,
      inputValue: '',
    });
  }

  handleChange = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
  }

  render() {
    const {
      className,
      children,
      value,
      onDoubleClick,
    } = this.props;

    const { isEditing, inputValue } = this.state;

    return isEditing ? (
      <input
        styleName="input"
        value={inputValue}
        onChange={this.handleChange}
        onBlur={this.handleInputBlur}
        type="text"
        id="editingText"
        placeholder="Username"
        required
      />
    ) : (
      <div
        className={className}
        styleName="root"
        onDoubleClick={this.handleDoubleClick}
      >
        {value}
      </div>
    );
  };
}

Text.propTypes = {
  className: PropTypes.string,
};

export default Text;
