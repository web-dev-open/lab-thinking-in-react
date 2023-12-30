import React, { useState } from "react";
import jsonData from "../data.json"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductPage = ()=>{

    const [products,setProducts] = useState(jsonData);

    const handleSearch = (searchTerm,InStockOnly)=>{
        const filterProducts = jsonData.filter((product)=>{
            const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesInStock = InStockOnly?product.inStock:true;
            return matchSearch&&matchesInStock;
        })

        setProducts(filterProducts)
    }

    const handleCheckBoxChange = (searchTerm, inStockOnly) => {
    // Filter data based on search term and inStockOnly flag
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!inStockOnly || (inStockOnly && product.inStock))
    );

    setProducts(filteredProducts);
  };

    return(
        <div>
         <h1>Root Store</h1>
         <SearchBar  onSearch={handleSearch}  onCheckBoxChange={handleCheckBoxChange} />
         <ProductTable products={products}  />
        </div>
    )
}


export default ProductPage;