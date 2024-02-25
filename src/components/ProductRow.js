

import React from 'react';
import "../Product.css";

function ProductRow({ product }) {
  const rowClassName = product.inStock ? 'product-row' : 'product-row out-of-stock';


  return (
    <tr className={rowClassName}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
