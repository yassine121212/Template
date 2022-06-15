import React from 'react'
import "./Navbar.scss"
import Logo from "../../images/logo.png"
import { FaRegUser } from 'react-icons/fa';
import { BsSuitHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Navbar = () => {
  return (
    <div className='nav'>
        <div className="logo">
            <div className="img_logo">
                <img src={Logo} alt="logo" />
            </div>
        </div>
        <div className="menu">
             <div className="item">Maquillage</div>
             <div className="item">Visage</div>
             <div className="item">Corps</div>
             <div className="item">Cheveux</div>
             <div className="item">Hygiène</div>
             <div className="item">Bien-être</div>
             <div className="item">DIY</div>
             <div className="item">Cofferts</div>
             <div className="item">Artisants</div>

        </div>
        <div className="items">
             <div className="item use">
                <div className="font_cent"> <FaRegUser/></div>
               
             </div>
             <div ><span className='name_user'>John Doe</span></div>
             <div className="item twice">
             <div className="font_cent"> <BsSuitHeart/></div>
             </div>
             <div className="item twice">
             <div className="font_cent">  <AiOutlineShoppingCart/></div>
                <span className='counter_cart'>2</span>
             </div>
             
        </div>
    </div>
  )
}

export default Navbar