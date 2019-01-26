import {
  AUTH,
  SWITCH_VIEWPORT,
} from './constants/common';

export const switchViewport = viewport => ({
  type: SWITCH_VIEWPORT,
  payload: { viewport },
});

export const authUser = () => ({
  type: AUTH,
});
