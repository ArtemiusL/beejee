import { SWITCH_VIEWPORT, AUTH } from '_actionConstants/common';
import { DESKTOP, IS_AUTH } from '_constants';

import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const isAuth = cookies.get(IS_AUTH) === 'true';

const defaultState = {
  viewport: DESKTOP,
  isAuth: false,
};

let initialState;

if (isAuth) {
  initialState = {
    ...defaultState,
    isAuth,
  };
} else {
  cookies.set(IS_AUTH, false);
  initialState = defaultState;
}

const common = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SWITCH_VIEWPORT:
      return { ...state, ...payload };

    case AUTH:
      cookies.set(IS_AUTH, true);

      return {
        ...state,
        isAuth: true,
      };

    default:
      return state;
  }
};

export default common;
