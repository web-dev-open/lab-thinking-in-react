import React from 'react'
import './table.css'
const ProductRow = ({productrow}) => {
  return (
       <tr key={productrow.id}>
        <td style = {{ color: productrow.inStock ?
             'black' : 'red'
        }}>{productrow.name}</td>
        <td>{productrow.price}</td>  
       </tr>
  )
}
export default ProductRow