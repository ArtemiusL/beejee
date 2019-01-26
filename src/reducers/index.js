import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './tasks';
import common from './common';

const rootReducer = combineReducers({
  routing: routerReducer,
  tasks,
  common,
});

export default rootReducer;
