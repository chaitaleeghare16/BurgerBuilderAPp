
import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import classes from './NavigationItems.css'



const NavigationItems = (props) =>{
  
console.log('inside navigationItems')
console.log(props.isAuth)
    return(
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/"  exact>BurgerBuilder</NavigationItem>
        {props.isAuth ?<NavigationItem  link="/orders"  >Orders</NavigationItem>:null}
        {props.isAuth ? <NavigationItem  link="/logout"  >Logout</NavigationItem> :<NavigationItem  link="/login"  >LogIn</NavigationItem>}


        </ul>
       
        
    )
}



export default NavigationItems