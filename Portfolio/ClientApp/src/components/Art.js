import React, { Component } from 'react';
import { Vert } from './Vert';
import './Common.css';

export class Art extends Component {
  static displayName = Art.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Vert height='3'></Vert> 

        <h1>Art</h1>        
        <Vert height='3'></Vert>  

        <h3>Watercolour</h3>            
        <div class="container">
            <div class="row">
                <div class="col-sm"><br/><img src="https://i.imgur.com/y4fmCh6.jpg" class="instagramImage" ></img></div>
                <div class="col-sm"><br/><img src="https://i.imgur.com/Toj5R7G.jpg" class="instagramImage" ></img></div>
            </div>
            <br/><div class="row">
                <div class="col-sm"><br/><img src="https://i.imgur.com/5W5Cfgq.png" class="instagramImage" ></img></div>
                <div class="col-sm"><br/><img src="https://i.imgur.com/NbbNRiz.png" class="instagramImage" ></img></div>
            </div>
            <br/><div class="row">
                <div class="col-sm"><br/><img src="https://i.imgur.com/o3C4Oeh.png" class="instagramImage" ></img></div>
                <div class="col-sm"><br/><img src="https://i.imgur.com/uYbQopM.png" class="instagramImage" ></img></div>
            </div>
        </div>
        <Vert height='3'></Vert>
        
        <h3>Ink Drawings</h3>    
        <div class="container">
            <div class="row">
                <div class="col-sm"><br/><img src="https://i.imgur.com/pBQC0zF.png" class="instagramImage" ></img></div>
                <div class="col-sm"><br/><img src="https://i.imgur.com/7n1SgOG.jpg" class="instagramImage" ></img></div>
            </div>
        </div>
        <Vert height='3'></Vert>

        <h3>Inktober Challenge 2018</h3>        
        <div class="container">
            <br/><div class="row">
                <div class="col-sm"><img src="https://i.imgur.com/oCB8l3L.png" class="instagramImage" ></img></div>
                <div class="col-sm"><img src="https://i.imgur.com/pOhu05n.jpg" class="instagramImage" ></img></div>
                <div class="col-sm"><img src="https://i.imgur.com/1TiL9DY.jpg" class="instagramImage" ></img></div>       
                <div class="col-sm"><img src="https://i.imgur.com/xuLrkd5.png" class="instagramImage" ></img></div>                    
            </div>
            <br/><div class="row">
                <div class="col-sm"><img src="https://i.imgur.com/joRlvok.jpg" class="instagramImage" ></img></div>
                <div class="col-sm"><img src="https://i.imgur.com/ePmDL2h.png" class="instagramImage" ></img></div>  
                <div class="col-sm"><img src="https://i.imgur.com/YCH5dbf.png" class="instagramImage" ></img></div>
                <div class="col-sm"><img src="https://i.imgur.com/hdySpa9.png" class="instagramImage" ></img></div>                    
            </div>
            <br/><div class="row">
                <div class="col-sm"><img src="https://i.imgur.com/mspjjtn.png" class="instagramImage" ></img></div>
                <div class="col-sm"><img src="https://i.imgur.com/ue5Tep4.jpg" class="instagramImage" ></img></div>
                <div class="col-sm"><img src="https://i.imgur.com/QMAy63W.jpg" class="instagramImage" ></img></div>  
                <div class="col-sm"><img src="https://i.imgur.com/n810dXz.png" class="instagramImage" ></img></div>                    
            </div>
            <br/><div class="row">
                <div class="col-sm"><img src="https://i.imgur.com/YqWlQms.jpg" class="instagramImage" ></img></div>
                <div class="col-sm"><img src="https://i.imgur.com/bxaN47e.jpg" class="instagramImage" ></img></div>
                <div class="col-sm"><img src="https://i.imgur.com/H4Yf0Bz.jpg" class="instagramImage" ></img></div>
                <div class="col-sm"><img src="https://i.imgur.com/YzWyQX1.jpg" class="instagramImage" ></img></div>                    
            </div>
            
        </div>
        <Vert height='3'></Vert>
        
        <h3>Oil Painting</h3>        
        <div class="container">
            <div class="row">
                <div class="col-sm"><br/><img src="https://i.imgur.com/Ktp8a00.jpg" class="instagramImage" ></img></div>
                <div class="col-sm"><br/><img src="https://i.imgur.com/bcVZFM8.png" class="instagramImage" ></img></div>
            </div>
        </div>
        <Vert height='3'></Vert>

      </div>
    );
  }
}
