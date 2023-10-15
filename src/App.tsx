import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Example from './pages/example/Example';
import Servicers from './pages/service-providers/servicers';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <AuthContextProvider>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/example' element={<Example />} />
            <Route path='/' element={<Servicers />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
