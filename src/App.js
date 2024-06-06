import './App.css';
import ProductsPage from './components/ProductPage';

function App() {
  return (
    <div className="App">
       <p style={{ fontSize: "80px", color: "white", fontFamily: "arial"}}>
        Metro Sports
      </p>
      <ProductsPage />
    </div>
  );
}

export default App;
