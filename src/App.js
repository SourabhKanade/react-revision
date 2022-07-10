import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Customer from './components/Customer';
import Login from './components/Login';
import Details from './components/Details';

function App() {
  return (
     <>
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/details" element={<Details />} />
     <Route path="/customer" element={<Customer />} />
    </Routes>
   </>
  )
}

export default App