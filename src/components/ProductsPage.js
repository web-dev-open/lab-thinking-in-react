import React, { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState("");
  const [showInStock, setShowInStock] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStock = !showInStock || product.inStock;
    return matchesSearch && matchesStock;
  });
  return (
    <div>
      <h1>Root Store</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showInStock={showInStock}
        setShowInStock={setShowInStock} // Pass down state updater for checkbox
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
