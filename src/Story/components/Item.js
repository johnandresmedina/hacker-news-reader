import './Item.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'timeago.js';
import { ListGroupItem, Badge } from 'reactstrap';

const getComments = kidsLength => {
  return kidsLength ? (
    <>
      Comments <Badge pill>{kidsLength}</Badge>
    </>
  ) : null;
};

const Item = ({ by, score, time, title, type, kids = [] }) => {
  return (
    <ListGroupItem>
      <div className='item'>
        <div>
          <span className='item__type'>{type}: </span>
          {title}, by {by}
        </div>
        <div>
          {score} Points, {format(new Date(time * 1000).toISOString())}, {getComments(kids.length)}
        </div>
      </div>
    </ListGroupItem>
  );
};

Item.propTypes = {
  by: PropTypes.string.isRequired,
  kids: PropTypes.array,
  score: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Item;
