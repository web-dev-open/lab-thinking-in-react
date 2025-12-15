import { useState } from "react";
import jsonData from "../data.json";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesStock = inStockOnly ? product.inStock : true;

    return matchesSearch && matchesStock;
  });

  return (
    <div>
      <h1>Root Store</h1>

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        inStockOnly={inStockOnly}
        onInStockChange={setInStockOnly}
      />

      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
