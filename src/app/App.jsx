import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import delay from 'lodash/delay';

import checkWindows from '_utils/checkWindows';

import {
  MOBILE,
  TABLET,
  DESKTOP,
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from '_constants';

import { switchViewport } from '_actions/common';
import getViewport from '_utils/getViewport';
import HomePage from '_pages/HomePage';

import '_styles/styles.scss';


@connect(null, { onSwitchViewport: switchViewport })

class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    delay(this.handleResize, 200);

    const { onSwitchViewport } = this.props;

    const mediaQueryMobile = window.matchMedia(MOBILE_MEDIA_QUERY);
    const mediaQueryTablet = window.matchMedia(TABLET_MEDIA_QUERY);
    const currentViewport = getViewport(mediaQueryMobile, mediaQueryTablet);

    onSwitchViewport(currentViewport);

    mediaQueryMobile.addListener(({ matches }) => {
      onSwitchViewport(matches ? MOBILE : TABLET);
    });

    mediaQueryTablet.addListener(({ matches }) => {
      onSwitchViewport(matches ? TABLET : DESKTOP);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { innerHeight, innerWidth } = window;

    const widthScreen = checkWindows() ? document.body.clientWidth : innerWidth;

    document.body.style.setProperty('--page-height', `${innerHeight}px`);

    if (innerWidth >= innerHeight) {
      document.body.style.setProperty('--window-ratio', `${widthScreen / innerHeight}`);
    } else {
      document.body.style.setProperty('--window-ratio', `${innerHeight / widthScreen}`);
    }
  }

  render() {
    return (
      <Fragment>
        <HomePage />
      </Fragment>
    );
  }
}

App.propTypes = {
  onSwitchViewport: PropTypes.func,
};

export default hot(module)(App);
