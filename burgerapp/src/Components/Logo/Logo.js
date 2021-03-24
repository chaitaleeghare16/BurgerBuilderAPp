import React from 'react'
import classes from './Logo.css'
import burgerLogo from '../../assets/burger-logo.png'

const ToolBar = () => {

    return(
        <div>
            
            <img className={classes.Logo} src={burgerLogo} alt="MyBurger"/>
        </div>
        
    )
}
export default ToolBar

