// src/components/Button.js
import React from 'react';
import { Link } from 'gatsby';

const Button = ({ children, to, className }) => (
  <Link
    to={to}
    className={`inline-block text-gray-800 underline hover:bg-cyan-200 text-base py-2 px-4 ${className}`}
    // style={{ border: '2px solid red' }}
  >
    {children}
  </Link>
);

export default Button;
