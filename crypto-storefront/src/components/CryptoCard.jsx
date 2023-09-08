
import React, { useState } from 'react';

function CryptoCard({ crypto, addToCart }) {
  const [quantity, setQuantity] = useState(0);
  const [toggle, settoggle] = useState(false);

  const handleBuy = () => {
    if (quantity > 0) {
      addToCart({ ...crypto, quantity });
      setQuantity(0);
    }else{
        alert("Please enter a quantity")
    }
  };

  return (
    <div className="crypto-card">
      <h3>{crypto.name}</h3>
      <p>Price: ${crypto.price}</p>
      <button style={{marginRight:"2px" ,background:"#007bff",border:"0px",padding:"5px",borderRadius:"5px",color:"white"}} onClick={()=>settoggle(!toggle)}>Quantity</button>
      {toggle &&<div className="quantity-container">
        
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 0}>-</button>
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>}
      <button style={{background:"#007bff",border:"0px",padding:"5px",borderRadius:"5px",color:"white"}} onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default CryptoCard;
