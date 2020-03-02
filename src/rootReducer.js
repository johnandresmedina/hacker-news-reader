import { combineReducers } from 'redux';

import StoryReducer from './Story/reducer';

const rootReducer = combineReducers({
  story: StoryReducer,
});

export default rootReducer;
