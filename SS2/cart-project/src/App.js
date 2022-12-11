import "./App.css";

// Components
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Cart from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CartState from "./context/cart/CartState";

// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <CartState>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CartState>
    </Router>
  );
};

export default App;
