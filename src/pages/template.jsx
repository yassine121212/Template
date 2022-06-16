import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";
import Description from "../components/Description/Description";
import Similair from "../components/Similair/Similair";
import Contact from "../components/Contact/Contact";

const Template = () => {
  return (
    <div>
      <Navbar/>
      <Product/>
      <Description/>
      <Similair/>
      <Contact/>
    </div>
  )
}

export default Template