import React from 'react'
import "./Description.scss";

const Text = ({active}) => {
  return (
    <div>
      {active ? (
       <div className="text">
        <div className="parg2">
      
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
         no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
         consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et 
          ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
          amet. 
          </div>
       <div className='parg2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
       invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
        Lorem  </div>   
        </div>
        ): (<p>
        detail
      </p>)
     }
    </div>
  )
}

export default Text