
import './App.css';
// App.js
import React, { useState } from 'react';
import CryptoCard from './components/CryptoCard';
import Cart from './components/Cart';



function App() {
  const [cart, setCart] = useState([]);
  const [cryptos] = useState([
    { name: 'Bitcoin', price: 40000 },
    { name: 'Ethereum', price: 2800 },
    { name: 'Litecoin', price: 150 },
  ]);

  const addToCart = (crypto) => {
    setCart([...cart, crypto]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Crypto Purchase Interface</h1>
      <div className="crypto-container">
        {cryptos.map((crypto, index) => (
          <CryptoCard key={index} crypto={crypto} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;

