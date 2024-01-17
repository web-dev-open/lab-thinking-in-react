// src/components/ProductTable.js

import React from 'react';
import ProductRow from './ProductRow'; // You can use the previously created ProductRow component

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody >
        {products.map((product, index) => (
          <ProductRow  key={index} productprop={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;