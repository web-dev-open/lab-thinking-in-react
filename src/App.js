import logo from './logo.svg';
import './App.css';


function ProductRow ({product}){
  const [price,App] = useState(jsonData);
  const name = product.stocked ? product.name :
  <span style={{ color:'red'}}>
    {product.name}
  </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({products}) {
  const rows = [];
  let lastCategory = null;

  products.ForEach((product) => {
    if (products.category !== lastCategory) {
      rows.push(
        <productRow
        product={product}
        key={product.name} />
      );
      lastCategory = product.category;
    }
  });


return (
  <table>
    <thread>
      <tr>
        <th>{Name}</th>
        <th>{Price}</th>
      </tr>
    </thread>
    <tbody>{rows}</tbody>
  </table>
);
}

function SearchBar() {
  return (
    <form>
      <input type='text' />
      <label>
        <input type='checkbox' />
        {' '}
        Only Show products in stock
      </label>
    </form>
  );
}

function ProductsPage({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}
 
export default App;
