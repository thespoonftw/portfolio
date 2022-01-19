import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import { Link } from 'react-router-dom';
import { PhotoGrid } from '../components/PhotoGrid';
import { Loading } from '../components/Loading';

export class PhotoLocation extends Component {
  static displayName = Location.name;

  constructor(props) {
    super(props);
    this.state = { photoData: [], loading: true };
  }

  componentDidMount() {
    this.getAllPhotos();
  }
  
  async getAllPhotos() {
    const id = this.props.match.params.id;
    const response = await fetch('api/location/' + id);
    const data = await response.json();
    this.setState({ photoData: data, loading: false }); 
  }

  render () {
    return (
      this.state.loading 
      ? <Loading />
      :
      <div>
        <Vert height='3'></Vert> 
        <h1>{this.state.photoData.name}</h1>
        <Link to='/travel'>&#60;- Return</Link>
        <Vert height='2'></Vert>
        <PhotoGrid photos={this.state.photoData.photos} />
        <Vert height='20'></Vert>
      </div>
    );
  }
}
