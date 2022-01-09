import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import '../Common.css';
import { Youtube } from '../components/Youtube';
import { Imgur } from '../components/Imgur';

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
        <p>A popular mod of the original Warcraft 3 campaign featuring a newly designed companion Hero to accompany the main player for each chapter.
        Also features new higher difficulties, bonus chapters and hidden artifacts to enhance replayability.
        Most downloaded mod on Hiveworkshop.com; the largest ongoing community for Warcraft 3.</p>

        <p>Download link: <a href="https://www.hiveworkshop.com/threads/2-player-campaign-2020-reforged-classic.322390/" target="_blank" rel="noreferrer">https://www.hiveworkshop.com/threads/2-player-campaign-2020-reforged-classic.322390/</a></p>
        <p>Patreon: <a href="https://www.patreon.com/2playercampaign" target="_blank" rel="noreferrer">https://www.patreon.com/2playercampaign</a></p>
        <p>Discord: <a href="https://discord.gg/ZSmzvyW" target="_blank" rel="noreferrer">https://discord.gg/ZSmzvyW</a></p>
        <Vert height='1'></Vert>

        <center><Youtube src="TevSLr5BKnU"></Youtube></center>

        <div className="container">
          <br /><div className="row">
            <Imgur code="u7IO1qI.png"></Imgur>
            <Imgur code="S7zxp14.jpg"></Imgur>
            <Imgur code="mrIFldk.png"></Imgur>
          </div>
        </div>

        <Vert height='3'></Vert>

      </div>
    );
  }
}
