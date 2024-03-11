import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Dashboard';

function App() {


  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
