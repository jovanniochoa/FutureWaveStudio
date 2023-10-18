import React from 'react';

import Navbar from './Navbar.js';
import './App.css';
import Applications from './Applications.js';
import Support from './Support.js';
import AppCards from './AppCards'; // Import your AppCards component


const App = () => (
  <div>
    <Navbar />
    <Applications />
    <AppCards />
    <Support />
  </div>
);

export default App;