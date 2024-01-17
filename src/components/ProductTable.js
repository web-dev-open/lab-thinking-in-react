import ProductRow from "./ProductRow"
import './ProductTable.css'
function ProductTable(props)
{
   function createProduct(pro)
   {
      return <ProductRow
                 name={pro.name}
                 price={pro.price}
                 stock={pro.inStock}
              />
   }
   return <div className='table'>
       {(props.array).map((pro)=>createProduct(pro))}
   </div>
}

export default ProductTable