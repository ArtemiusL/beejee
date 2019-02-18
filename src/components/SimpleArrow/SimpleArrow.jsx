import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import modsClasses from '_utils/modsClasses';
import classnames from 'classnames';

import styles from './SimpleArrow.scss';

const SimpleArrow = ({
  className,
  theme,
  duration,
  size,
  tabletSize,
}) => {
  const classes = modsClasses(styles, {
    theme,
    duration,
    size,
    tabletSize,
  });
  return (
    <svg
      viewBox="0 0 22 40"
      styleName="root"
      className={classnames(className, classes)}
    >
      <path
        styleName="path"
        d="M3.41.59A2,2,0,1,0,.59,3.41L17.17,20,.59,36.59a2,2,0,1,0,2.83,2.83l18-18a2,2,0,0,0,0-2.83Z"
      />
    </svg>
  );
};

SimpleArrow.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['white', 'black']),
  duration: PropTypes.oneOf(['bottom', 'top', 'left']),
  size: PropTypes.oneOf(['small', 'big']),
  tabletSize: PropTypes.oneOf(['normal']),
};

SimpleArrow.defaultProps = {
  theme: 'white',
};

export default CSSModules(SimpleArrow, styles);
