import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { text: "" };
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" value={this.state.text} onChange = {this.updateText.bind(this)} />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }

  updateText(evt){
    this.setState({
      text: evt.target.value
    });
  }
}

export default App;
