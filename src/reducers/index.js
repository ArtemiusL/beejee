import { combineReducers } from 'redux';

import tasks from './tasks';
import common from './common';

const rootReducer = combineReducers({
  tasks,
  common,
});

export default rootReducer;
