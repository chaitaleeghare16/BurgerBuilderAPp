import React, { Component } from 'react'
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Aux from '../../../HOC/Aux'



class  SideDrawer extends Component{

  
  
  render(){

  
    console.log('inside sidedrawer......',this.props.open)

    let attacheedclasses = [classes.SideDrawer,classes.Close]

    if(this.props.open){
      attacheedclasses = [classes.SideDrawer,classes.Open]
    }
    
return(
      <Aux>
             
        <BackDrop show={this.props.open} clicked={this.props.closed}/>

           <div className={attacheedclasses.join(' ')}>

              <div className={classes.Logo}><Logo/></div>
              <div><NavigationItems isAuth={this.props.isAuth}/></div>

            </div>
      </Aux> 
)

}
}
export default SideDrawer