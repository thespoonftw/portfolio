import React, { Component } from 'react';
import { Vert } from '../components/Vert';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Blog!</h1>
        <Vert height='3'></Vert>
        
        <p>Page work in progress. Try another page.</p>
      </div>
    );
  }
}
