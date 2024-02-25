

import React from 'react';
import ProductRow from './ProductRow';
import "../Product.css";

function ProductTable({ products }) {
  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow key={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
