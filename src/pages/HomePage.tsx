import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Customers from '../components/Customers';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Customers />
    </div>
  );
};

export default HomePage;