import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TravelMap extends Component {
    static displayName = TravelMap.name;

    renderLinks() {
        return this.props.locationData.map(loc => 
            loc.map == this.props.map ?
            <Link key={loc.id} style={{position: "absolute", top: loc.y + "%", left: loc.x + "%", width: "8%" }} to={"/location/" + loc.id}>
                <img style={{width: "100%"}} src="https://cdn.discordapp.com/attachments/933061913254985818/933079643265843331/pin.png" />
            </Link>
            :
            <></>
        );
    }

    render() {
        return (
            <div className="col-md">
                <br></br>
                <div style={{ width: "100%", position: "relative" }}>
                    <img onClick={this.props.onClick} style={{ width: "100%" }} src={this.props.url} alt="a map"/>
                    {this.renderLinks()}
                </div>                
            </div>
        );
    }
}
