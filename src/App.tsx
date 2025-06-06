import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Home from './pages/main/Home';
import CataloguePage from './pages/main/CataloguePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/catalogo" element={<CataloguePage />}/>
      </Routes>
    </Router>
  );
}

export default App;