import React from 'react'
import itemJson from "./items.json"

function ProductRow() {
  return (
    
    <div>
    {
        itemJson.map((data, index) => {
          return <div>
            <p>name {data.name}</p>
            <p>price {data.price}</p>
            </div>
        })
      }
      </div>
  )
}

export default ProductRow