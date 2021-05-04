import React from 'react';
import './App.scss';
import Sidebar from '../src/components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' component={Gallery} />
        </Switch>
      </Router>
    </>
  );
}

export default App;