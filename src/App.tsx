import React from 'react';
import logo from './logo.svg';
import GlobalStyle from './GlobalStyle';
import Main from './organism/Main/Main';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
      <>
        <NavBar />
        <Main />
        <Footer />
      </>
  );
}

export default App;
