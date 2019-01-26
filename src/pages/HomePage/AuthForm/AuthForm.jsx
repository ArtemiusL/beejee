/* eslint-disable */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import authProcess from '_utils/authProcess';
import withAuth from '_hocs/withAuth';

import styles from './AuthForm.scss';

@withAuth
@CSSModules(styles, { allowMultiple: true })
class AuthForm extends PureComponent {
  handleSubmit = (evt) => {
    evt.preventDefault();

    const formValues = evt.target.querySelectorAll('input');
    const { authUser, authPass } = this.getFormObjectFromArray(formValues);
    if (authProcess(authUser, authPass)) {
      this.props.authUser();
    }

  }

  getFormObjectFromArray = (array) => {
    const myObj = {};
    array.forEach((item) => {
      myObj[item.id] = item.value;
    })

    return myObj;
  }

  render() {
    const { className, isAuth } = this.props;

    return (
      <div className={className} styleName="root">
        {isAuth ? (
          <h2 styleName="title">
            You are logged in as administrator
          </h2>
        ) : (
          <Fragment>
            <h2 styleName="title">
              Sign in to be able to edit tasks
            </h2>
            <form
              styleName="form"
              onSubmit={this.handleSubmit}
            >
              <input
                styleName="input"
                type="text"
                id="authUser"
                placeholder="Username"
                required
              />
              <input
                styleName="input"
                type="password"
                id="authPass"
                placeholder="Password"
                required
              />
              <button styleName="btn" type="submit">
                Enter
              </button>
            </form>
          </Fragment>
        )}
      </div>
    );
  }
}

AuthForm.propTypes = {
  className: PropTypes.string,
};


export default AuthForm;
