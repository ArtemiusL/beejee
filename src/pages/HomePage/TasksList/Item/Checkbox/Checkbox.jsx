/* eslint-disable no-alert */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { errorMessageForNotLogin } from '_constants';

import styles from './Checkbox.scss';

@CSSModules(styles, { allowMultiple: true })
class Checkbox extends PureComponent {
  handleClick = (evt) => {
    const { isAuth, id, onDoubleClick } = this.props;
    if (isAuth) {
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
    const { status } = this.props;

    return (
      <input
        styleName="root"
        type="checkbox"
        defaultChecked={Boolean(status)}
        onClick={this.handleClick}
      />
    );
  }
}

Checkbox.propTypes = {
  status: PropTypes.number,
  id: PropTypes.number,
  isAuth: PropTypes.bool,
  onDoubleClick: PropTypes.func,
};


export default Checkbox;
