import React,{useState} from'react';
 import "./Description.scss";
 
import Text from "./Text"
const Description = () => {
    const [active, setActive] = useState(1)
  return (
    <div className='globaldesc'>
        <div className='toDesc'>
     <div className="descript">
        <div onClick={()=>setActive(1)} className={`buttleft ${active ? "active" : ""}`}>
           Composition
        </div>
        <div  onClick={()=>setActive(0)}  className={`buttright ${active ? "" : "active"}`}>
           Détail produit
        </div>
     </div>
     <div className="textdescription">
        <Text active={active}/>
      </div>
      </div>
     </div>
  );
}


export default Description