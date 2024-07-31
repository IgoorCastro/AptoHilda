import React from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Home from '../Pages/Home';

const RoutesApp = () => {
  return (
    <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
    </HashRouter>
  )
}

export default RoutesApp