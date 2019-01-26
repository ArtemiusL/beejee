import { createSelector } from 'reselect';
import rootSelector from './root';

export const tasksSelector = createSelector(
  rootSelector,
  ({ tasks }) => tasks,
);

export const tasksItemsSelector = createSelector(
  tasksSelector,
  ({ items }) => items,
);
