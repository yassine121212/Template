import React from 'react'
import logof from "../../images/Group 136.png"
import "./Footer.scss"
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import visa from "../../images/visa.png"
import paypal from "../../images/paypal.png"
import mastercard from "../../images/mastercard.png"
import egio from "../../images/egio.png"


const Footer = () => {
  return (
    <div className='globalfott'>
    <div className="footer">
        <div className="logo space">
            <div className="img">
                <img src={logof} alt="logofoot"/>
            </div>
            <div className="logotxt">
                <p>
                In eleifend risus id ex tincidunt dapibus. Aenean velit risus, imperdiet non varius
                </p>
            </div>
        </div>
        <div className="propos space">
            <div className="tit">A propos</div>
            <div className="ele">Qui sommes nous</div>
            <div className="ele">CGU</div>
            <div className="ele">CGV</div>
            <div className="ele">Mentions légales</div>
            <div className="ele">Données personnelles</div>
            <div className="ele">Données personnelles</div>
        </div>
        <div className="commer space">
            <div className="tit">Commerçants</div>
            <div className="ele">Boutiques</div>
            <div className="ele">Catégories</div>
            <div className="ele">Produits</div>
        </div>
        <div className="compte space">
            <div className="tit">Votre compte</div>
            <div className="ele">Livraison</div>
            <div className="ele">Commandes</div>
            <div className="ele">Informations personnelles</div>
            <div className="ele">Bons de réduction</div>
        </div>
        <div className="aide space">
            <div className="tit">Besoin d'aide ?</div>
            <div className="ele">FAQ</div>
            <div className="ele">Nous contacter</div>
         </div>
         
        
     </div>
      <div className="underfotter">

        <div className="eleme">
             
            <div className="tit1">Copyright © 2020 - Nenufea</div>
            
            <div className="social">
                <div className="soc">
                    <BsFacebook/>
                </div>
                <div className="soc">
                    <BsInstagram/>
                </div>
                <div className="soc">
                    <BsTwitter/>
                </div>
                <div className="soc">
                     <BsYoutube/>
                </div>
            </div>
        </div>
        <div className="cartban">
                <div className="ban">
                    <img src={visa} alt="socialmedia" />
                </div>
                <div className="ban">
                    <img src={paypal} alt="socialmedia" />
                </div>
                <div className="ban">
                    <img src={mastercard} alt="socialmedia" />
                </div>
         </div>
            <img src={egio} alt="" />
         

      </div>
     </div>
    
  )
}

export default Footer