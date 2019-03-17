import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AuthLayout from './app/components/auth_layout/index';
import MainLayout from './app/components/main_layout/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={AuthLayout} />
        <Route path="/home" component={MainLayout} />
      </Router>
    );
  }
}

export default App;