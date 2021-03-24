import React from 'react'
import classes from './BuildControls.css'
import BurgerControl from '../BurgerControl/BurgerControl'



const BuildControls =(props)=>{
    console.log('price......',props.price)
    const controls=
        [
            {label:'Salad',type:'salad'},
            {label:'Bacon',type:'bacon'},
            {label:'Cheese',type:'cheese'},
            {label:'Meat',type:'meat'},


        ]

    return(
        <div>
       
        <div className={classes.BuildControls}>
        <div>Total Price : <strong>{props.price}</strong> </div>
            {
                controls.map(cntrls=>{
                   return <BurgerControl 
                   key={cntrls.label} 
                   Label={cntrls.label}
                    added={()=>{props.added(cntrls.type)}} 
                    removed={()=>{props.removed(cntrls.type)}}
                    isDisabled={props.isDisabled[cntrls.type]}/>
                })
          
}
            <button className={classes.OrderButton} disabled={!props.disabledOrderButton} onClick={props.ordered}>Order Now</button>
        </div>
        </div>
    )
}
export default BuildControls