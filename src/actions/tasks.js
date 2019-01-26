import { FETCH_TASKS, SET_TASKS } from './constants/tasks';

export const fetchTasks = () => ({
  type: FETCH_TASKS,
});

export const setTasks = (payload) => {
  console.log('пришло в экшн', payload);
  return ({
    type: SET_TASKS,
    payload,
  });
};

