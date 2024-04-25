// App.jsx
import "./App.css";
import ProductsPage from "./componenets/ProductPage";

import "./componenets/style.css";
export default function App() {
  return (
    <div className="App">
      <p style={{ fontSize: "80px", color: "white", fontFamily: "" }}>
        SPORTS-STORE
      </p>

      <ProductsPage />
    </div>
  );
}
