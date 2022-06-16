import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";
import Description from "../components/Description/Description";
import Similair from "../components/Similair/Similair";
import Contact from "../components/Contact/Contact";
import Our from "../components/Our/Our";

const Template = () => {
  return (
    <div>
      <Navbar/>
      <Product/>
      <Description/>
      <Similair/>
      <Our/>
      <Contact/>
    </div>
  )
}

export default Template