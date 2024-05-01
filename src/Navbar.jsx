import React from 'react';

function Navbar({ cartCount }) {
  return (
    <div>
      <h1>My Store</h1>
      <p>Items in Cart: {cartCount}</p>
    </div>
  );
}

export default Navbar;
