import React from "react";
import "./style.css";


function PicsCard (props) {
return(

    
      
      <img id={props.id} alt={props.image} src={props.image} onClick={props.handleClick} />
      



)

}

export default PicsCard;