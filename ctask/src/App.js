import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthLayout from './app/components/layout/auth_layout/index';
import MainLayout from './app/components/layout/main_layout/index';


import './App.css';

Component.prototype.sendRequest = (url, method, payload = undefined) => {
  return fetch('https://jogtracker.herokuapp.com/api' + url, {
    body: JSON.stringify(payload), 
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
      'Authorization': localStorage.getItem('Authorization')
    },
    method: method,
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  })
}

class App extends Component {
  
  render() {
    return (
      <Router>
        <Route exact path="/" component={AuthLayout} />
        <Route  path="/home" component={MainLayout} >
        </Route> 
      </Router>
    );
  }
}

export default App;