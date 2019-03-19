   
import React, { Component } from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import Home from '../../home/index';
import Menu from '../../menu/index';
import Info from '../../info/index';
import Form from '../../form/index';

class MainLayout extends Component {
  constructor({match}) {
    super();
    this.match = match;
  }
  render() {
  return (
    <div>
      <Menu/>
      <main>
        <Route exact path={`${this.match.url}/`} component={Home} />
        <Route path={`${this.match.url}/info`} component={Info} />
        <Route path={`${this.match.url}/create_new_resalt`} component={Form} />
      </main>
    </div>
  );
  }
}

export default MainLayout;

