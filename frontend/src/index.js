import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import Homepage from './landing_page/home/Homepages';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/login/Login';
import Aboutpage from './landing_page/about/Aboutpages';
import Pricingpage from './landing_page/pricing/PricingPage';
import Productpage from './landing_page/products/Productpages';
import Supportpage from './landing_page/support/Supportpages';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
<Route path="/" element={<Homepage/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/about" element={<Aboutpage/>}/>
<Route path="/product" element={<Productpage/>}/>
<Route path="/pricing" element={<Pricingpage/>}/>
<Route path="/support" element={<Supportpage/>}/>
<Route path="*" element={<NotFound/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
);
