import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import Products from './components/Products/Products';
import Error from './components/Error';
import About from './components/About/About';
import Home from './components/Home/Home';
import Search from "./components/Search/Search";
import { useSelector } from 'react-redux';

function App() {
  const itemsInCart = useSelector(state => state.cart.itemsAmount);

  return (
    <div>
    <BrowserRouter>
      <nav className="nav-bar">
        <div className="nav-center">
          <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>The Toy Chest</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "home-link active" : "home-link"}>
            <img src="src/assets/Gemini_Generated_Image_7i34257i34257i34-removebg-preview.png" alt="Home" className="nav-link-image" />
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
        </div>
        <div className="col-6 d-flex justify-content-end">
              <Search /> 
            </div>
        <div className="cart-container">
          <NavLink to="/cart" className={({ isActive }) => isActive ? "cart-link active" : "cart-link"}>
            <img src="./src/assets/shopping-cart.png" className="cart-icon" alt="Cart" /> 
            {itemsInCart > 0 && (
              <span className="cart-count">
                <span className="circle">{itemsInCart}</span>
              </span>
            )}
          </NavLink>
          
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;