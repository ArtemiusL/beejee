import {
  FETCH_TASKS,
  SET_TASKS,
  CHANGE_PAGE,
  CREATE_TASK,
  EDIT_TASK,
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

export const createTask = payload => ({
  type: CREATE_TASK,
  payload,
});

export const editTask = payload => ({
  type: EDIT_TASK,
  payload,
});
