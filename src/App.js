import React from "react";
import "./App.css";
import NasaList from "./components/NasaList"
import logo from "./assets/nasa-logo.png"

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img  className="nasa_logo" 
              src={logo}
              alt="nasa offical logo"/>
        <NasaList />     
      </div>
      <p>
        Discover the stars <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
