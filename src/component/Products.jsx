import React from 'react'
import {Routes, Route, Link} from "react-router-dom"
import Meat from './Meat';

const Products = () => {
  
  return (
    <>
    <h1>Here is product page</h1>
    <Link to="/product/meat">Meat</Link>
    <Routes>
      <Route path='/meat' element={<Meat />}/>
    </Routes>
    </>
  )
}

export default Products;