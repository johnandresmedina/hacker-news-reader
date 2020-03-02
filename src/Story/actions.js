import { createActions } from 'redux-actions';

import hackerNewsService from '../services/hackerNewsService';

export const { fetchStoryIdsRequest, fetchStoryIdsSuccess, fetchStoryIdsFailure } = createActions(
  'FETCH_STORY_IDS_REQUEST',
  'FETCH_STORY_IDS_SUCCESS',
  'FETCH_STORY_IDS_FAILURE',
);

export const { fetchStoriesRequest, fetchStoriesSuccess, fetchStoriesFailure } = createActions(
  'FETCH_STORIES_REQUEST',
  'FETCH_STORIES_SUCCESS',
  'FETCH_STORIES_FAILURE',
);

const fetchStoryIds = (payload = {}) => dispatch => {
  dispatch(fetchStoryIdsRequest());

  return hackerNewsService
    .getTopStoryIds()
    .then(storyIds => {
      dispatch(fetchStoryIdsSuccess({ storyIds }));
      dispatch(fetchStories({ storyIds, page: 0 }));
    })
    .catch(error => dispatch(fetchStoryIdsFailure({ error })));
};

const fetchStories = (payload = {}) => dispatch => {
  const { storyIds, page } = payload;

  dispatch(fetchStoriesRequest());

  return hackerNewsService
    .getStoriesByPage(storyIds, page)
    .then(stories => dispatch(fetchStoriesSuccess({ stories })))
    .catch(error => dispatch(fetchStoriesFailure({ error })));
};

export { fetchStoryIds, fetchStories };
