import React from 'react'
import './table.css'

const ProductRow = ({productprop}) => {
  return (

       <tr key={productprop.id}>
        <td style = {{ color: productprop.inStock ?
             'black' : 'red'
        }}>{productprop.name}</td>

        <td>{productprop.price}</td>


       </tr>



  )
}

export default ProductRow