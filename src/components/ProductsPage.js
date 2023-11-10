// src/components/ProductsPage.js

import { useState } from "react";

import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";



function ProductsPage() {
  const [query, setQuery] = useState(''); 
  const [filterproducts, setFilterProducts] = useState(jsonData);

  

  async function handleChange(e) {

    // setSearch(e.target.value)
     return await new Promise((resolve)=>{
      setQuery(e.target.value);
      resolve(e.target.value);
    })
    .then((value)=>{
        setFilterProducts(jsonData.filter((val)=> val.name.split(' ').some(word=>word.toLowerCase().includes(value))))
    })
    .catch((err)=>{
        console.log(err)
    })
   
    
  }
  
  return (
    <div >
      
      <SearchBar dvalue={query} onchange={handleChange}  />
      
      <ProductTable products={filterproducts} />
      
    </div>
  );
}

export default ProductsPage;
