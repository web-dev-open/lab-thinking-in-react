import React, { useState} from "react";
import jsondata from "../data.json";
import SearchBar from "./Searchbar";
import ProductTable from "./ProductTable";

export default function ProductsPage() {
    const [products, setProducts] = useState(jsondata);
    const [filteredProducts, setfilteredProducts] = useState(products);
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
        setfilteredProducts(filtered);
      };

    return(
        <div>
      <SearchBar
        onSearchChange={handleSearchChange}
        onStockChange={handleStockChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
    )
};
