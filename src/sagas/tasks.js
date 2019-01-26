import { takeLatest, all, put, call, select } from 'redux-saga/effects';

import { getTasks } from '_api/tasks';

import { tasksSelector } from '_selectors/tasks';

import { FETCH_TASKS } from '_actionConstants/tasks';

import { setTasks } from '_actions/tasks';

export function* fetchTasks() {
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

export default function* () {
  yield all([
    takeLatest(FETCH_TASKS, fetchTasks),
  ]);
}
