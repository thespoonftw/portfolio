import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NoMobile } from './components/NoMobile';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <NoMobile />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
