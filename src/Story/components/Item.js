import './Item.scss';

import React from 'react';
import { ListGroupItem, Badge } from 'reactstrap';

const getComments = ({ length }) => {
  return length ? (
    <>
      Comments <Badge pill>{length}</Badge>
    </>
  ) : null;
};

const Item = ({ by, score, title, type, kids = [] }) => {
  return (
    <ListGroupItem>
      <div className='item'>
        <div>
          <span className='item__type'>{type}: </span>
          {title}, by {by}
        </div>
        <div>
          {score} Points, {getComments(kids)}
        </div>
      </div>
    </ListGroupItem>
  );
};

export default Item;
