// Home.js

import React, { useEffect, useState } from 'react';
// import './Home.css';
// import wellcomePic from '../../../assets/images/well21.png';
import Carousel from '../carousel/Carousel';
import Product_lim_U from '../product_lim_U/Product_lim_U';
import Footer from '../Footer/Footer';
import Intro_U from '../intro_U/Itro_U';
function Home() {


  return (
    <>
      <Intro_U/>
      <div className="home-container">
        <section>
          <Carousel />
        </section>
        <section>
          <h1>list of products</h1>
          <Product_lim_U />
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
