import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  // filter products by search and stock
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStock = inStockOnly ? product.inStock : true;
    return matchesSearch && matchesStock;
  });

  return (
    <div>
      <h1>Root Store</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
