import { RouterTransitionGroup } from '_components/ReactTransitionGroup';
import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PAGE_TRANSITION } from '_constants';

import { switchViewport } from '_actions/common';
import '_styles/styles.scss';


@connect(null, { onSwitchViewport: switchViewport })

class App extends Component {
  render() {
    const { route } = this.props;

    return (
      <Fragment>
        <RouterTransitionGroup routes={route.routes} timeout={PAGE_TRANSITION} />
        {/* <RemSize /> */}
      </Fragment>
    );
  }
}

App.propTypes = {
  route: PropTypes.object,
};

export default hot(module)(App);
