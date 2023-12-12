import React, { useState, useEffect } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Update products whenever filterText or inStockOnly changes
  useEffect(() => {
    // Function to filter products based on the current options
    const filterProducts = () => {
      const filteredProducts = jsonData.filter(product =>
        product.name.toLowerCase().includes(filterText.toLowerCase()) &&
        (!inStockOnly || (inStockOnly && product.inStock))
      );
      setProducts(filteredProducts);
    };

    // Call the filterProducts function
    filterProducts();
  }, [filterText, inStockOnly]);

  return (
    <div>
      <h1>Devil's Store</h1>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default ProductsPage;
