import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, inStockOnly }) {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filterText.toLowerCase()) &&
    (!inStockOnly || (inStockOnly && product.inStock))
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map(product => (
          <ProductRow key={product.name} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
