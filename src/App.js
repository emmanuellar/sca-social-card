import React from 'react';
import img2 from './img2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-content">
                <img src={img2} alt="Avatar"/>
                <div className="text">
                  <h4><b>AMARACHI AZUBUIKE</b></h4> 
                  <p>Front End Web Developer <br/> (HTML, CSS, BS4, JS, React)</p>
                </div>
                 <button>Send Message</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
