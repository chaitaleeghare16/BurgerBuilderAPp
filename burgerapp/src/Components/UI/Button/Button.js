


import React from 'react'
import classes from './Button.css'


const Button = (props) =>{
return(
    
    
    <button 
    disabled={props.Disabled}
    className={[classes.Button,classes[props.btnType] ,classes[props.Disabled]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
)

   
}
export default Button