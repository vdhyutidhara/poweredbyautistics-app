import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Foooter/Footer';
import Router from './Routes/Router';

import styles from "./App.module.css";


function App() {
  return (
    <div className="App">
      <Header />
      <hr className={styles.horLineStyle} />
      <Router />
      <hr className={styles.horLineStyle} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
