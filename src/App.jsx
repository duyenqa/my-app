import React, { Component } from 'react';
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'red',
      count: 0,
      firstName: "",
      lastName: ""
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    if (this.state.count <= 0) {
      this.setState({ count: 0 });
    }else{
      this.setState({ count: this.state.count - 1 });
    }
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  onChangeInputField = (field, value) => { 
    this.setState({ [field]: value }); 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({firstName: ""});
    this.setState({lastName: ""});
  }
  render() {
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <h2>I am a {this.state.color} Car!</h2>
        <div className="countActions">
          <Counter
            action={this.increment}
            label="+"
          />
          <p className="valueCount">{this.state.count}</p>
          <Counter
            action={this.decrement}
            label="-"
          />
        </div>
        <Counter
          action={this.reset}
          label="Reset"
        />

        <div className="form">
          <h2>My Form</h2>
          <Input
            hint="Enter first name"
            value={this.state.firstName}
            onChange={(value) => this.onChangeInputField('firstName', value)}
          />
          <Input
            hint="Enter last name"
            value={this.state.lastName}
            onChange={(value) => this.onChangeInputField('lastName', value)}
          />
          <button onClick={this.handleSubmit}>Submit</button>
          <div>First Name: {this.state.firstName} - Last Name: {this.state.lastName}</div>
        </div>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App;
