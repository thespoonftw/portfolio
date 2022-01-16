import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Albums extends Component {
  static displayName = Albums.name;

  constructor(props) {
    super(props);
    this.state = { albumData: [], loading: true };
  }

  componentDidMount() {
    this.getAllAlbums();
  }

  async getAllAlbums() {
    const response = await fetch('api/album');
    const data = await response.json();
    this.setState({ albumData: data, loading: false });
  }

  renderList(albumData) {

    var style = { fontSize: "20px" };
    console.log(albumData);

    return (
      <ul>
        {albumData.map(album => 
          <li key={album.id}><Link to={"/photos/" + album.id} style={style} >({album.year}) {album.name}</Link></li>
        )}        
      </ul>      
    );
  }

  render () {
    
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderList(this.state.albumData);

    return (
      <div>
        <h3>Albums</h3>
        {contents}
      </div>
    );
  }
}
