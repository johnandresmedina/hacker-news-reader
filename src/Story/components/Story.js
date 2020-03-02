import './Story.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ListGroup } from 'reactstrap';

import Item from './Item';

const Story = ({ stories }) => {
  return (
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <div className='story'>
          <ListGroup>
            {stories.map(story => (
              <Item key={story.id} {...story} />
            ))}
          </ListGroup>
        </div>
      </Col>
    </Row>
  );
};

Story.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default Story;
