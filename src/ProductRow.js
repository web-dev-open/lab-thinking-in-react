import React from 'react';

function ProductRow({ product }) {
  const { name, category, price, inStock } = product;

  return (
    <tr style={{ color: inStock ? 'black' : 'red' }}>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{inStock ? 'Yes' : 'No'}</td>
    </tr>
  );
}

export default ProductRow;