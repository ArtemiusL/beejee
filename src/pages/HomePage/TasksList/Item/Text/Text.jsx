/* eslint-disable no-alert */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { errorMessageForNotLogin } from '_constants';

import styles from './Text.scss';

@CSSModules(styles)
class Text extends PureComponent {
  state = {
    isEditing: false,
    inputValue: '',
  };

  handleDoubleClick = () => {
    if (this.props.isAuth) {
      this.setState({
        isEditing: true,
      });
    } else {
      alert(errorMessageForNotLogin);
    }
  }

  handleInputBlur = () => {
    const { id, onDoubleClick } = this.props;
    const { inputValue } = this.state;

    if (inputValue) {
      onDoubleClick({
        id,
        text: inputValue,
      });
    }

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
      value,
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
  }
}

Text.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  isAuth: PropTypes.bool,
  onDoubleClick: PropTypes.func,
  value: PropTypes.string,
};

export default Text;
