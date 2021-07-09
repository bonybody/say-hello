import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Test from './pages/test';
import Index from './pages/index';
import Header from './components/organisms/header/header';

const App: React.FC = () => (
  <Router>
    <Header />
    <div className="App">
      <ul>
        <li>
          <Link to="/test">Testコンポーネント</Link>
        </li>
        <li>
          <Link to="/">Indexコンポーネント</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;
