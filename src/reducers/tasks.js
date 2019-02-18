import {
  SET_TASKS,
  CHANGE_PAGE,
  CHANGE_SORT_FIELD,
  CHANGE_SORT_DIRECTION,
} from '_actionConstants/tasks';
import { SortDirections } from '_constants';

const initialState = {
  items: [],
  sortField: '',
  page: 1,
  sortDirection: SortDirections.asc,
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

    case CHANGE_SORT_FIELD:
      return {
        ...state,
        sortField: payload,
      };

    case CHANGE_SORT_DIRECTION:
      return {
        ...state,
        sortDirection: payload,
      };


    default:
      return state;
  }
};

export default tasks;
