import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import { PhotoGrid } from '../components/PhotoGrid';

export class Photos extends Component {
  static displayName = Photos.name;

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Photos</h1>
        <Vert height='3'></Vert>
        <PhotoGrid />
        <image src="https://i.imgur.com/S6wAJrj.png" ></image>
      </div>
    );
  }
}
