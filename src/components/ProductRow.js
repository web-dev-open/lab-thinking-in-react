import React from 'react';

function ProductRow ({productprop}) {

return(
    <tr>
    <td className = {productprop.inStock ? 'black' : 'red'}>{productprop.name}</td>
    <td>{productprop.price}</td>
    <td>{productprop.category}</td>
  </tr>
)
}

export default ProductRow;