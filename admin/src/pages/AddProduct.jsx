import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AddProductMain from '../components/products/AddProductMain';

function AddProduct() {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Navbar />
                <AddProductMain />
            </main>
        </>
    );
}

export default AddProduct;