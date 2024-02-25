

import React, { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);


  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCheckboxChange = (e) => {
    setShowOnlyInStock(e.target.checked);
    if (e.target.checked) {
      const filtered = products.filter(product => product.inStock);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };






  return (
    <div>
      <h1>Store</h1>
      <SearchBar handleSearch={handleSearch} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
