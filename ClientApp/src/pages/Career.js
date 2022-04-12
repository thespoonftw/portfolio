import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import { Tag } from '../components/Tag';
import '../Common.css';
import { Youtube } from '../components/Youtube';
import { Imgur } from '../components/Imgur';

export class Career extends Component {
  static displayName = Career.name;

  render() {
    return (
      <div>
        <Vert height='3'></Vert>
        <h1>Career</h1>
        <Vert height='3'></Vert>
		
		<h3>Senior Software Engineer at Cron AI (2022 - Present)</h3>
		<p>
			Senior developer for an upcoming web-based LiDAR visualiser at a tech start up.
			<br></br>
			<Tag>React</Tag> <Tag>AWS</Tag> <Tag>C#</Tag> <Tag>Javascript</Tag> <Tag>WebAssembly</Tag> <Tag>Startup</Tag> <Tag>Gitlab</Tag>
        
		</p>
		<a href ="https://cronai.ai/" target="_blank" rel="noreferrer">https://cronai.ai/</a>
		<Vert height='3'></Vert>

        <h3>Software Engineer at Pennant International Plc (2021 - 2022)</h3>
        <p>
          Lead Unity developer for a range of technical training applications used in the Defense and Transport sectors.
          <br></br>
          <Tag>VR</Tag> <Tag>C#</Tag> <Tag>Unity</Tag> <Tag>SQL Server</Tag> <Tag>C++</Tag> <Tag>Github</Tag>
        </p>
        <p>Main Projects:</p>
        <ul>
          <li>NX Panel Simulator - A simulated NX (entry-exit) panel. To be used by Network Rail for train signaller training during a range of emergency scenarios.</li>
          <li>Defense Vehicle Simulator - A confidential vehicle training simulator, used for fault training and familiarization for a world leading defense company.</li>
          <li>Virtual Parachute Simulator - Developing new environments for the company's VR parachute simulator and regular visits to Brize Norton airbase for product support.</li>
        </ul>        
        <a href ="https://pennantplc.co.uk/" target="_blank" rel="noreferrer">https://pennantplc.co.uk/</a>

        <div className="container">
          <div className="row">
            <Youtube src="phvJk5VBtKE"></Youtube>
            <Youtube src="o-Yhdl0FvmQ"></Youtube>
          </div>
        </div>
        <Vert height='3'></Vert>

        <h3>Software Engineer at 4 Roads Ltd (2020 - 2021)</h3>
        <p>
          Remote full-stack web developer for a digital agency that provides web products to a wide range of customers.
          <br></br>
          <Tag>React</Tag> <Tag>MySQL</Tag> <Tag>C#</Tag> <Tag>Javascript</Tag> <Tag>ThreeJS</Tag> <Tag>Azure</Tag> <Tag>Agile</Tag> <Tag>CSS</Tag> <Tag>HTML</Tag> <Tag>Github</Tag>
        </p>
        <p>Main projects: </p>
        <ul>
          <li>Social Stack - Developing new components for the company's open source react library for modular creation of web products.</li>
          <li>Immersive Event Platform - A virtual conferencing space which uses photospheres, live-streams and video chats to create an immersive experience as a substitute for real-world events during the coronavirus pandemic and beyond.</li>
          <li>Bridgestone World [<a href="https://www.futureofmobility.bridgestone/us/en/home" target="_blank" rel="noreferrer">link</a>] - An infographic website created for CES 2021 (Computer Electronics Show), featuring an animated 3D city created using ThreeJS.</li>
        </ul>
        <a href ="https://www.4-roads.com/" target="_blank" rel="noreferrer">https://www.4-roads.com/</a>

        <div className="container">
          <div className="row">
            <Youtube src="IFeNo46ihNk"></Youtube>
            <Imgur url="https://i.imgur.com/mP6Bp1F.png"></Imgur>
          </div>
        </div>
        <Vert height='3'></Vert>

        <h3>Analyst Developer at Graffica Ltd (2016 - 2020)</h3>
        <p>
          Graduate developer working on a Rail and Air Traffic applications for Network Rail and Eurocontrol in Java and Unity.
          <br></br>
          <Tag>Java</Tag> <Tag>Unity</Tag> <Tag>C#</Tag> <Tag>Blender</Tag> <Tag>Jenkins</Tag> <Tag>CI/CD</Tag> <Tag>SVN</Tag>
        </p>
        <p>Main projects: </p>
        <ul>
          <li>ITWP - An Air Traffic Simulator built with Java. Used by Eurocontrol for training and research of airport scenarios. Occassional on-site trips to test centre to Paris to provide support.</li>
          <li>Tower3D - 3D View for ITWP build using C# and Unity, used to help visually verify aircraft behaviour. Also had the opportunity to work in Blender to create new 3D models for airport terminals and aircraft.</li>
          <li>Hermes3D - Prototype Rail Simulator for cab driver training, making use of OpenStreetMap data to procedurally generate a 3D world.</li>
        </ul>
        <a href ="https://www.graffica.co.uk/" target="_blank" rel="noreferrer">https://www.graffica.co.uk/</a>
        
        <div className="container">
          <div className="row">
            <Youtube src="X1H-VDZLZIo"></Youtube>
            <Youtube src="5rwggTkVS58"></Youtube>
          </div>
        </div>
        <div className="container">
          <br /><div className="row">
            <Imgur url="https://i.imgur.com/uSj8UjI.jpg"></Imgur>
            <Imgur url="https://i.imgur.com/DJNxLle.png"></Imgur>
            <Imgur url="https://i.imgur.com/hb0Z7kr.jpg"></Imgur>
          </div>
        </div>
        <div className="container">
          <br /><div className="row">
            <Imgur url="https://i.imgur.com/qLgTCri.jpg"></Imgur>
            <Imgur url="https://i.imgur.com/yHlvEkX.jpg"></Imgur>
            <Imgur url="https://i.imgur.com/FS8VUO1.png"></Imgur>
          </div>
        </div>
        <Vert height='3'></Vert>

        <h3>Statistician at AlphaPlus (Summer 2020)</h3>
        <p>
          Contract work for an exam board consultancy. Helping to verify statistical results of algorithmically generated student grades during the coronavirus pandemic.
          <br></br><Tag>R</Tag> <Tag>Excel</Tag> <Tag>Statistics</Tag>
        </p>
        <Vert height='3'></Vert>

        <h3>Question Author at University of Birmingham (Summer 2015)</h3>        
        <p>
          Summer job at the University of Birmingham, authoring questions for MapleTA, an automatic marking scheme for university-level Physics and Mathematics.
          <br></br><Tag>MapleTA</Tag> <Tag>Physics</Tag> <Tag>Mathematics</Tag>
        </p>
        <Vert height='3'></Vert>

        <h3>Internship at Red Sky Blue Water (Summer 2014)</h3>
        <p>
          A 4-week placement in a Microsoft software development company developing Windows phone apps.
          <br></br><Tag>C#</Tag> <Tag>Mobile</Tag></p>
        <Vert height='3'></Vert>

        <h3>Sales at John Wright Turkeys (Christmas)</h3>
        <p>
          Helping my family sell turkeys every year at Christmas on 23rd December - a lovely family tradition.
          <br></br><Tag>Sales</Tag> <Tag>Poultry</Tag> <Tag>Christmas</Tag>
        </p>
        <p>Order your christmas turkey now and check out my brother's adorable turkey dog.</p>
        <p><a href="http://www.johnwrightturkeys.co.uk/" target="_blank" rel="noreferrer">http://www.johnwrightturkeys.co.uk/</a></p>
        <div className="container">
          <div className="row">
            <Youtube src="J7ZA6QiBV9g"></Youtube>
            <div className="col-sm"></div>
          </div>
        </div>
        <Vert height='3'></Vert>

      </div>
    );
  }
}
