import React, { Component } from 'react';
import { Vert } from './Vert';
import './Common.css';

export class Career extends Component {
  static displayName = Career.name;

  render() {
    return (
      <div>
        <Vert height='3'></Vert>
        <h1>Career</h1>
        <Vert height='3'></Vert>

        <h3>Software Engineer at Pennant International Plc (2021-Present)</h3>
        <p>Tags: C#, Unity, SqlServer, C++, Simulation, Project Planning, Mentoring</p>
        <br></br>
        <p>C# and Unity Developer working to create a range of technical training environments in the Defense and Transport sectors.</p>
        <p>Main projects worked on are the Virtual Loadmaster, a VR environment for training of malfunction identification and spatial learning and the Virtual Parachute Training Simulator.</p>
        <Vert height='1'></Vert>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <iframe width="512" height="288" src="https://www.youtube.com/embed/phvJk5VBtKE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-sm">
              <iframe width="512" height="288" src="https://www.youtube.com/embed/o-Yhdl0FvmQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <Vert height='3'></Vert>

        <h3>Full Stack Developer at 4 Roads Ltd (2020 - 2021)</h3>
        <p>Tags: Javascript, React, CSS, HTML, C#, MySQL, ThreeJS, Azure, Agile</p>
        <br></br>
        <p>Web developer with 3D expertise at 4Roads Ltd, a digital agency that provides a wide range of web products. Worked on two large projects.</p>
        <p>The Bridgestone World project, to be presented at CES (Computer Electronics Show), an informational site featuring an animated 3D city, assembled in Unity and exported to WebGL.</p>
        <p>The Immersive Project, a virtual conferencing tool using photospheres, live streams and video chats to create an immersive experience as a substitute for real-world events.</p>
        <Vert height='1'></Vert>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <iframe width="512" height="288" src="https://www.youtube.com/embed/IFeNo46ihNk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-sm">
              <a href="https://www.futureofmobility.bridgestone/us/en/home" target="_blank">
                <img width="512" height="288" src="https://i.imgur.com/mP6Bp1F.png"></img>
              </a>
            </div>
          </div>
        </div>
        <Vert height='3'></Vert>

        <h3>Analyst Developer at Graffica Ltd (2016 - 2020)</h3>
        <p>Tags: Java, Unity, C#, 3D Modelling, Simulation, Jenkins, CI/CD</p>
        <br></br>
        <p>Primary developer for an Air Traffic Simulator called Tower3D, using Java, C# and Unity. Worked with Eurocontrol to evaluate client needs and deliverables. On-site trips to test centre in France to provide support.</p>
        <p>Developed prototype Hermes3D using same technologies. Involved developing a procedurally generated rail network using OpenStreet map data.</p>
        <Vert height='1'></Vert>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <iframe width="512" height="288" src="https://www.youtube.com/embed/X1H-VDZLZIo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-sm">
              <iframe width="512" height="288" src="https://www.youtube.com/embed/5rwggTkVS58" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="container">
          <br /><div class="row">
            <div class="col-sm"><img src="https://i.imgur.com/uSj8UjI.jpg" onclick="openModal(this, 1)" class="instagramImage" ></img></div>
            <div class="col-sm"><img src="https://i.imgur.com/DJNxLle.png" onclick="openModal(this, 1)" class="instagramImage" ></img></div>
            <div class="col-sm"><img src="https://i.imgur.com/hb0Z7kr.jpg" onclick="openModal(this, 1)" class="instagramImage" ></img></div>
          </div>
        </div>
        <div class="container">
          <br /><div class="row">
            <div class="col-sm"><img src="https://i.imgur.com/qLgTCri.jpg" onclick="openModal(this, 1)" class="instagramImage" ></img></div>
            <div class="col-sm"><img src="https://i.imgur.com/yHlvEkX.jpg" onclick="openModal(this, 1)" class="instagramImage" ></img></div>
            <div class="col-sm"><img src="https://i.imgur.com/FS8VUO1.png" onclick="openModal(this, 1)" class="instagramImage" ></img></div>
          </div>
        </div>
        <Vert height='3'></Vert>

        <h3>Statistician at AlphaPlus (Summer 2020)</h3>
        <p>Tags: Excel, R, Statistics</p>
        <p>Temporary work for a exam board consultancy. Helping to verify statistical results of algorithmically generated student grades during the coronavirus pandemic.</p>
        <Vert height='3'></Vert>

        <h3>MapleTA Question Authorer at University of Birmingham (Summer 2015)</h3>
        <p>Tags: MapleTA, Physics, Mathematics</p>
        <p>Summer job at the University of Birmingham, authoring questions for an automatic marking scheme for university-level Physics and Mathematics.</p>
        <Vert height='3'></Vert>

        <h3>Internship at Red Sky Blue Water (Summer 2014)</h3>
        <p>Tags: C#, Mobile Development</p>
        <p>A 4-week placement in a Microsoft software development company developing Windows phone apps. </p>
        <Vert height='3'></Vert>

        <h3>Turkey Sales at John Wright Turkeys (Christmas)</h3>
        <p>Tags: Sales, Poultry, Family, Tradition, Family, Christmas</p>
        <p>I help my family sell turkeys every year at Christmas on 23rd December. Its a lovely family tradition.</p>
        <p>Support my family and order your turkey now at: <a href="http://www.johnwrightturkeys.co.uk/" target="_blank">http://www.johnwrightturkeys.co.uk/</a></p>
        <Vert height='3'></Vert>

      </div>
    );
  }
}
