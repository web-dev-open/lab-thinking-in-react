import { useState } from "react";
import "./ProductsPage.css";

import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  let stockProducts = jsonData
    .filter((item) => item.inStock)
    .map((item) => item);

  function handleChange(e) {
    let filteredProducts = products
      .filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .map((item) => item);
    setProducts(filteredProducts);
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setProducts(stockProducts);
    } else {
      setProducts(jsonData);
    }
  }

  return (
    <div id="products-page">
      <h1>Store</h1>
      <SearchBar onTypeChange={handleChange} onChecked={handleCheck} />
      <ProductTable prodList={products} />
    </div>
  );
}

export default ProductsPage;
