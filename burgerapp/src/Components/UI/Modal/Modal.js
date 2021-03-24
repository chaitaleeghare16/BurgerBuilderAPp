
import React from 'react'
import classes from './Modal.css'
import Aux from '../../../HOC/Aux'
import BackDrop from '../BackDrop/BackDrop'
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer'

const Modal =(props)=>{

    console.log('inside Modal')
    return(
        <Aux>
        <BackDrop open={props.open} show={props.show} clicked={props.modalClosed}/>
        <SideDrawer show={props.show} modalClosed={props.modalClosed}/>
        <div className={classes.Modal}
        style={{transform :props.show ? 'translateY(0)' :'translateY(-100vh)'}}>
           
            {props.children}
        
        </div>
        </Aux>
    )
}

export default Modal