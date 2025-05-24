import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Home from "./Components/Home";
import ProductDetails from "./Components/productComponent/details";
import { CartProvider } from "./Hooks/ProductContext";
import Model from "./Components/Model";
function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Products />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Routes>
        <Model />
      </CartProvider>
    </>
  );
}

export default App;
