/* eslint-disable */
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';

import TasksList from './TasksList';
import TaskCreater from './TaskCreater';
import AuthForm from './AuthForm';

import styles from './HomePage.scss';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <div styleName="root">
      <TaskCreater />
      <div styleName="wrapper">
        <TasksList styleName="taskList" />
        <AuthForm styleName="authForm" />
      </div>
    </div>
  </Fragment>
);

export default CSSModules(HomePage, styles);
