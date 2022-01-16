import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Layout';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Home } from './pages/Home';
import { Art } from './pages/Art';
import { Travel } from './pages/Travel';
import { Photos } from './pages/Photos';
import { Career } from './pages/Career';
import { Skills } from './pages/Skills';
import { Games } from './pages/Games';
import { Album } from './pages/Album';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Career} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/art' component={Art} />
        <Route path='/travel' component={Travel} />
        <Route exact path='/photos' component={Photos} />
        <Route exact path='/photos/:id' component={Album} />
        <Route path='/career' component={Career} />
        <Route path='/skills' component={Skills} />
        <Route path='/games' component={Games} />
      </Layout>
    );
  }
}
