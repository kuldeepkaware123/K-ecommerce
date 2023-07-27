
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ProductPage from './Pages/Shop/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import { ShopContextProvider } from './context/ShopContext';
import Checkout from './Pages/Cart/Checkout';


function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
