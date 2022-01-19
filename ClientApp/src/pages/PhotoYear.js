import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import { Link } from 'react-router-dom';
import { PhotoGrid } from '../components/PhotoGrid';
import { Loading } from '../components/Loading';

export class PhotoYear extends Component {
  static displayName = PhotoYear.name;

  constructor(props) {
    super(props);
    this.state = { photoData: [], loading: true };
  }

  componentDidMount() {
    this.getAllPhotos();
  }
  
  async getAllPhotos() {
    const id = this.props.match.params.id;
    const response = await fetch('api/year/' + id);
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
        <h1>{this.props.match.params.id}</h1>
        <Link to='/photos'>&#60;- Return</Link>
        <Vert height='2'></Vert>
        <PhotoGrid photos={this.state.photoData} />
        <Vert height='20'></Vert>
      </div>
    );
  }
}
