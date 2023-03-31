import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainProducts from '../components/products/MainProducts';

function Product() {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Navbar />
                <MainProducts />
            </main>
        </>
    );
}

export default Product;