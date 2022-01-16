import React, { Component } from 'react';
import { Imgur } from './Imgur'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export class PhotoGrid extends Component {
  static displayName = PhotoGrid.name;

  constructor(props) {
      super(props);
      this.state = { fullScreen: false, imageIndex: 0 };
  }

  clickImage(index) {
    this.setState({ fullScreen: true, imageIndex: index });
  }

  render() {
    var columns = [0, 1, 2, 3];
    var numberOfRows = Math.ceil(this.props.photos.length / 4);
    var rows = Array.from(Array(numberOfRows).keys());
    const toggle = () => this.setState({ fullScreen: !this.state.fullScreen });
    const modalStyle = { width: "80%" };
  
    return (
      <div class="container">
        {rows.map(y => 
          <div className="row">
            {columns.map(x =>
              x + (y * 4) < this.props.photos.length ?
                <Imgur square url={this.props.photos[x + (y * 4)].url} onClick={() => this.clickImage(x + (y * 4))}></Imgur>
                :
                <div className="col-md"></div>
            )}
          </div>          
        )}        
  
        <Modal isOpen={this.state.fullScreen} toggle={toggle} size="xl">
            <ModalHeader toggle={toggle}>
                
            </ModalHeader>
            <ModalBody>
              <img src={this.props.photos[this.state.imageIndex].url} style={{width: "100%"}}></img>
            </ModalBody>
          
          
        </Modal>
  
      </div>      
    );
  }

  
}