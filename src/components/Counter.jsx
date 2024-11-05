import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <button className="btnCounter" onClick={this.props.action}>
             {this.props.label}
            </button>
        )
    }
}
export default Counter;