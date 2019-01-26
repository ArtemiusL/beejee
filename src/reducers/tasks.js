import { SET_TASKS, CHANGE_PAGE } from '_actionConstants/tasks';
import { sortDirections } from '_constants';

const initialState = {
  items: [],
  sortField: '',
  page: 1,
  sortDirection: sortDirections.asc,
  taskCount: 0,
};

const tasks = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TASKS:
      return {
        ...state,
        items: [
          ...payload.tasks,
        ],
        taskCount: Number(payload.total_task_count),
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
      };


    default:
      return state;
  }
};

export default tasks;
