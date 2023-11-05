

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductsTable';

const jsonData = [
    {"category": "Sporting Goods",  "price": "$49.99",    "inStock": true,    "name": "Football",    "id": "295a4dab-74b2-4e60-b3c2-c1346aba7585"},
    {"category": "Sporting Goods",  "price": "$9.99",    "inStock": false,   "name": "Basketball",    "id": "6cf41052-7869-490f-9c2c-8f8efd2a4b5d"},
    {"category": "Electronics",     "price": "$99.99",    "inStock": true,    "name": "iPod Touch",    "id": "6fa4681a-61e1-4bf6-823a-24b2fe335543"},
    {"category": "Electronics",     "price": "$199.99",   "inStock": false,   "name": "iPhone X",    "id": "bbdabd03-0e02-4e7d-a7fc-ce52cc1164be"},
    {"category": "Sporting Goods",  "price": "$9.99",   "inStock": true,    "name": "Tennis Balls",    "id": "5358b8a4-fe62-4f7d-9a22-712be95a1f72"},
    {"category": "Electronics",     "price": "$199.99",   "inStock": true,    "name": "Huawei P10",    "id": "10858000-7894-4d77-bd0f-24639d111e74"},
    {"category": "Electronics",     "price": "$199.99",   "inStock": true,    "name": "iPad Mini",    "id": "a385a23f-07ed-4340-9ba7-937a0ce5f151"},
    {"category": "Sporting Goods",  "price": "$9.99",     "inStock": true,    "name": "Baseball",    "id": "4522f16e-3f55-4863-ae36-e935ec9cb4ef"}
  ]
  

function ProductsPage() {
  const [filterText,setFilter]= useState('');

  const filteredProducts = jsonData.filter(product =>
    product.name.toLowerCase().includes(filterText.toLowerCase()));

  function dosomthing(event){
  setFilter(event.target.value)
}


  return (
    <div>
      <h1>Root Store</h1>
      <SearchBar  onChangeprop={dosomthing}  /> 
      <ProductTable  products={filteredProducts} /> 
    </div>
  );
}

export default ProductsPage;
