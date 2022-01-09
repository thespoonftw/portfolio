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
                <Imgur code="y4fmCh6.png"></Imgur>
                <Imgur code="Toj5R7G.png"></Imgur>
            </div>
            <br/><div className="row">
                <Imgur code="5W5Cfgq.png"></Imgur>
                <Imgur code="NbbNRiz.png"></Imgur>
            </div>
            <br/><div className="row">
                <Imgur code="o3C4Oeh.png"></Imgur>
                <Imgur code="uYbQopM.png"></Imgur>
            </div>
        </div>
        <Vert height='3'></Vert>
        
        <h3>Ink Drawings</h3>    
        <div className="container">
            <div className="row">
                <Imgur code="pBQC0zF.png"></Imgur>
                <Imgur code="7n1SgOG.jpg"></Imgur>
            </div>
        </div>
        <Vert height='3'></Vert>

        <h3>Inktober Challenge 2018</h3>        
        <div className="container">
            <br/><div className="row">
                <Imgur code="oCB8l3L.png"></Imgur>
                <Imgur code="pOhu05n.jpg"></Imgur>
                <Imgur code="1TiL9DY.jpg"></Imgur>      
                <Imgur code="xuLrkd5.png"></Imgur>                  
            </div>
            <br/><div className="row">
                <Imgur code="joRlvok.jpg"></Imgur>
                <Imgur code="ePmDL2h.png"></Imgur>  
                <Imgur code="YCH5dbf.png"></Imgur>
                <Imgur code="hdySpa9.png"></Imgur>                    
            </div>
            <br/><div className="row">
                <Imgur code="mspjjtn.png"></Imgur>
                <Imgur code="ue5Tep4.jpg"></Imgur>
                <Imgur code="QMAy63W.jpg"></Imgur>  
                <Imgur code="n810dXz.png"></Imgur>                    
            </div>
            <br/><div className="row">
                <Imgur code="YqWlQms.jpg"></Imgur>
                <Imgur code="bxaN47e.jpg"></Imgur>
                <Imgur code="H4Yf0Bz.jpg"></Imgur>
                <Imgur code="YzWyQX1.jpg"></Imgur>                    
            </div>
            
        </div>
        <Vert height='3'></Vert>
        
        <h3>Oil Painting</h3>        
        <div className="container">
            <div className="row">
                <Imgur code="Ktp8a00.jpg"></Imgur>
                <Imgur code="bcVZFM8.png"></Imgur>
            </div>
        </div>
        <Vert height='3'></Vert>

      </div>
    );
  }
}
