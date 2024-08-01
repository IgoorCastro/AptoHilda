import React from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Home from '../Pages/Home';

const RoutesApp = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp