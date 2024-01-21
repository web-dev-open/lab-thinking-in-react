import React, { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import "./ProductsPage.css"

function ProductsPage() {
  const [query, setQuery] = useState('');
  const [filterProducts, setFilterProducts] = useState(jsonData);
  const [inStockOnly, setInStockOnly] = useState(false);

  function setSearch(val) {
    return new Promise((resolve) => {
      setQuery(val);
      resolve(val);
    });
  }

  function handleChange(e) {
    setSearch(e.target.value)
      .then((value) => {
        setFilterProducts(
          jsonData.filter((val) =>
            val.name.split(" ").some((word) =>
              word.toLowerCase().startsWith(value)
            )
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCheckboxChange() {
    setInStockOnly(!inStockOnly);

    // Use the updated value of inStockOnly in the filter function
    setFilterProducts(
      jsonData.filter((product) => (!inStockOnly ? product.inStock : true))
    );
  }

  return (
    <div className="checkbox-container">
      <SearchBar dvalue={query} onchange={handleChange} />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />
        In Stock Only
      </label>
      <ProductTable products={filterProducts} />
    </div>
  );
}

export default ProductsPage;
