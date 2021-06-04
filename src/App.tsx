import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Test from './pages/test';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/test">Testコンポーネント</Link>
        </li>
        <li>
          <Link to="/app">Appコンポーネント</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/app">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </header>
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
