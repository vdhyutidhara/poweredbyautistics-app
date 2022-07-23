import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Foooter/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      {/* Tab Bar Routes */}
      <Link to="/course">Course</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
