import React, { Component } from 'react';
import { Vert } from './Vert';
import './Common.css';

export class Games extends Component {
  static displayName = Games.name;

  render() {
    return (
      <div>
        <Vert height='3'></Vert>
        <h1>Games</h1>

        <Vert height='3'></Vert>
        <h3>2 Player Campaign for Warcraft 3</h3>
        <br></br>
        <p>Download link: <a href="https://www.hiveworkshop.com/threads/2-player-campaign-2020-reforged-classic.322390/" target="_blank">https://www.hiveworkshop.com/threads/2-player-campaign-2020-reforged-classic.322390/</a></p>
        <p>Patreon: <a href="https://www.patreon.com/2playercampaign">https://www.patreon.com/2playercampaign</a></p>
        <p>Discord: <a href="https://discord.gg/ZSmzvyW">https://discord.gg/ZSmzvyW</a></p>
        <Vert height='1'></Vert>

        <center><iframe width="640" height="360" src="https://www.youtube.com/embed/TevSLr5BKnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

        <div class="container">
          <br /><div class="row">
            <div class="col-sm"><img src="https://i.imgur.com/u7IO1qI.png" onclick="openModal(this, 1)" class="instagramImage" ></img></div>
            <div class="col-sm"><img src="https://i.imgur.com/S7zxp14.jpg" onclick="openModal(this, 1)" class="instagramImage" ></img></div>
            <div class="col-sm"><img src="https://i.imgur.com/mrIFldk.png" onclick="openModal(this, 1)" class="instagramImage" ></img></div>
          </div>
        </div>

        <Vert height='3'></Vert>

      </div>
    );
  }
}
