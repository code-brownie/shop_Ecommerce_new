
import { useState } from 'react';
import './App.css';
import Account from './component/Account';
import Cart from './component/Cart';
import Featured from './component/Featured';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Productsdetail from './component/Productsdetail';
import { Route, Routes } from "react-router-dom"
import Alerts from './component/Alerts';
import Points from './component/Points';
import { CartProvider } from './component/ContexReducer';
function App() {
  const [alert, setAlerts] = useState(null);
  const showAlerts = (message, type) => {
    setAlerts({ message: message, type: type });
    setTimeout(() => {
      setAlerts(null);
    }, 1500);
  }
  return (
    <CartProvider>
      <>
        <Alerts alert={alert} />
        <Navbar showAlerts={showAlerts} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productsdetails" element={<Productsdetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/accounts" element={<Account showAlerts={showAlerts} />} />
          <Route path="/profile" element={<Points />} />
          <Route path="/featured" element={<Featured />} />
        </Routes>
        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
