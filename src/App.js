import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Business from './Component/Business';
import HomePage from './Component/HomePage';
import Restaurant from './Component/Restaurant';
import Hello from './Component/Hello';
import LocationPin from './Component/LocationPin';


function App() {
return (
  
<Router>
<div>
<Routes>
  <Route exact path="/" element={<Business />} />
  <Route exact path="/:id" element={<Restaurant />} />
</Routes>
</div>
</Router>

)

}

export default App;
