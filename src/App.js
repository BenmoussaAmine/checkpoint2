import React, { Component } from 'react';
import logo from './logo.svg';
import img  from './ab.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={img} className="tasswira" alt="img" />
          <p class='p1'>Paragraph 777777777777777777777</p>
           <br/>
           <hr/>
          <p class='p2'>Paragraph 777777777777777777777</p>
        
            Edit <code>src/App.js</code> and save to reload.
          
        </header>
      </div>
    );
  }
}

export default App;
