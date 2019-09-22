import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import WordCard from './WordCard.js';

const word = "Doraemon";
class App extends Component {
  render() {
    return (
      <div classname="App">
        <header classname="App-header">
          <h1 classname="App-title">Wellcome to React by Fiz</h1>
        </header>
        <WordCard value="Doraemon" />
      </div>
    );
  }
}
export default App;