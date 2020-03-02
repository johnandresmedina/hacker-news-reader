import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';

import { fetchStoryIds } from '../actions';

import CustomSpinner from '../../common/spinner/CustomSpinner';
import Story from '../components/Story';

const StoryContainer = ({ fetchStoryIds, stories }) => {
  useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      fetchStoryIds();
    }

    return () => {
      didCancel = true;
    };
  }, [fetchStoryIds]);

  return !_isEmpty(stories) ? <Story stories={stories} /> : <CustomSpinner />;
};

export default connect(
  state => ({
    stories: state.story.stories,
    page: state.story.page,
    storyIds: state.story.storyIds,
    status: state.story.status,
  }),
  {
    fetchStoryIds,
  },
)(StoryContainer);
