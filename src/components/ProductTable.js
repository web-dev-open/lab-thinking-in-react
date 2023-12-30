import ProductRow from "./ProductRow";
import './ProductTable.css';

function ProductTable(props) {
  function createProduct(product) {
    return (
      <ProductRow
        key={product.id}  // Use a unique identifier as the key
        name={product.name}
        price={product.price}
        stock={product.inStock}
      />
    );
  }

  return <div className='table'>{props.array.map(createProduct)}</div>;
}

export default ProductTable;
