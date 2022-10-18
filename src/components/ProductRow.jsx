import { useState } from "react";

import jsonData from "../data.json";

const ProductRow = () => {
  const [products, setProducts] = useState(jsonData);

  return (
    <>
      <h1>Product Row</h1>
    </>
  );
};

export default ProductRow;
