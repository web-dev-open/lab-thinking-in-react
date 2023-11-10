// src/components/ProductsPage.js

import { useState } from "react";

import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";



function ProductsPage() {
  const [query, setQuery] = useState(''); 
  const [filterproducts, setFilterProducts] = useState(jsonData);

  function setSearch(val){
    return new Promise((resolve)=>{
        setQuery(val);
        resolve(val)
    })
  }


  function handleChange(e) {

    setSearch(e.target.value)
    .then((value)=>{
        setFilterProducts(jsonData.filter((val)=> val.name.split(' ').some(word=>word.toLowerCase().startsWith(value))))
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
