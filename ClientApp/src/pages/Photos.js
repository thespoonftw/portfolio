import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import { Link } from 'react-router-dom';
import { Loading } from '../components/Loading';

export class Photos extends Component {
  static displayName = Photos.name;

  constructor(props) {
    super(props);
    this.state = { locationsData: [], loading: true };
  }

  componentDidMount() {
    this.getAllLocations();
  }

  async getAllLocations() {
    const response = await fetch('api/holidayLocations');
    const data = await response.json();
    this.setState({ locationsData: data, loading: false });
  }

  renderYears() {
    const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]
    return (
      <ul>
        {years.map(year => 
          <li key={year}><Link to={"/year/" + year} style={{fontSize: "20px"}} >{year}</Link></li>
        )}        
      </ul>      
    );
  }

  renderHolidays(locationsData) {
    return (
      <ul>
        {locationsData.map(loc => 
          <li key={loc.id}><Link to={"/holiday/" + loc.id} style={{fontSize: "20px"}} >{loc.year} - {loc.name}</Link></li>
        )}        
      </ul>      
    );
  }

  render () {

    let holidays = this.state.loading
    ? <Loading/>
    : this.renderHolidays(this.state.locationsData);

    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Holidays</h1>
        {holidays}
        <Vert height='3'></Vert>
        <h1>Weekends</h1>
        {this.renderYears()}
        <Vert height='20'></Vert>
      </div>
    );
  }
}
