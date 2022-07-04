import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Customer from './components/Customer';
import Login from './components/Login';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/customer" element={<Customer />} />
    </Routes>
   </>
  )
}

export default App