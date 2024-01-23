import React from 'react';
import jsonData from  './../data.json';
import ProductRow from './ProductRow';
import './ProductTable.css';

function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
       
        // Pass the product as a prop to the ProductRow component
    rows.push(<ProductRow product={product} key={product.name} />);
      }
      

    
    );
  
    return (
      <div className='table-container'>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
  
  export default ProductTable