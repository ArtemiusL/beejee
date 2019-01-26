/* eslint-disable */
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';

import withTasks from '_hocs/withTasks';

import styles from './HomePage.scss';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <div styleName="root">
      Hello world!
    </div>
  </Fragment>
);

export default withTasks(CSSModules(HomePage, styles));
