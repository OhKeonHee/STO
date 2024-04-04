import React from 'react';
import logo from './logo.svg';
import GlobalStyle from './GlobalStyle';
import Main from './organism/Main/Main';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import IR from './organism/Company/IR/IR';
import News from './organism/Company/News/News';
import HR from './organism/HR/HR';

function App() {
  return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/company/IR" element={<IR />} />
          <Route path="/company/news" element={<News />} />
          <Route path="/hr" element={<HR />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
