
// src/components/ProductsPage.js



import { useState } from 'react';

import jsonData from './../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';



function ProductsPage() {

    const [products, setProducts] = useState(jsonData);

    return (

        <div style={{width: "80vw", marginLeft: "10vw"}}>
            <h1>Root Store</h1>
            <SearchBar setProducts={setProducts}/>
            <ProductTable products={products}/>
        </div>

    )

}

export default ProductsPage