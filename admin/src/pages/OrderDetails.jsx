import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import OrderDetail from '../components/orders/OrderDetail';

function OrderDetails({ match }) {
    const orderId = match.params.id;
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Navbar />
                <OrderDetail orderId={orderId} />
            </main>
        </>
    );
}

export default OrderDetails;