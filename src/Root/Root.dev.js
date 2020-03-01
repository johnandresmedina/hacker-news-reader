import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import DevTools from '../DevTools/Devtools';
import Routes from '../Routes';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <>
        <Routes />
        <DevTools />
      </>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
