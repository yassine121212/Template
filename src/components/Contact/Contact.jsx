import React from 'react'
import { GrSend } from 'react-icons/gr';
import { IoIosSend } from 'react-icons/io';
import "./Contact.scss"
const Contact = () => {
  return (
    <div className='contact'>
        <div className="sentence space">
           <p>Je m'abonne à la newsletter</p>
        </div>
        <div className="send space">
            <div className="tosend">
                <div className="textsend">
              <input className='inputsai' type="text" name="" placeholder='Votre email'/>
                </div>
                <div className="iconsend">
                    <IoIosSend  className='icontosend'/>
                </div>
            </div>
            <div className="politique">
            <div className="textsend">
              <input type="checkbox" name="" placeholder='Votre email'/>
            </div>
            <div className="textpoli">
                <p>En cochant et validant, j'accepte de recevoir par mail les newsletters de Nenufea.
                  Mes données seront traitées conformément à la <span className='linkpoli'><a href="">Politique de Gestion des Données Personnelles</a></span> que j'ai lue et acceptée.</p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Contact