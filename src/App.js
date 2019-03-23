import React, { Component } from 'react';
import './App.css';
import DonateButton from './components/DonateButton';
import cards from './images/cards.gif';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Please support us with your donations.
          </p>
          <DonateButton />
        </header>
        <div className="App-body">
          <img src={cards} alt="Donate with PayPal button" />
        </div>
      </div>
    );
  }
}

export default App;
