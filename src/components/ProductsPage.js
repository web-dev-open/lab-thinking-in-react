// src/components/ProductsPage.js
import { useState } from 'react';
import jsonData from './../data.json'; 

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  // Master array of products
  const [products] = useState(jsonData);
  
  // Search and Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Compute the filtered products on the fly based on state
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStock = inStockOnly ? product.inStock : true;
    return matchesSearch && matchesStock;
  });

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Root Store</h1>
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;