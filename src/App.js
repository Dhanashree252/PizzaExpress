import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Index from "./Components/Navbar/Index"
import SideBar from "../src/Components/SideBar/Index"
import Hero from './Components/Hero/Index';
import Products from './Components/Products/Index';
import {ProductsData, ProductsDataTwo} from "./Components/Products/Data"
import Feature from './Components/Feature/Index';
import Footer from './Components/Footer.js/Index';
import ProductDescription from './Components/ProductDescription/ProductDescription';

function App() {
  const [Count, setCount] = useState(0)
  const[isOpen, setIsOpen] = useState(false)
 
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const clickHandler = () =>{
      setCount(Count+1)
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
  }

  
  return (
    <Router>
    <GlobalStyle/>
        
        <Index toggle={toggle} count={Count}/>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        
        <Routes>
            <Route path='/' exact element={<Hero/>}></Route>
        </Routes>
        <Routes>
            <Route path='/' exact element={<Products heading="Choose your favourite" data={ProductsData} route="ProductDescription" clickHandler={clickHandler}/>}></Route>
            <Route path='ProductDescription/:id' element={<ProductDescription data={ProductsData} />}></Route>
            
        </Routes>
        <Routes>
            <Route path='/' exact element={<Feature/>}></Route>
        </Routes>
        <Routes>
            <Route path='/' exact element={<Products heading="Choose your side orders" data={ProductsDataTwo} route="SidesDescription"/>} ></Route>
            <Route path='SidesDescription/:id' element={<ProductDescription data={ProductsDataTwo}/>}></Route>
        </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
