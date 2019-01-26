import { createSelector } from 'reselect';
import rootSelector from './root';

export const commonSelector = createSelector(
  rootSelector,
  ({ common }) => common,
);

export const isAuthSelector = createSelector(
  commonSelector,
  ({ isAuth }) => isAuth,
);
