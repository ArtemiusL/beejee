import { takeLatest, all, put, call, select } from 'redux-saga/effects';

import { getTasks, createTask } from '_api/tasks';

import { tasksSelector } from '_selectors/tasks';

import { FETCH_TASKS, CREATE_TASK } from '_actionConstants/tasks';

import { setTasks, fetchTasks } from '_actions/tasks';

export function* fetchTasksSaga() {
  try {
    const { page, sortField, sortDirection } = yield select(tasksSelector);

    const { data } = yield call(getTasks, page, sortField, sortDirection);

    if (data.status === 'ok') {
      yield put(setTasks(data.message));
    } else {
      console.log(data.status);
    }
  } catch (err) {
    console.log(err);
  }
}

export function* createTaskSaga({ payload }) {
  try {
    const { data } = yield call(createTask, payload);

    if (data.status === 'ok') {
      yield put(fetchTasks());
    } else {
      console.log(data.status);
    }
  } catch (err) {
    console.log(err);
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_TASKS, fetchTasksSaga),
    takeLatest(CREATE_TASK, createTaskSaga),
  ]);
}
