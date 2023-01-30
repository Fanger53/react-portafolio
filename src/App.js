import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/about/About';
import Home from './pages/home/Home';



const App = () => {
  return (
    <>
      <Home/>
      <About/>
    </>
    // <BrowserRouter>
    //   <Sidebar>
    //     <Routes>
    //       <Route path="/home" element={<Home />} />
    //     </Routes>
    //   </Sidebar>
    // </BrowserRouter>
  );
}

export default App
