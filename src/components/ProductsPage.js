import { useState } from "react";
import jsonData from "../data.json";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Root Store</h1>

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
      />

      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
