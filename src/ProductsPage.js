import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import jsonData from './../../data.json';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const handleSearch = (searchTerm, inStockOnly) => {
    // Filter products based on the search term and inStockOnly
    const filteredProducts = jsonData.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesInStock = inStockOnly ? product.inStock : true;
      return matchesSearch && matchesInStock;
    });

    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>Root Store</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;