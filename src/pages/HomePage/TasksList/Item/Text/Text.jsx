/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './Text.scss';

const Text = ({
  className,
  children,
  value,
}) => {
  return (
    <div className={className} styleName="root">
      {value}
    </div>
  );
};

Text.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Text, styles);
