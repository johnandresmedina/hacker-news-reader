import './Story.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ListGroup } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

import CustomSpinner from '../../common/spinner/CustomSpinner';
import Item from './Item';

const Story = ({ fetchStories, hasMoreStories, page, status, stories, storyIds }) => {
  const fetchStoriesNext = () => {
    if (status !== 'isFetching') {
      fetchStories({ storyIds, page });
    }
  };

  return (
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <div className='story'>
          <InfiniteScroll
            dataLength={stories.length}
            next={fetchStoriesNext}
            hasMore={hasMoreStories}
            loader={<CustomSpinner />}
            style={{ height: '100%', overflow: 'visible' }}>
            <ListGroup>
              {stories.map(story => (
                <Item key={story.id} {...story} />
              ))}
            </ListGroup>
          </InfiniteScroll>
        </div>
      </Col>
    </Row>
  );
};

Story.propTypes = {
  fetchStories: PropTypes.func.isRequired,
  hasMoreStories: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  stories: PropTypes.array.isRequired,
  storyIds: PropTypes.array.isRequired,
};

export default Story;
