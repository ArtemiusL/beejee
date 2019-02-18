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
}) => (
  <span
    className={className}
    styleName={classnames('root', { isActive })}
    onClick={onClick}
  >
    {children}
  </span>
);

Item.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  isActive: PropTypes.bool,
};

export default CSSModules(Item, styles, { allowMultiple: true });
