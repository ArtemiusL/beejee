/* eslint-disable */
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';
import TasksList from './TasksList';

import styles from './HomePage.scss';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <div styleName="root">
      <TasksList />
    </div>
  </Fragment>
);

export default CSSModules(HomePage, styles);
