import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/CartSlice';
import CartItem from './CartItem';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const products = [
    // Indoor Plants
    { id: 1, name: 'Monstera Deliciosa', price: 45, category: 'Indoor', description: 'Popular tropical plant with split leaves' },
    { id: 2, name: 'Snake Plant', price: 25, category: 'Indoor', description: 'Low maintenance succulent' },
    { id: 3, name: 'Pothos', price: 20, category: 'Indoor', description: 'Trailing houseplant' },
    // Outdoor Plants
    { id: 4, name: 'Rose Bush', price: 35, category: 'Outdoor', description: 'Beautiful flowering plant' },
    { id: 5, name: 'Hibiscus', price: 40, category: 'Outdoor', description: 'Tropical flowering shrub' },
    { id: 6, name: 'Lavender', price: 18, category: 'Outdoor', description: 'Fragrant purple flowers' },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    }));
  };

  return (
    <div className="container">
      <div className="products-section">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">🌱</div>
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="description">{product.description}</p>
              <p className="price">${product.price}</p>
              <button 
                className="add-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-section">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="cart-total">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductList;
