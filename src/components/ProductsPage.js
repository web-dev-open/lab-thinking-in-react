// src/components/ProductsPage.js
import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showInStock, setShowInStock] = useState(false);

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => 
      !showInStock || product.inStock
    );

  return (
    <div>
      <h1>Root Store</h1>
      <SearchBar
        onSearch={setSearchTerm}
        showInStock={showInStock}
        onToggleInStock={() => setShowInStock(!showInStock)}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
