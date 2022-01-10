import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import { WorkInProgress } from '../components/WorkInProgress';

export class Photos extends Component {
  static displayName = Photos.name;

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Photos</h1>
        <Vert height='3'></Vert>
        <WorkInProgress />
        <image src="https://i.imgur.com/S6wAJrj.png" ></image>
      </div>
    );
  }
}
