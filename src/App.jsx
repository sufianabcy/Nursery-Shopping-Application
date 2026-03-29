import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  const cartItemsCount = useSelector(state => state.cart.totalQuantity);

  return (
    <div className="App">
      <Header cartItemsCount={cartItemsCount} />
      <main>
        <ProductList />
        <AboutUs />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
