/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import classnames from 'classnames';

import styles from './Item.scss';

const Item = ({
  className,
  onClick,
  children,
  isActive,
}) => {
  return (
    <a
      className={className}
      styleName={classnames('root', { isActive })}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

Item.propTypes = {
  value: PropTypes.number,
};

export default CSSModules(Item, styles, { allowMultiple: true } );
