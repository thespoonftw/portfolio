import React, { Component } from 'react';
import { Vert } from '../components/Vert';

export class Skills extends Component {
  static displayName = Skills.name;

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 
        <h1>Skills</h1>
        <Vert height='3'></Vert> 

        <h3>Technologies</h3>
        <p>(Updated Jan 2021)</p>
        <p><b>Strong Knowledge:</b> C#, Unity, Physics, Mathematics</p> 
        <p><b>Confident With:</b> Github, React, SQL, Javscript, Java, HTML, CSS, Excel, Blender, GIMP, Agile, ThreeJS, LaTeX</p>
        <p><b>Familiar With:</b> Python, C++, MATLAB, Azure, Jenkins, R, SVN</p>
        <Vert height='2'></Vert>
        
        <h3>University of Birmingham (2011 - 2016)</h3>
        <p><b>MSci. Physics, with a Year in Computer Science - 1st Class</b></p>
        <p><b>Included Modules:</b> 
          <br></br>Software Engineering
          <br></br>Machine Learning
          <br></br>Computer Security
          <br></br>Computer Graphics
          <br></br>Introduction to C++
          <br></br>Particle Physics
          <br></br>Astrophysics
          <br></br>Nuclear Physics
          <br></br>Quantum Mechanics
          <br></br>Statistical Physics          
        </p>
        <Vert height='2'></Vert>

        <h3>Qualifications</h3>
        <p>QNUK Level 3 - Emergency First aid in the Workplace (2019)
          <br></br>HR Champions Ltd - Level 2 Certificate in Leadership and Team Skills (2017)
          <br></br>British Standard Driving Licence (2010)
          <br></br>Grade 4 Clarinet (2008)
        </p>  
        <Vert height='2'></Vert>   

        <h3>GCEs Sixth Form</h3>           
        <p>A Level - Physics: A*
          <br></br>A Level - Maths: A*
          <br></br>A Level - Further Maths: A
          <br></br>A Level - Chemistry: A
          <br></br>AS Level - Geography: A
          <br></br>Extended Project: A
        </p>
        <Vert height='2'></Vert>

        <h3>GCSEs Secondary School</h3>           
        <p>Mathematics: A*
            <br></br>Statistics: A*
            <br></br>Science: A*
            <br></br>Additional Science: A*
            <br></br>History: A*
            <br></br>English: A
            <br></br>Business Studies: A
            <br></br>French: A
            <br></br>Media Studies: A
            <br></br>Religious Studies: A
            <br></br>D&T: Product Design: B
            <br></br>English Literature: B
            <br></br>ICT: Distinction
        </p>
        <Vert height='3'></Vert>

      </div>
    );
  }
}
