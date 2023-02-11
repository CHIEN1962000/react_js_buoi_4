import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Box from './Box';

export default class Thuc_hanh_2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bgBox: 'green'
        };
      }
    
    onRemoveBox = () => {
        this.setState({ isDisplay: false});
    };

    componentWillUnmount() {
        console.log(2323);
        alert('Component box sẽ unmount!');
    }

      render() {
        return (
          <div> 
          {this.state.isDisplay && <Box></Box> }
          <div onClick={this.onRemoveBox}>Xóa Component Box</div>
          </div>
        );
      }
}
