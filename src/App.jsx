import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import ProductList from './ProductList';

function App() {
  const cartCount = useSelector(state => state.cart.items.length);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <ProductList />
    </div>
  );
}

export default App;
