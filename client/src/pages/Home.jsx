import React from 'react';
import Navbar from '../components/Navbar';
import Shop from '../components/home/Shop';
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";
import CallToAction from '../components/home/CallToAction';

function Home({ match }) {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Navbar />
      <Shop keyword={keyword} pagenumber={pagenumber} />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;