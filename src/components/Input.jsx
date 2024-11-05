import React, { Component } from 'react';

class Input extends Component {
    handleChange = (event) => { this.props.onChange(event.target.value); }
    
    render() {
        return (
            <input 
                className="inputText" 
                type="text" 
                value={this.props.value}
                placeholder={this.props.hint} 
                onChange={this.handleChange}
            />
        )
    }
}
export default Input;