import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainCategories from '../components/categories/MainCategories';

function Categories() {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Navbar />
                <MainCategories />
            </main>
        </>
    )
}

export default Categories;