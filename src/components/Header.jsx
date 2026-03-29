import React from 'react';

function Header({ cartItemsCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🌿 Paradise Nursery</h1>
          <p>Your Online Plant Store</p>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#cart" className="cart-link">
            🛒 Cart <span className="cart-badge">{cartItemsCount}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
