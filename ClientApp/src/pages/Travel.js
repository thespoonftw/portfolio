import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import { WorkInProgress } from '../components/WorkInProgress';
import { Imgur } from '../components/Imgur';
import { TravelMap } from '../components/TravelMap';

export class Travel extends Component {
  static displayName = Travel.name;

  constructor(props) {
    super(props);
    this.state = { locationData: [] };
  }

  componentDidMount() {
    this.getLocationData();
  }
  
  async getLocationData() {
    const id = this.props.match.params.id;
    const response = await fetch('api/locations');
    const data = await response.json();
    this.setState({ locationData: data });
  }

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Travel</h1>
        <Vert height='3'></Vert>
        <div className="container">
            <div className="row">
                <TravelMap url="https://cdn.discordapp.com/attachments/933061913254985818/933061974105915432/map1.png" locationData={this.state.locationData} map={1} />
                <TravelMap url="https://cdn.discordapp.com/attachments/933061913254985818/933061992518922280/map2.png" locationData={this.state.locationData} map={2} />
            </div>
            <br/><div className="row">
                <TravelMap url="https://cdn.discordapp.com/attachments/933061913254985818/933062042179481720/map4.png" locationData={this.state.locationData} map={3} />
                <TravelMap url="https://cdn.discordapp.com/attachments/933061913254985818/933062058356920371/map3.png" locationData={this.state.locationData} map={4} />
            </div>
        </div>
        <Vert height='3'></Vert>
      </div>
    );
  }
}
