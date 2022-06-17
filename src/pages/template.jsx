import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";
import Description from "../components/Description/Description";
import Similair from "../components/Similair/Similair";
import Contact from "../components/Contact/Contact";
import Our from "../components/Our/Our";
import Presentation from "../components/Presentation/Presentation";
import Footer from "../components/Footer/Footer";

const Template = () => {
  return (
    <div>
      <Navbar/>
      <Product/>
      <Description/>
      <Similair/>
      <Our/>
      <Presentation/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Template