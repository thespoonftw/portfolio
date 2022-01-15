import React, { Component } from 'react';
import { Imgur } from './Imgur'

export class PhotoGrid extends Component {
  static displayName = PhotoGrid.name;

  constructor(props) {
    super(props);
    this.state = { photoData: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  renderGrid(photoData) {

    var columns = [0, 1, 2, 3];
    var numberOfRows = Math.ceil(photoData.length / 4);
    var rows = Array.from(Array(numberOfRows).keys());

    return (
      <div class="container">
        {rows.map(y => 
          <div className="row">
            {columns.map(x =>
              x + (y * 4) < photoData.length ?
                <Imgur code={photoData[x + (y * 4)].url}></Imgur>
                :
                <div className="col-md"></div>
            )}
          </div>          
        )}        
      </div>      
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderGrid(this.state.photoData);

    return (
      <div>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('api/photo');
    const data = await response.json();
    this.setState({ photoData: data, loading: false });
  }
}
