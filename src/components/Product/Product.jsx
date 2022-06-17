import React,{useState,useEffect,useContext} from 'react'
import "./Product.scss"
import logoSrc from "../../images/logosrc.png"
import { BsSuitHeart } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { GrDownload } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import { Context } from "../../store/Context";

import img1 from "../../images/mkinza.png";
import img2 from "../../images/item1.png";
import img3 from "../../images/item4.png";
import img4 from "../../images/item3.png";
import img5 from "../../images/item2.png";
const Images=[
    img1,
    img2,
    img3,
    img4,
    img5
]

const Product = () => {
  const [selectedimg, setselectedimg] = useState(Images[0])
  const [countPro, setcountPro] = useState(12);
   const {setcountpanier } = useContext(Context);

  useEffect(() => {
      if(selectedimg==undefined){
        setselectedimg(Images[4])
      }
     
  }, [selectedimg]);
  return (

    <div>
      <div className="det_product">
        <div className="right">
          <div className="imgprin">
            <img src={selectedimg} className="forimgprin" alt="" />
            </div>
            <div className="imagesslu">
              <GrFormPrevious className="previous butthover" onClick={()=>setselectedimg(Images[Images.indexOf(selectedimg)-1])} />

              {Images.map((img,index)=>(
                <div className="otherimg">
                <img src={img} style={{ "border":selectedimg === img ? "2px solid #3ab39b":"" }} className="forotherimg" alt="" key={index} onClick={()=>setselectedimg(img)} />
                </div>
              ))

              }
             
              <GrFormNext className="next butthover" onClick={()=>setselectedimg(Images[Images.indexOf(selectedimg)+1])}/>
             
            </div>
        </div>
        <div className="left">
            <div className="title">
            <div className="head">
            <span className='huile'>Huiles essenteilles</span><br/>
            <h2>Pack Huiles Essenteilles</h2>
            </div>
            <div className="items">
                <div className="item">Produits naturels</div>
                <div className="item">Sains</div>
                <div className="item">Bio</div>
                <div className="item">Vegan</div>
                <div className="item">100% recyclé</div>
            </div>
            </div>
            <div className="price">
               <div className="items">
                <div className="item"> <h1>96.00 €</h1></div>
                <div className='pri'>
                <div className="item lastpri"><strike>120.00</strike> €</div>
                <div className="item promo"><span>-20%</span></div>
                </div>

               </div>
               <div className="diffor">
                 <img src={logoSrc} alt="logo source" />
            
               </div>
            </div>
            <div className="source">
               <p className='todo'>Base d'huile</p>
                <div className="items">
                    <div className="item">Jasmin</div>
                    <div className="item">Crocus</div>
                    <div className="item">Dahlia</div>
                    <div className="item">Edelweiss</div>
                    <div className="item">Sapin baumier</div>

                </div>
            </div>
            <div className="origine todo">
              <p className='todo'>Origine</p>
            <div className="items">
                    <div className="item">Mandarine Rouge</div>
                    <div className="item">Menthe poivrée</div>
                    <div className="item">Lavande Aspic</div>
                    <div className="item">Sapin baumier</div>
                    <div className="item">Marjolaine à Coquilles</div>

                </div>
            </div>
            <div className="quantite todo">
                <p className='todo'>Quantité</p>
            <div className="items">
                    <div className="item toQua">
                        <div>
                       <AiOutlinePlusCircle onClick={()=>setcountPro(countPro+1)} className='fontqua'/></div>
                       <div className='count'>
                         <span className='num'>{countPro}</span></div>
                         <div>
                         <AiOutlineMinusCircle onClick={()=>setcountPro(countPro-1)} className='fontqua'/></div>
                    </div>
                    <div className="item toAdd"  onClick={() => setcountpanier(countPro)}><span>Ajouter au panier</span></div>
                    <div className="item toHeart"><BsSuitHeart className='heartt'/></div>
                    <div className="item toDow">
                     <GrDownload className='fadow'/>
                       <span className='textdow'>   Télécharger les détails du produit</span>
                    </div> 
 
                </div>     
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
