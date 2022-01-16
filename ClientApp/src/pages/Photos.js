import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import { Albums } from '../components/Albums';

export class Photos extends Component {
  static displayName = Photos.name;

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Photos</h1>
        <Vert height='3'></Vert>
        <Albums />
        <Vert height='20'></Vert>
      </div>
    );
  }
}
