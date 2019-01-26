/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Text from './Text';

import styles from './Item.scss';

const Item = ({
  className,
  children,
  text,
  username,
  email,
  status,
}) => {
  return (
    <div className={className} styleName="root">
      <div styleName="left">
        <input type="checkbox" defaultChecked={Boolean(status)} />
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
          />
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Item, styles);
