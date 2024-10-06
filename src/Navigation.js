import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Order Page</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/stock">Stock Page</Link>
    </nav>
  );
};

export default Navigation;
