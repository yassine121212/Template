import React from 'react'
import "./Header.scss"
import { BsHeadset } from 'react-icons/bs';
export const Header = () => {
  return (
    <div className='header'>
    <div className="head">
     <div className="sentence">
       <p>
       Vous souhaitez vendre sur Nenufea : <a className="linkhead" href=''>Inscrivez vous ici</a>
       </p>
     </div>
     <div className="call">
      <div className=""><BsHeadset className='imghead' /></div>
      <div className="number">+33 6 60 11 68 53</div>
        
        
       
     </div>
     </div>
    </div>
  )
}
export default Header;