import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './vendor/reset.css';
import './App.css';
import Main from './main/main';
import Three from './three/boilerplate';
import Hello from './hello/hello';


function App() {
  return (
    <Router>
      <Three />
      <Switch>
        <Route path="/">
          <Main className="Content"/>
        </Route>
        <Route path="hello">
          <Hello />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
