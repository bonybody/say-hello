import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index';
import classes from './App.module.scss';

const App: React.FC = () => (
  <Router>
    <div className={classes.layout}>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </div>
  </Router>
);

export default App;
