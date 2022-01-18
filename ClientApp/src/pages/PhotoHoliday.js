import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import { Link } from 'react-router-dom';
import { PhotoGrid, renderPhotoGrid } from '../components/PhotoGrid';

export class PhotoHoliday extends Component {
  static displayName = PhotoHoliday.name;

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
      ? <p><em>Loading...</em></p>
      :
      <div>
        <Vert height='3'></Vert> 
        <h1>{this.state.photoData.name}</h1>
        <Link to='/photos'>&#60;- Return</Link>
        <Vert height='2'></Vert>
        <PhotoGrid photos={this.state.photoData.photos} />
        <Vert height='20'></Vert>
      </div>
    );
  }
}
