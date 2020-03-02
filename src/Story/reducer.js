import { handleActions } from 'redux-actions';

import {
  fetchStoryIdsRequest,
  fetchStoryIdsSuccess,
  fetchStoryIdsFailure,
  fetchStoriesRequest,
  fetchStoriesSuccess,
  fetchStoriesFailure,
} from './actions';

const initialState = {
  storyIds: [],
  stories: [],
  page: 0,
  status: '', //success, isFetching, isError,
  error: null,
};

const StoryReducer = handleActions(
  {
    [fetchStoryIdsRequest]: state => ({
      ...state,
      status: 'isFetching',
      error: null,
    }),
    [fetchStoryIdsSuccess]: (state, { payload }) => ({
      ...state,
      status: 'success',
      storyIds: payload.storyIds,
      error: null,
    }),
    [fetchStoryIdsFailure]: (state, { payload }) => ({
      ...state,
      status: 'isError',
      error: payload.error,
    }),
    [fetchStoriesRequest]: state => ({
      ...state,
      status: 'isFetching',
      error: null,
    }),
    [fetchStoriesSuccess]: (state, { payload }) => ({
      ...state,
      status: 'success',
      stories: [...state.stories, ...payload.stories],
      page: state.page + 1,
      error: null,
    }),
    [fetchStoriesFailure]: (state, { payload }) => ({
      ...state,
      status: 'isError',
      error: payload.error,
    }),
  },
  initialState,
);

export default StoryReducer;
