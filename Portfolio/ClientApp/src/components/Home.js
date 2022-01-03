import React, { Component } from 'react';
import { Vert } from './Vert';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Blog</h1>
        <p>Page work in progress. Try another page.</p>
      </div>
    );
  }
}
