import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Main from '../components/home/Main';

function Home() {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Navbar />
                <Main />
            </main>
        </>
    );
}

export default Home;