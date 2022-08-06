import React from 'react';
import styles from "./App.module.css";
import Header from './Components/Header/Header';
import Router from './Routes/Router';
import Footer from './Components/Foooter/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <hr className={styles.horLineStyle} />
      <Router />
      <hr className={styles.horLineStyle} />
      <Footer />
    </div>
  );
}

export default App;
