import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Foooter/Footer';
import Router from './Routes/Router';


function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Router />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
