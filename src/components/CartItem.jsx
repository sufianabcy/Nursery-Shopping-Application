import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item.name}</h4>
        <p className="item-price">${item.price}</p>
      </div>
      <div className="item-controls">
        <label>Qty: </label>
        <select value={item.quantity} onChange={handleQuantityChange}>
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <p className="item-subtotal">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
        <button className="remove-btn" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
