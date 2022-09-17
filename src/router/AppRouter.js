import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';
import Cart from '../components/Cart';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route element={<NotFoundPage />} />
        </Routes>
        </BrowserRouter>
    </>
);

export default AppRouter;