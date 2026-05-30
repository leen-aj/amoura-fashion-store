
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import StyleQuiz from "./pages/StyleQuiz";
import Measurement from "./pages/Measurement";
import Checkout from "./pages/Checkout";
import Thanks from "./pages/Thanks";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/quiz" element={<StyleQuiz />} />
        <Route path="/measurement" element={<Measurement />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thanks" element={<Thanks />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;