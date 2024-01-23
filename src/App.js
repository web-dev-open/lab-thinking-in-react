import logo from './logo.svg';
import './App.css';
import ProductsPage from './components/ProductsPage';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

function App() {
  return (
    <div className="App">
      <ProductsPage>
        <SearchBar/>
      </ProductsPage>
    </div>
  );
}

export default App;
