import React, { Component } from 'react';
import { Vert } from '../components/Vert';
import '../Common.css';
import { Imgur } from '../components/Imgur';

export class Art extends Component {
  static displayName = Art.name;

  render() {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Art</h1>        
        <Vert height='3'></Vert>  

        <h3>Watercolour</h3>        
        <br/>    
        <div className="container">
            <div className="row">
                <Imgur url="https://i.imgur.com/y4fmCh6.png"></Imgur>
                <Imgur url="https://i.imgur.com/Toj5R7G.png"></Imgur>
            </div>
            <br/><div className="row">
                <Imgur url="https://i.imgur.com/5W5Cfgq.png"></Imgur>
                <Imgur url="https://i.imgur.com/NbbNRiz.png"></Imgur>
            </div>
            <br/><div className="row">
                <Imgur url="https://i.imgur.com/o3C4Oeh.png"></Imgur>
                <Imgur url="https://i.imgur.com/uYbQopM.png"></Imgur>
            </div>
        </div>
        <Vert height='3'></Vert>
        
        <h3>Ink Drawings</h3>    
        <div className="container">
            <div className="row">
                <Imgur url="https://i.imgur.com/pBQC0zF.png"></Imgur>
                <Imgur url="https://i.imgur.com/7n1SgOG.jpg"></Imgur>
            </div>
        </div>
        <Vert height='3'></Vert>

        <h3>Inktober Challenge 2018</h3>        
        <div className="container">
            <br/><div className="row">
                <Imgur url="https://i.imgur.com/oCB8l3L.png"></Imgur>
                <Imgur url="https://i.imgur.com/pOhu05n.jpg"></Imgur>
                <Imgur url="https://i.imgur.com/1TiL9DY.jpg"></Imgur>      
                <Imgur url="https://i.imgur.com/xuLrkd5.png"></Imgur>                  
            </div>
            <br/><div className="row">
                <Imgur url="https://i.imgur.com/joRlvok.jpg"></Imgur>
                <Imgur url="https://i.imgur.com/ePmDL2h.png"></Imgur>  
                <Imgur url="https://i.imgur.com/YCH5dbf.png"></Imgur>
                <Imgur url="https://i.imgur.com/hdySpa9.png"></Imgur>                    
            </div>
            <br/><div className="row">
                <Imgur url="https://i.imgur.com/mspjjtn.png"></Imgur>
                <Imgur url="https://i.imgur.com/ue5Tep4.jpg"></Imgur>
                <Imgur url="https://i.imgur.com/QMAy63W.jpg"></Imgur>  
                <Imgur url="https://i.imgur.com/n810dXz.png"></Imgur>                    
            </div>
            <br/><div className="row">
                <Imgur url="https://i.imgur.com/YqWlQms.jpg"></Imgur>
                <Imgur url="https://i.imgur.com/bxaN47e.jpg"></Imgur>
                <Imgur url="https://i.imgur.com/H4Yf0Bz.jpg"></Imgur>
                <Imgur url="https://i.imgur.com/YzWyQX1.jpg"></Imgur>                    
            </div>
            
        </div>
        <Vert height='3'></Vert>
        
        <h3>Oil Painting</h3>        
        <div className="container">
            <div className="row">
                <Imgur url="https://i.imgur.com/Ktp8a00.jpg"></Imgur>
                <Imgur url="https://i.imgur.com/bcVZFM8.png"></Imgur>
            </div>
        </div>
        <Vert height='3'></Vert>

      </div>
    );
  }
}
