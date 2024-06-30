
import './App.css';
import React, { useState } from 'react';
import Interface from './components/Interface';
import Information from './components/Information';

function DeliverComponents({ choice, setChoice }) {
  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={() => setChoice("home")}>Home</button>
        <button onClick={() => setChoice("interface")}>Interface</button>
        <button onClick={() => setChoice("information")}>Information</button>
      </nav>

      {choice === "home" && (
        <div>
          <h1>Welcome to Vehicle Performance Analyzer</h1>
          <p>This application helps you analyze vehicle performance metrics.</p>
          <p>Interface: Enter metrics, get results based on the data entered</p>
          <p>Information: information about power-to-weight ratios, and information about the application</p>
        </div>
      )}

      {choice === "interface" && <Interface />}

      {choice === "information" && <Information />}
    </div>
  );
}

function App() {
  const [choice, setChoice] = useState("home"); // Default choice is Home

  return (
    <DeliverComponents choice={choice} setChoice={setChoice} />
  );
}

export default App;





