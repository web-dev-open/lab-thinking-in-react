import React, { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage({ children }) {
  const [products, setProducts] = useState(jsonData);

  const handleSearch = (query, showOnlyInStock) => {
    // Filtering the products based on the search query and stock filter
    const filteredProducts = jsonData.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) &&
        (!showOnlyInStock || product.stocked)
    );

    // Updating the state with the filtered products
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>Root Store</h1>
      {/* Passing the handleSearch function to the SearchBar component */}
      <SearchBar onSearch={handleSearch} />
      {/* Passing the filtered products to the ProductTable component */}
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
