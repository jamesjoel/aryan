import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../components/feature/Dashboard'
import Category from '../components/feature/Category'
import Product from '../components/feature/Product'
import CategoryList from '../components/feature/CategoryList'
import ProductList from '../components/feature/ProductList'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Dashboard />} />
        <Route path='category/add' element={<Category />} />
        <Route path='category/list' element={<CategoryList />} />
        <Route path='product/add' element={<Product />} />
        <Route path='product/list' element={<ProductList />} />
    </Routes>
    </>
  )
}

export default AllRoutes