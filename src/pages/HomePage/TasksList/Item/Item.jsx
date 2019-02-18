import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Text from './Text';
import Checkbox from './Checkbox';

import styles from './Item.scss';

const Item = ({
  className,
  text,
  username,
  email,
  status,
  onDoubleClickText,
  id,
  isAuth,
}) => (
  <div className={className} styleName="root">
    <div styleName="left">
      <Checkbox
        status={status}
        onDoubleClick={onDoubleClickText}
        id={id}
        isAuth={isAuth}
      />
    </div>
    <div styleName="right">
      <div styleName="item">
        <span>Username: </span>
        {username}
      </div>
      <div styleName="item">
        <span>Email: </span>
        {email}
      </div>
      <div styleName="item">
        <span>Text: </span>
        <Text
          value={text}
          isAuth={isAuth}
          onDoubleClick={onDoubleClickText}
          id={id}
        />
      </div>
    </div>
  </div>
);

Item.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.number,
  email: PropTypes.string,
  status: PropTypes.number,
  onDoubleClickText: PropTypes.func,
  isAuth: PropTypes.bool,
};

export default CSSModules(Item, styles);
