import React ,{useState} from 'react'
import "./Similair.scss"
import shampo from "../../images/shampo.png"
import care from "../../images/care.png"
import flower from "../../images/flower.png"
import mkinza from "../../images/mkinza.png"
import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
const Tabsimi=[
    {
        "id":1,
        "title":"Shampoing naturel",
        "nature":"Huiles essenteilles",
        "sponsor":"Olivia health",
        "price":120.00,
        "categories":["Produits naturels","sains","Bio","Vegan"],
        "image":shampo,
        "favoris":false

    },
    {
        "id":2,
        "title":"Pack Huiles Essenteilles",
        "nature":"Huiles Essenteilles",
        "sponsor":"Olivia health",
        "price":120.00,
        "categories":["Produits naturels","sains","Bio","Vegan"],
        "image":mkinza,
        "favoris":true

    },
    {
        "id":3,
        "title":"Pack Huiles Essenteilles",
        "nature":"Huiles Essenteilles",
        "sponsor":"Olivia health",
        "price":120.00,
        "categories":["Produits naturels","sains","Bio","Vegan"],
        "image":care,
        "favoris":false


    },
    {   
        "id":4,
        "title":"Pack Huiles Essenteilles",
        "nature":"Huiles Essenteilles",
        "sponsor":"Olivia health",
        "price":120.00,
        "categories":["Produits naturels","sains","Bio","Vegan"],
        "image":flower,
        "favoris":false

    }
]
 const Similair = () => {
   return (
    <div className='globalSimi'>
        <span className='headpro'>Produits Similaires</span>
        <div className="pro_simi">
            {Tabsimi?.map((item) =>
               <div key={item.id} className="pro">
                  <div className="heart">
                  {item.favoris ?(
                  <AiTwotoneHeart className='toheart' />)
                  :(
                  <AiOutlineHeart className='toheart'/>
                  )  
                }
                  </div>
                 <div>
                    <img className="image" src={item.image}/>
                 </div>
                 <div className='title'>
                      <span className='nom_title'>{item.title}</span><br/>
                      <span className='nom_nature'>{item.nature}</span>
                 </div>
                 <div className="sponsor">
                 <span className='nom_sponsor'>{item.sponsor}</span>
                 </div>
                 <div className="price">
                 <span className='num_price'><h2 style={{ "transform": "translateX(15px) "}}>{item.price}.00 €</h2></span>
                 </div>
                 <div className="categories">
                     {item.categories?.map(cat=>
                        <div className="cat">
                            <span className='nom_catego'>{cat}</span>
                        </div>
                     )}<span className='plus'>+</span>
                 </div>
               </div>

            )}
        </div>
    </div>
  )
}

export default Similair