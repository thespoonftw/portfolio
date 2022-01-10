import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import { WorkInProgress } from '../components/WorkInProgress';

export class Travel extends Component {
  static displayName = Travel.name;

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Travel</h1>
        <Vert height='3'></Vert>
        <WorkInProgress />
      </div>
    );
  }
}
