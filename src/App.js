import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import ProductList from './ProductList'
import Product from './Product'
import About from './About';
import ProductForm from './ProductForm';
import ListThree from './ListThree';
import Filter from './Filter';
import Footer from './Footer';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.homepage}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ListThree />} />
          <Route path="products" element={<ProductList />} />
          <Route path="new" element={<ProductForm />} />
          <Route path=":productId/edit" element={<ProductForm />} />
          <Route path=":productId" element={<Product />} />
          <Route path="About" element={<About />} />
          <Route path="search/:filter" element={<Filter />} />
          <Route path="*" element={<h1>Product Not Found</h1>} />
        </Route>
        <Route path="*" element={<h1>Product Not Found</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App