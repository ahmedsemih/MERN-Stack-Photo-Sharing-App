import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import './index.css';

import Home from './pages/Home';
import Profile from './pages/User';
import Navbar from './layouts/Navbar';
import Photo from './pages/Photo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/photo' element={<Photo />} />
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>
);
