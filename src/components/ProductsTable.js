import './ProductsTable.css';

import React from 'react';

import ProductRow from './ProductRow';

export default function ProductsTable(props) {
    const products = props.data;
    const searchString = props.searchString.toLowerCase();

    let filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().startsWith(searchString);
    });

    // let inStockProducts = [];
    if (props.isChecked) {
        filteredProducts = filteredProducts.filter((product) => product.inStock)
    }


    return (
        <div className='productsTable'>
            <div>
                <tr className='tableHeader'>
                    <td className='productInfo'>Product Name</td>
                    <td className='productInfo productPrice'>Price</td>
                </tr>
            </div>
            <div className='rowContainer'>
                {filteredProducts.map((product) => <ProductRow key={product.id} name={product.name} price={product.price} inStock={product.inStock} />)}
            </div>
        </div>
    )
}
