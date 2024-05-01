import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './features/cartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  const handleAddToCart = productId => {
    dispatch(addToCart(productId));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
