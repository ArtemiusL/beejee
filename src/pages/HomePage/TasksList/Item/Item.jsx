/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Text from './Text';
import Checkbox from './Checkbox';

import styles from './Item.scss';

const Item = ({
  className,
  children,
  text,
  username,
  email,
  status,
  onDoubleClickText,
  id,
}) => {
  return (
    <div className={className} styleName="root">
      <div styleName="left">
        <Checkbox
          status={status}
          onDoubleClick={onDoubleClickText}
          id={id}
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
            onDoubleClick={onDoubleClickText}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  onDoubleClickText: PropTypes.func,
};

export default CSSModules(Item, styles);
