import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import OrderPage from './components/OrderPage';
import SettingPage from './components/SettingPage';
import StockPage from './components/StockPage';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<OrderPage />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/stock" element={<StockPage />} />
      </Routes>
    </Router>
  );
};

export default App;
