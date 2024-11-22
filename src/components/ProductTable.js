import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({products}) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border p-2">Name</th>
        <th className="border p-2">Price</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <ProductRow key={product.name} product={product} />
      ))}
    </tbody>
  </table>
  )
}

export default ProductTable