import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Thuc_hanh_3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isLoggedIn: false,
        }
    }

    
    componentDidMount() {
        const getUserInfo = localStorage.getItem('isLoggedIn');
        let updatedValue = this.state.isLoggedIn;
        if (getUserInfo) {
            updatedValue = true;
        } else {
            updatedValue = false;
        }
        this.setState({
            loading: false,
            isLoggedIn: updatedValue
        })
    }


    render() {
        return (
            <div>
                {this.state.loading && <h3>Loading</h3>}
                {this.state.isLoggedIn ? (
                    <div>
                        <h3>Hello User</h3>
                        <button>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h3>Please login</h3>
                        <button>Login</button>
                    </div>
                )}
            </div>
        )
    }
}
