import React, { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Models from './components/Models';
import Features from './components/Features';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app">
      <Header />
      <Carousel />
      <Models addToCart={(model) => setCartItems([...cartItems, model])} />
      <Features />
    </div>
  );
}

export default App;


// For Google Maps integration (replace with your API key)
function initMap() {
    // This would be replaced with actual Google Maps API code
    console.log("Map would initialize here");
}

// Newsletter form submission
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}! You'll receive exclusive BMW updates.`);
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});