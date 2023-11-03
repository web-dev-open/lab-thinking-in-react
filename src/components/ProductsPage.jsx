import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);

  return (
    <>
      <h1>Root Store</h1>
      <div>
        <SearchBar />
      </div>
      <div>
        <ProductTable />
      </div>
    </>
  );
};

export default ProductsPage;
