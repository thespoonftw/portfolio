import React, { Component } from 'react';
import { Vert } from './Vert';

export class Skills extends Component {
  static displayName = Skills.name;

  render () {
    return (
      <div>
        <Vert height='3'></Vert> 

        <h1>Skills</h1>
        <p>(Updated Jan 2021)</p>
        <p><b>Strong Knowledge:</b> C#, Unity, Physics, Mathematics</p> 
        <p><b>Confident With:</b> Github, React, SQL, Javscript, Java, HTML, CSS, Excel, Blender, GIMP, Agile, ThreeJS</p>
        <p><b>Familiar With:</b> Python, C++, MATLAB, Azure, Jenkins, R, SVN, Bash</p>
        <Vert height='2'></Vert>
        
        <h1>Education</h1>
        <br></br>
        
        <h3>University of Birmingham (2011 - 2016)</h3>
        <p><b>MSci. Physics, with a Year in Computer Science - 1st Class</b></p>
        <p><b>1st Year Physics 78%:</b> The Cosmic Connection, Physics and Communication Skills, Quarks and leptons, Introduction to Particle Physics and Cosmology, Quantum Mechanics, Optics and Waves, Classical Mechanics and Relativity 1, Electromagnetism, Temperature and Matter, Mathematics for Physicists 1A, Physics Laboratory 1</p>
        <p><b>2nd Year Physics 76%:</b> Structure in the Universe, Physics Laboratory 2, Electromagnetism 2, Physics and Communication Skills 2, Physics Project, Maths for Physicists 2, Classical Mechanics and Relativity 2, Quantum Mechanics 2, Statistical Physics and Entropy, Nuclear Physics and Electrons in Solids, Electronics</p>
        <p><b>Year in Computer Science 76%: </b> Graphics 2, Data Structures and Algorithms, Introduction to Computer Science, Databases, Software Engineering, Operating Systems and Networks, Software Workshop 1, Software Workshop 2, Introduction to Computer Security, Machine Learning</p>
        <p><b>3rd Year Physics 78%:</b> Quantum Mechanics 3, Introduction to C++, Group Studies, Statistic Physics, Fission and Fusion, General Physics, Laboratory, Particle Physics, Nuclear Physics, Planetary Astronomy and Extrasolar Planets, Numerical Modelling of Physics Systems</p>
        <p><b>Masters Year Physics 70%:</b> Current Topics in Particle Physics, Superconductivity, Images and Communications, Final Year Project, Insights into Stellar Structure, Inference from Scientific Data, Mathematical Finance</p>
        <br></br>

        <h3>Wilberforce Sixth Form College, Hull (2009 - 2011)</h3>           
        <p>A Level - Physics: A*
          <br></br>A Level - Maths: A*
          <br></br>A Level - Further Maths: A
          <br></br>A Level - Chemistry: A
          <br></br>AS Level - Geography: A
          <br></br>Extended Project: A
        </p>
        <br></br>

        <h3>South Holderness Technology College, East Yorkshire (2004 - 2009)</h3>           
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
        <br></br>

        <h3>Misc Qualifications</h3>
        <p>QNUK Level 3 - Emergency First aid in the Workplace (2019)
          <br></br>HR Champions Ltd - Level 2 Certificate in Leadership and Team Skills (2017)
          <br></br>British Standard Driving Licence (2010)
          <br></br>Grade 4 Clarinet (2008)
        </p>       

        <Vert height='3'></Vert>
      </div>
    );
  }
}
