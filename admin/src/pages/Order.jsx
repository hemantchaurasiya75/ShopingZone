import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import OrderMain from '../components/orders/OrderMain';

function Order() {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Navbar />
                <OrderMain />
            </main>
        </>
    );
}

export default Order;