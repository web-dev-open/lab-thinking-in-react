import { useState } from "react";
import jsonData from "../data.json";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>Root Store</h1>

      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
