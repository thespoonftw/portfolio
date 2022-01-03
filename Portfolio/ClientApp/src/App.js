import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Art } from './components/Art';
import { Travel } from './components/Travel';
import { Photos } from './components/Photos';
import { Career } from './components/Career';
import { Skills } from './components/Skills';
import { Games } from './components/Games';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/art' component={Art} />
        <Route path='/travel' component={Travel} />
        <Route path='/photos' component={Photos} />
        <Route path='/career' component={Career} />
        <Route path='/skills' component={Skills} />
        <Route path='/games' component={Games} />
      </Layout>
    );
  }
}
