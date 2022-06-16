import React from 'react'
import "./Our.scss"
import img1 from "../../images/Path 110.png"
import img2 from "../../images/quality.png"
import img3 from "../../images/Path 113.png"
import img4 from "../../images/truck.png"

const Tabour=[
      {
        "image":img1,
        "title":"Paiement en ligne 100% sécurisé",
        "detail":"Carte bancaire - Paypal "
      },
      {
        "image":img2,
        "title":"Service client",
        "detail":"+33 7 78 95 86 45 du lundi au vendredi de 9h à 13h et de 14h à 17h"
      },
      {
        "image":img3,
        "title":"Besoin d'un conseil ?",
        "detail":"Contactez-nous par formulaire"
      },
      {
        "image":img4,
        "title":"Produits naturels",
        "detail":"Pour une consommation raisonnée et écologique"
      },

]
const Our = () => {
  return (
    <div className='our'>
         <div className="ourgo">
         {
            Tabour?.map(item=>
                <div className='ourele'>
                 <div className="imagepla">
                    <img src={item.image} alt="our"/>
                 </div>
                 <div className="title">
                    <div className="tit">
                        <span className='titleour'>{item.title}</span>
                    </div>
                 </div>
                 <div className="detail">
                       <span className="detailour">{item.detail}</span>
                 </div>
                 </div>
                )
         }
         </div>
    </div>
  )
}

export default Our