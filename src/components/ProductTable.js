import React, { useState } from 'react';
import ProductRow from './ProductsRow';

const ProductTable = ({ products, searchTerm, inStockOnly }) => {
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => (inStockOnly ? product.inStock : true));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <ProductRow key={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;