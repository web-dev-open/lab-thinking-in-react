// src/components/ProductsPage.jsx
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import data from "../data.json";

export default function ProductsPage() {
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
    filterProducts(searchTerm, inStockOnly);
  };

  const handleStockChange = (checked) => {
    setInStockOnly(checked);
    filterProducts(searchTerm, checked);
  };

  const filterProducts = (searchTerm, inStockOnly) => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (inStockOnly) {
      filtered = filtered.filter((product) => product.inStock);
    }
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <SearchBar
        onSearchChange={handleSearchChange}
        onStockChange={handleStockChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
