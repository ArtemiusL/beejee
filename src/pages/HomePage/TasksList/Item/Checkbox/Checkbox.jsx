/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { errorMessageForNotLogin } from '_constants';

import styles from './Checkbox.scss';

@CSSModules(styles, { allowMultiple: true })
class Checkbox extends PureComponent {
  handleClick = (evt) => {
    if (this.props.isAuth) {
      const { id, onDoubleClick } = this.props;
      const status = evt.target.checked ? 10 : 0;

      onDoubleClick({
        id,
        status,
      });
    } else {
      evt.preventDefault();
      alert(errorMessageForNotLogin);
    }
  }

  render() {
    const { status, isAuth } = this.props;

    return (
      <input
        type="checkbox"
        defaultChecked={Boolean(status)}
        onClick={this.handleClick}
      />
    );
  }
}

Checkbox.propTypes = {
  status: PropTypes.number,
};


export default Checkbox;
