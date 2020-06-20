import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Bills from './Bills'
import Products from './Products'

// let ProdPrice = 87

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Products />
          <Bills />
          change:
        </div>
      </header>
    </div >
  );
}

export default App;
