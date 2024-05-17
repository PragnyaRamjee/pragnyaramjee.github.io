// src/components/Header.js
import React from 'react';
import { Link } from 'gatsby';
import Button from './Button';

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-white">
    <Link to="/" className="flex items-center">
      <img src="/logo.png" alt="Logo" className="h-12 w-12 mr-4" />
    </Link>
    <nav className="flex items-center space-x-4">
      <Button to="/about">About</Button>
      <Button to="/resume">Resume</Button>
    </nav>
  </header>
);

export default Header;