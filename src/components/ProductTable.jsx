import Row from "./ProductRow";


export default function ProductTable({ products }) {
    return (
      <div className="product-table">
        <table className="content-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <Row key={index} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }