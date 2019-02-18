import {
  FETCH_TASKS,
  SET_TASKS,
  CHANGE_PAGE,
  CREATE_TASK,
  EDIT_TASK,
  CHANGE_SORT_FIELD,
  CHANGE_SORT_DIRECTION,
} from './constants/tasks';

export const fetchTasks = () => ({
  type: FETCH_TASKS,
});

export const setTasks = payload => ({
  type: SET_TASKS,
  payload,
});

export const changePage = payload => ({
  type: CHANGE_PAGE,
  payload,
});

export const changeSortField = payload => ({
  type: CHANGE_SORT_FIELD,
  payload,
});

export const changeSortDirection = payload => ({
  type: CHANGE_SORT_DIRECTION,
  payload,
});

export const createTask = payload => ({
  type: CREATE_TASK,
  payload,
});

export const editTask = payload => ({
  type: EDIT_TASK,
  payload,
});
