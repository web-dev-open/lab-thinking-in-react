import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// App.js
import React, { useState } from 'react';
import data from './data.json';
import ProductList from './ProductList';
import FilterBar from './FilterBar';

const App = () => {
  const [products, setProducts] = useState(data);

  const handleFilter = (category) => {
    // Implement filtering logic based on the category
    // Update the state with the filtered products
    const filteredProducts = data.filter((product) => product.category === category);
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>Online Store</h1>
      <FilterBar onFilter={handleFilter} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
// ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  );
};

// export default ProductList;
// Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
    </div>
  );
};

// export default Product;
// FilterBar.js
import React from 'react';

const FilterBar = ({ onFilter }) => {
  const handleFilterChange = (event) => {
    const selectedCategory = event.target.value;
    onFilter(selectedCategory);
  };

  return (
    <div>
      <h2>Filter Bar</h2>
      <label htmlFor="categoryFilter">Filter by Category:</label>
      <select id="categoryFilter" onChange={handleFilterChange}>
        <option value="Sporting Goods">Sporting Goods</option>
        <option value="Electronics">Electronics</option>
      </select>
    </div>
  );
};

// export default FilterBar;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
