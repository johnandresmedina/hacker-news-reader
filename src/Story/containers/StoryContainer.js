import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';

import { fetchStoryIds, fetchStories } from '../actions';
import { storyIdsSelector, storiesSelector, hasMoreStoriesSelector } from '../selector';

import CustomSpinner from '../../common/spinner/CustomSpinner';
import Story from '../components/Story';

const StoryContainer = ({ fetchStories, fetchStoryIds, hasMoreStories, page, status, stories, storyIds }) => {
  useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      fetchStoryIds();
    }

    return () => {
      didCancel = true;
    };
  }, [fetchStoryIds]);

  return !_isEmpty(stories) ? (
    <Story
      fetchStories={fetchStories}
      hasMoreStories={hasMoreStories}
      page={page}
      status={status}
      stories={stories}
      storyIds={storyIds}
    />
  ) : (
    <CustomSpinner />
  );
};

StoryContainer.propTypes = {
  fetchStories: PropTypes.func.isRequired,
  fetchStoryIds: PropTypes.func.isRequired,
  hasMoreStories: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  stories: PropTypes.array.isRequired,
  storyIds: PropTypes.array.isRequired,
};

export default connect(
  state => ({
    hasMoreStories: hasMoreStoriesSelector(state),
    page: state.story.page,
    status: state.story.status,
    stories: storiesSelector(state),
    storyIds: storyIdsSelector(state),
  }),
  {
    fetchStoryIds,
    fetchStories,
  },
)(StoryContainer);
