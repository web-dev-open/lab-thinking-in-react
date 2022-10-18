import { useState } from "react";

import jsonData from "../data.json";

const SearchBar = () => {
  const [products, setProducts] = useState(jsonData);

  return (
    <>
      <h1>Search Bar</h1>
    </>
  );
};

export default SearchBar;
