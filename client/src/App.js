import React, { useEffect, useState } from 'react';
import Home from "./pages/Home/Home";
import DishDetails from './components/DishDetails/DishDetails';
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Signup from './components/Form/Signup';
import Login from './components/Form/Login';
import axios from 'axios';

import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation } from 'react-router-dom';

//Dishes 

import Dishes from './dishes.json';
import Checkout from './pages/Checkout/Checkout';
import OrderCompleted from './components/OrderCompleted/OrderCompleted';


function App() {
  const [showNav, setShowNav] = useState(false);
  const [dishes, setDishes] = useState([]);
  const location = useLocation();

  const hideOnRoutes = ['/checkout' && '/order-completed'];
  const showNavAndFooter = !hideOnRoutes.includes(location.pathname);


  //CartModal Toggle
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const toggleViewCart = () => {
    setIsCartModalOpen(true)
  }

  //Api
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dishes');
      setDishes(response.data);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.body.className = showNav ? 'body-bg' : '';
  }, [showNav])


  return (
    <div className="App">
      <>
        {showNavAndFooter && <Navbar
          showNav={showNav}
          setShowNav={setShowNav}
          toggleViewCart={toggleViewCart}
          isCartModalOpen={isCartModalOpen}
          setIsCartModalOpen={setIsCartModalOpen} />}
        <div className='' >
          <Routes >
            <Route exact path="/" element={<Home dishes={dishes} />} />
            <Route exact path="/menu/:id" element={<DishDetails singleDish={dishes} headerColor="#4d38b2" />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/menu" element={<Menu dishes={dishes} />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/order-completed' element={<OrderCompleted />} />
            <Route exact path="/:id" element={<DishDetails singleDish={dishes} headerColor="#4d38b2" />} />
          </Routes>
        </div>
        {showNavAndFooter && <Footer />}

      </>
    </div>
  );
}

export default App;
