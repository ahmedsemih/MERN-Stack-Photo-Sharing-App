import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Navbar from './layouts/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navbar/>
      <Routes>    
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
