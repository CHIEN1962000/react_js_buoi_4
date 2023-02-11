import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Thuc_hanh_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgBox: 'green'
        };
      }

      componentDidMount() {
        setTimeout(() => {
            this.setState({ 
                bgBox: 'grey'
            });
        }, 5000);
      }
    
      render() {
        return (
          <div>
            <div style={{ height: 50, width: 50, backgroundColor: this.state.bgBox}}>
                <h2>Box</h2>
            </div>
          </div>
        );
      }
}
