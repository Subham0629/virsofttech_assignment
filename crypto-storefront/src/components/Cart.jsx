
import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - Quantity: {item.quantity}</p>
              <p>Total Cost: ${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <p>Total Cost: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
