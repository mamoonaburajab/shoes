import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Model from './pages/Model/Model';
import Navbar from './Component/navbar/Navbar';
import Error from './pages/Error/Error';
import Contact from './pages/Contact/Contact';
import Footer from './Component/footer/Footer';
import ItemDetails from './Component/ItemDetails/ItemDetails';
import Login from './pages/Login/Login';
import Signup from './pages/signup/signup';
import Shop from './pages/Shop/shop';

function App() {
  return (
    <Router className="app">
      {/* Render the Navbar component */}
      <Navbar />
      <Routes>
        {/* Set up the routes */}
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Model" element={<Model />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add the route for ItemDetails component */}
        <Route path="/item/:id" element={<ItemDetails />} />
        {/* Catch-all route for undefined paths */}
        
        <Route path="/login" element={<Login/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* Render the Footer component */}
      <Footer />
    </Router>
  );
}

export default App;
