import React, { Component } from 'react';
//import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
//import './NavMenu.css';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';
import twitter from './images/twitter.svg';
//import { NavLink } from './components/NavLink';
import { NavLink } from 'react-router-dom';
import './Common.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>        
        <div style={{ backgroundColor: "#dddddd" }}>
          <br></br>
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="row" style={{display: "table"}}>
                  &nbsp;&nbsp;&nbsp;
                  <img src="https://i.imgur.com/S6wAJrj.png" alt="Photo of Michael" style={{ width: "120px" }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                    <span style={{ fontSize: "32px" }}><b>        Michael Wright</b></span>
                    <br></br>
                    <span style={{ fontSize: "18px" }}>Full-stack developer</span>
                    <br></br>
                    <span style={{ fontSize: "14px" }}>also drawing, travelling and making games</span>
                  </div>
                </div>
              </div>

              <div className="col-md" style={{display: "table"}}>
                <span style={{ fontSize: "18px", display: "table-cell", verticalAlign: "middle", textAlign: "right" }}>
                  
                  &nbsp;&nbsp;
                  <a href="https://github.com/thespoonftw/" target="_blank" rel="noreferrer"><img src={github} style={{ width: "32px"}} /></a>
                  &nbsp;&nbsp;
                  <a href="https://www.linkedin.com/in/michael-wright-53b378121/" target="_blank" rel="noreferrer"><img src={linkedin} style={{ width: "32px"}} /></a>
                  &nbsp;&nbsp;
                  <a href="https://twitter.com/TheSpoonFtw" target="_blank" rel="noreferrer"><img src={twitter} style={{ width: "32px"}} /></a>
                  <br></br>
                  <br></br>
                  <span><NavLink to="/" className="navMenuItem" activeClassName="navMenuItemActive" exact>Career</NavLink></span>
                  <span> • </span>
                  {/*<span><NavLink to="/career" className="navMenuItem" activeClassName="navMenuItemActive" exact>Career</NavLink></span>
                  <span> • </span>*/}
                  <span><NavLink to="/skills" className="navMenuItem" activeClassName="navMenuItemActive" exact>Skills</NavLink></span>
                  <span> • </span>
                  <span><NavLink to="/games" className="navMenuItem" activeClassName="navMenuItemActive" exact>Games</NavLink></span>
                  <span> • </span>
                  <span><NavLink to="/art" className="navMenuItem" activeClassName="navMenuItemActive" exact>Art</NavLink></span>
                  {/*<span> • </span>
                  <span><NavLink to="/travel" className="navMenuItem" activeClassName="navMenuItemActive" exact>Travel</NavLink></span>
                  <span> • </span>
                  <span><NavLink to="/photos" className="navMenuItem" activeClassName="navMenuItemActive" exact>Photos</NavLink></span>*/}
                </span>                
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </header>
    );

    /*
    <Container>
    <NavbarBrand tag={Link} to="/" >Michael Wright  </NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                <ul className="navbar-nav flex-grow">              
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/">Blog</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/career">Career</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/skills">Skills</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/games">Games</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/art">Art</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/travel">Travel</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/photos">Photos</NavLink>
                  </NavItem>
                </ul>
              </Collapse>
            </Container>

    */
  }


}
