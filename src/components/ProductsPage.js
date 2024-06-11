import React, { useState } from 'react';
import jsonData from './data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  const handleStockChange = (stockStatus) => {
    setInStockOnly(stockStatus);
  };

  return (
    <div>
      <h1>Root Store</h1>
      <SearchBar
        onSearchChange={handleSearchChange}
        onStockChange={handleStockChange}
        inStockOnly={inStockOnly}
      />
      <ProductTable
        products={products}
        searchTerm={searchTerm}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default ProductsPage;