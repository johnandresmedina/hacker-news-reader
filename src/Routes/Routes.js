import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import Story from '../Story';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Story />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
