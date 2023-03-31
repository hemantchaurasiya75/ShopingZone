import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import User from '../components/users/User';

function Users() {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Navbar />
                <User />
            </main>
        </>
    )
}

export default Users;